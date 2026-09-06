/*
  THIS IS THE ONLY FILE YOU NEED TO EDIT.

  1. Change the meeting details below.
  3. Add speakers inside the talks list by copying the example shown there.

  Keep quotation marks around all text. The editing guide in EDITING-GUIDE.md
  includes copy-and-paste examples.
*/

window.SEMINAR_DATA = {
  name: "Young Researchers in Probability",
  season: "Fall 2026",
  description:
    "A weekly seminar for graduate students, postdoctoral researchers, and faculty interested in probability.",

  meeting: {
    frequency: "Wednesdays, September 16–December 2",
    time: "2:30–3:30 p.m.",
    location: "University of Ottawa · VNR 4084",
  },

  organizer: {
    name: "Jaime Garza",
    email: "jgarza@uottawa.ca",
  },

 
  

  schedule: {
    // The site creates one slot every 7 days between these two dates.
    firstDate: "2026-09-16",
    lastDate: "2026-12-02",

    // Dates listed here will not appear in the schedule.
    omittedDates: [],

    // To add a speaker, copy this block, remove the // marks, and change the text:
    // {
    //   date: "2026-09-16",
    //   speaker: "Speaker name",
    //   affiliation: "University name",
    //   title: "Talk title",
    //   abstract: "Optional abstract",
    // },
    talks: [{
       date: "2026-09-16",
       speaker: "Jaime Garza",
       affiliation: "University of Ottawa",
       title: "Phase Transitions in Infinite Urn Schemes",
       abstract: "TBD",
    }],
  },
};
