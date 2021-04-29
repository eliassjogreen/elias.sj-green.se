import {
  faEnvelope,
  faGithub,
  faTwitter,
  FontAwesomeIcon,
  h,
  Match,
  router,
  Status,
  tw,
} from "./deps.ts";
import { jsx } from "./util.ts";

function Home() {
  return (
    <main
      class={tw`h-screen flex items-center justify-center`}
    >
      <div class={tw`px-4 py-4`}>
        <a href="/">
          <h1 class={tw`mx-auto text-6xl`}>Elias Sjögreen</h1>
        </a>

        <div class={tw`mt-4 flex justify-center space-x-4`}>
          <a href="https://github.com/eliassjogreen">
            <FontAwesomeIcon class={tw`h-10`} icon={faGithub} />
          </a>
          <a href="https://twitter.com/eliassjogreen">
            <FontAwesomeIcon class={tw`h-10`} icon={faTwitter} />
          </a>
          <a href="mailto:elias@xn--sjgreen-b1a.se">
            <FontAwesomeIcon class={tw`h-10`} icon={faEnvelope} />
          </a>
        </div>
      </div>
    </main>
  );
}

function home(_req: Request, _match: Match): Response {
  return jsx(<Home />);
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    router({
      "/": home,
    }, () => new Response(null, { status: Status.NotFound }))(
      event.request,
    ),
  );
});
