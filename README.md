# Linktree Frontend Assessment

![Preview](assets/preview.png)

## The Problem

We have three new link types for our users profile pages, (such as https://linktr.ee/guardian)

1. Classic

   - Accepts a single URL and title.
   - Opens the URL in a new tab.

2. Music Player

   - On click, the link type displays a set of links to music streaming platforms where you can find the song.
   - Clicking on an element inside of the Music Link will open an audio player for that song.
   - Clicking on the logo of the platform will take you to that song, on that platform.

3. Shows List
   - On click, the link type displays a list of links to upcoming events.
   - Clicking on an upcoming event will navigate to the event in SongKick.

You are required to build the profile UI and the front end components for the new features as per the assets mentioned below (Front End Assets).

## Design Considerations

- All links are globally themed by the users preferences (usually available via API e.g `{ backgroundColor: "rebeccapurple", color: "palegoldenrod" }`).
- All links invert colour on hover.

## Front End Assets

A sketch file is available within this repository. You can upload this to [Figma](https://www.figma.com/) to view in fine grain detail.
All assets are supplied with in the [/assets](./assets) dir in this repo.
You can import fonts from [Google Fonts](https://fonts.google.com/).

## Testing

Some level of testing is expected for your solution. As a guide, try to meet these three acceptance criteria.

1. "When a user clicks on a Music Player Link, the Spotify streaming platform is visible"

2. "When a user clicks on the Shows List Link, a list of X shows are visible"

3. "When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes"

## Your Solution

- Consider re-usability through composition.
- Consider that profiles can be custom styled by each user.
- You are not expected to fully complete this challenge, so `@todo` comments are encouraged. How you design your solution and your ideas for the future are more important than functionality.

## Rules & Tips

- Use of frameworks such as VueJS or ReactJS will be looked upon favourably.
- You cannot connect to a real world API - mock any data sets that you require.
- Imagine that this is shared repo and factor that into the development process.

## Submission

Set up your own git repository and make commits as you would in your day to day work. Submit a link to your repo when you're finished.

Best of luck! :rocket: :blush:
