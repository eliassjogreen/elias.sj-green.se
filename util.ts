import {
  getStyleTag,
  renderToString,
  setup,
  Status,
  virtualSheet,
  VNode,
} from "./deps.ts";

const sheet = virtualSheet();
setup({ sheet });

export function html(html: string, init?: ResponseInit): Response {
  return new Response(html, {
    status: init?.status ?? Status.OK,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      ...init?.headers,
    },
  });
}

export function jsx(app: VNode, init?: ResponseInit): Response {
  sheet.reset();

  const body = renderToString(app);
  const style = getStyleTag(sheet);

  return html(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Elias Sjögreen</title>
        ${style}
      </head>
      <body>${body}</body>
    </html>
  `,
    init,
  );
}

export function json(obj: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(obj), {
    status: init?.status ?? Status.OK,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...init?.headers,
    },
  });
}
