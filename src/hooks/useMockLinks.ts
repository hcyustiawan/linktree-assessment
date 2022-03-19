import { LinkCollectionType } from "../type";

// singleton profile data
let linksData: LinkCollectionType | undefined | null;
let promise: Promise<void> | null = null;

export const useMockLinks = (): typeof linksData => {
  if (!promise) {
    promise = fetch("/mocks/links.json")
      .then((response) => {
        setTimeout(async () => {
          linksData = await response.json();
        }, 1000);
      })
      .catch((e) => {
        linksData = null;
        console.error("Fail to fetch link data", e);
      });
  }

  if (promise && linksData === undefined) {
    throw promise;
  }

  return linksData;
};
