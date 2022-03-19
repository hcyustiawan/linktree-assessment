import profile from "../public/mocks/profile.json";

// @assumption that type is generated using some tools
export type ProfileType = typeof profile;

export type ClassicLinkType = {
  id: "string";
  type: "classic";
  title: "string";
  url: "string";
};
export type LinkCollectionType = ClassicLinkType[];
