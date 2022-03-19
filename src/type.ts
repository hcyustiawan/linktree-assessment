import profile from "../public/mocks/profile.json";

// @assumption: type is generated using some tools
export type ProfileType = typeof profile;

export type ClassicLinkType = {
  id: string;
  type: "classic";
  title: string;
  url: string;
};

export type ShowDetailType = {
  id: string;
  date: string;
  url: string;
  location: string;
  soldOut: boolean;
};

export type ShowLinkType = {
  id: string;
  type: "show";
  title: string;
  data: ShowDetailType[];
};

export type MusicDetailType = {
  id: string;
  type:
    | "spotify"
    | "apple"
    | "soundcloud"
    | "youtube"
    | "deezer"
    | "tidal"
    | "bandcamp";
  url: string;
};

export type MusicLinkType = {
  id: string;
  type: "music";
  title: string;
  data: MusicDetailType[];
};

export type LinkCollectionType = (
  | ClassicLinkType
  | ShowLinkType
  | MusicLinkType
)[];
