import { sourceId } from "./shared.js";
import singleMediaReqHandler from "./requestHandlers/singleMedia.js";
import mediaSearchReqHandler from "./requestHandlers/mediaSearch.js";
import { Source } from "@/src/schemas/source.js";

export default {
  id: sourceId,
  displayName: "Bluesky",
  description: "A decentralised twitter-like social network",
  requestHandlers: [singleMediaReqHandler, mediaSearchReqHandler],
} satisfies Source;
