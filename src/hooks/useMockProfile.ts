import profile from "../../public/mocks/profile.json";

// @assumption that type is generated using some tools
export type Profile = typeof profile;

// singleton profile data
let profileData: Profile | undefined | null;
let promise: Promise<void> | null = null;
export const useMockProfile = (): typeof profileData => {
  if (!promise) {
    promise = fetch("/mocks/profile.json")
      .then((response) => {
        setTimeout(async () => {
          profileData = await response.json();
        }, 1000);
      })
      .catch((e) => {
        profileData = null;
        console.error("Fail to fetch profile data", e);
      });
  }

  if (promise && profileData === undefined) {
    throw promise;
  }

  return profileData;
};
