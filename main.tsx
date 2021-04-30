import {
  faDiscord,
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
      className={tw
        `h-screen flex items-center justify-center dark:(bg-black text-white)`}
    >
      <div className={tw`px-4 py-4`}>
        <a href="/">
          <h1 className={tw`mx-auto text-6xl`}>Elias Sjögreen</h1>
        </a>

        <div className={tw`mt-4 flex justify-center space-x-4`}>
          <a href="https://github.com/eliassjogreen">
            <FontAwesomeIcon className={tw`h-10`} icon={faGithub} />
          </a>
          <a href="https://discord.gg/5fpjPQZq4S">
            <FontAwesomeIcon className={tw`h-10`} icon={faDiscord} />
          </a>
          <a href="https://twitter.com/eliassjogreen">
            <FontAwesomeIcon className={tw`h-10`} icon={faTwitter} />
          </a>
          <a href="mailto:elias@xn--sjgreen-b1a.se">
            <FontAwesomeIcon className={tw`h-10`} icon={faEnvelope} />
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
