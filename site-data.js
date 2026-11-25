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
       title: "A Phase Transition for Infinite Occupancy Schemes",
       abstract: "The infinite occupancy scheme is a classical model in probability in which balls are placed into an infinite collection of urns. I will begin by reviewing some key developments in the study of this model and its connections with other combinatorial stochastic processes. I will then present joint work with Yizao Wang showing that the occupancy counts exhibit a second-order phase transition.",
    },{
       date: "2026-09-23",
       speaker: "Jinxin Wang",
       affiliation: "University of Ottawa",
       title: "Functional CLT for KPZ equation with narrow wedge initial data",
       abstract: "The Kardar–Parisi–Zhang (KPZ) equation is a fundamental model for surface growth. I will begin by introducing the equation and its connection with the stochastic heat equation via the Cole–Hopf transform. Building on a recent finite-dimensional convergence result, I will then discuss our ongoing work on establishing tightness to obtain a functional central limit theorem for spatial averages of the KPZ solution with narrow wedge initial data.",
     },{
       date: "2026-10-07",
       speaker: "William Stephenson",
       affiliation: "University of Ottawa",
       title: "Solutions to the parabolic Anderson model on an open domain",
       abstract: "We study the parabolic Anderson model on an arbitrary open domain D of $\mathbb{R}^d$ driven by an isonormal Gaussian process which is fractional in time. We show that existence of a mild solution on the full space can be transferred to the corresponding equation on D with Dirichlet boundary conditions. This is done by approximating the solution with fields that admit a Feynman--Kac representation. ",
     },{
       date: "2026-10-21",
       speaker: "Joe Ghafari",
       affiliation: "",
       title: "The stochastic Cahn–Hilliard equation: from classical to singular dimensions",
       abstract: "We study the stochastic Cahn–Hilliard equation driven by space–time white noise on the d-dimensional torus, ∂ₜf + Δ²f = Δ(f³ − f) + ξ. In dimension 4, we construct the necessary renormalized stochastic objects and apply a Da Prato–Debussche decomposition to obtain local existence and uniqueness of solutions in Besov–Hölder spaces. In dimension 5, the Da Prato–Debussche decomposition alone is no longer sufficient, since ill-defined resonant products remain. We therefore introduce a further decomposition and use paracontrolled distributions, commutator estimates, and additional renormalized stochastic objects to formulate a well-defined deterministic fixed-point problem. The presentation highlights the transition from the classical regime to the singular dimensions and explains how renormalization, Besov-space estimates, and increasingly refined decompositions lead to local well-posedness throughout the full subcritical range d ≤ 5.",
     },{
       date: "2026-11-11",
       speaker: "Ziyi Qin",
      affiliation: "University of Ottawa",
       title: "Credit Risk of Banks with Cross-holdings",
      abstract: "Today's financial sector is characterized by strong interdependencies from capital cross-holdings among financial institutions. This paper develops a computationally efficient framework for estimating banks' credit risk under the Suzuki (2002) structural model. Building on the transformed maximum likelihood approach of Duan (1994), we introduce a conditional RealNVP surrogate to approximate the nonlinear mapping from underlying loan values to observed equity values. We investigate the performance of the proposed estimator through Monte Carlo experiments involving five interconnected banks and provide a framework for comparing model-implied default probabilities with those obtained from the classical Merton (1974) model. Our methodology offers an efficient approach to structural credit risk estimation that explicitly accounts for cross-holdings and financial interconnectedness.",
     },{
       date: "2026-11-25",
       speaker: "Bartosz Glowacki",
       affiliation: "University of Ottawa",
       title: "Limit Theorems for Stochastic Gradient Descent with Heavy-Tailed Noise",
      abstract: "Stochastic Gradient Descent (SGD) is a widely used optimization algorithm whose asymptotic behavior is traditionally studied under finite-variance assumptions. However, heavy-tailed gradient noise naturally arises in stochastic optimization and requires different probabilistic techniques. In this talk, I will discuss the asymptotic behavior of SGD in the infinite-variance setting, focusing on two extensions of the classical algorithm: mini-batching and momentum. First, I will present moment bounds and stable limit theorems for SGD with possibly increasing batch sizes, describing the asymptotic behavior of both individual iterates and Polyak–Ruppert averages. I will then turn to SGD with momentum, where the coupled dynamics of the iterates and momentum variables call for a different approach based on Lyapunov functions. In particular, I will discuss how constant and decreasing damping lead to different stable limiting distributions.",
     }
           ],
  },
};
