import { ProfileType } from "../type";

// singleton profile data
let profileData: ProfileType | undefined | null;
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
