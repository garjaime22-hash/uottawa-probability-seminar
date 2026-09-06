# Editing the uOttawa Probability Seminar site

You only need to edit **`docs/site-data.js`**. The rest of the files control the design.

On GitHub, open `docs/site-data.js`, click the pencil icon, make your change, and press **Commit changes**. GitHub will update the website automatically.

## Change the weekly details

Near the top of `site-data.js`, replace the text inside the quotation marks:

```js
meeting: {
  frequency: "Wednesdays, September 16–December 2",
  time: "2:30–3:30 p.m.",
  location: "University of Ottawa · VNR 4084",
},
```

## Add the signup sheet

Copy the full address of the Google Sheet and paste it here:

```js
signupUrl: "https://docs.google.com/spreadsheets/d/YOUR-LINK-HERE",
```

## Add a speaker

Inside `talks: []`, paste a block like this. Separate multiple talks with commas.

```js
talks: [
  {
    date: "2026-09-16",
    speaker: "Jane Smith",
    affiliation: "Carleton University",
    title: "Random walks in random environments",
    abstract: "Optional: paste the talk abstract here.",
  },
  {
    date: "2026-09-23",
    speaker: "John Doe",
    affiliation: "University of Ottawa",
    title: "Stochastic partial differential equations",
    abstract: "",
  },
],
```

Use dates in `YYYY-MM-DD` format. If the title is not ready, leave it as `title: ""`.

## Remove a week

Add its date to `omittedDates`:

```js
omittedDates: [
  "2026-10-14",
  "2026-11-11",
],
```

## Change the first or last seminar date

Edit these two lines:

```js
firstDate: "2026-09-16",
lastDate: "2026-12-02",
```

The website automatically creates one seminar slot every seven days between those dates.

## The easiest way to update it

You can also send the new speaker, title, affiliation, abstract, and date to ChatGPT and ask it to update the seminar website for you.
