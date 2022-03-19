# Linktree Frontend Assessment

![Preview](public/preview.png)

## Improvement

some of improvements that can be made

### UI

### ExpandableLink

- With the current implementation the usage of expandable link, need to be used with the provider and only 1 expandable link expandade at a time.
  Decoupling this can make the expandable link be used without the provider and depending on the requirements / usage, it can have more than 1 expandable link to be expanded.

#### SongLink

- Add more music type with their logos
- Make only the logo as a link that opens to new tab (re-arrange the flexbox and Link)
- Make the rest of the element clickable to open the audio player for the song.
  There might be a couple of ways to do this:
  - For this exercise since we cannot connect to real world api, we potentially can have the downloaded source and use HTML5 `audio` to play, and style the player.
  - Real life scenario, taking an example for Spotify, we can use their `Web API` / `Web Playback API`, to create a new player and stream it. (user might need to be prompt to login) Similary with the other music streaming service. if we don't use the api we can probably `embed` their player as iframe (potentially, not every streaming service has their embedded player that can be used.)

#### Misc

- as the number of links grows (talking around thousands) and the complexity to render the link is higher, it might be worth to implement dom-recycling and memoisations. example library that can be used `react-virtualise`
- list of links can be sorted (applied similary with show and song list)
- user theming can be extended to more than the links but also global variables
- some styling is hard-coded to a certain pixels, it would be great to improve to align with a set of rules
- fetching user profile can be done earlier before react render, so that we can have the user theme earlier
- fetching data can be done better utilising third party query tools, such as `react-query`

### Testing

Due to time limitation, testing is not included.
However, if time permits to tackle it, below are some example how is it going to be handled:

#### "When a user clicks on the link, it should open a new tab"

```typescript
// assuming that the useMockLink module was mocked by jest and returning a list of 1 classic link.
render(<LinkList />);

// assumption: tech used will be React Testing Library
const link = screen.getByRole("link", { name: title });
expect(link).toHaveAttribute("target", "_blank");
expect(link).toHaveAttribute("href", url);
```

#### "When a user clicks on the Shows List Link, a list of X shows are visible"

```typescript
// assuming that the useMockLink module was mocked by jest and returning a list of 1 show link with multiple show data.
render(<LinkList />);

// assumption: tech used will be React Testing Library
expect(screen.getAllByRole("link")).toHaveLength(0);
const button = screen.getByRole("button", { name: showTitle });
userEvent.click(button);
expect(screen.getAllByRole("link")).toHaveLength(/*number of show data*/);
```

#### "When a user clicks on the Music Player Link and then on a Shows List Link, the Music Player Link closes"

```typescript
// assuming that the useMockLink module was mocked by jest and returning a list of 1 show link and 1 music link.
render(<LinkList />);

// assumption: tech used will be React Testing Library
// assumption: accordion has data-testid called accordion-link
expect(screen.queryByTestId("accordion-link")).not.toBeInTheDocument();
const button = screen.getByRole("button", { name: showTitle });
userEvent.click(button);

// test in async since the collapsible is using framer-motion unmount and mount
expect(await screen.findAllByTestId("accordion-link")).toHaveLength(1);
expect(screen.getByText(showDate)).toBeInTheDocument();
expect(screen.queryByText(streamingType)).not.toBeInTheDocument();

const button = screen.getByRole("button", { name: musicTitle });
userEvent.click(button);

// test in async since the collapsible is using framer-motion unmount and mount
expect(await screen.findAllByTestId("accordion-link")).toHaveLength(1);
expect(screen.getByText(streamingType)).toBeInTheDocument();
expect(screen.queryByText(showDate)).not.toBeInTheDocument();
```

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
