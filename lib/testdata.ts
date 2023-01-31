const nodeflairDetails = [
  "Built the NodeFlair landing page",
  "Built NodeFlair user profile portal and user onboarding widget",
  "Built Reviews feature and Reviews submission form for NodeFlair",
  "Built Employer Branding feature",
  "Integrated Webflow for Blogs on the NodeFlair landing page",
  "Improved SEO performance by reducing webpack bundle sizes and adding a sitemap",
  "Wrote test cases with RSpec and Jest",
  "Refactored entire codebase’s styling from SCSS",
  "Build on existing features throughout the NodeFlair website and fixed bugs",
];

const savourDetails = [
  "Built frontend UI for Savour portal",
  "Implemented email automation for user sign-ups and account verification",
  "Fixed bugs",
];

const factoremDetails = [
  "Built frontend UI for the Factorem portal",
  "Worked on frontend UI for the Factorem landing page",
  "Fixed bugs",
];

const nodeflairPhotos = [
  "/nodeflair1.png",
  "/nodeflair2.png",
  "/nodeflair3.png",
  "/nodeflair4.png",
  "/nodeflair5.png",
  "/nodeflair6.png",
  "/nodeflair7.png",
  "/nodeflair8.png",
  "/nodeflair9.png",
];

const savourPhotos = ["/savour1.jpg", "/savour2.jpg", "/savour3.jpg"];

const factoremPhotos = ["/factorem1.jpg", "/factorem2.jpg", "/factorem3.png"];

export const work_experience = [
  {
    id: "nodeflair",
    role: "Software Engineer (Intern)",
    title: "NodeFlair",
    images: nodeflairPhotos,
    details: nodeflairDetails,
    tech_stack: "Ruby on Rails, ReactJS",
    start: "Mar 2021",
    end: "Aug 2022",
  },
  {
    id: "savour",
    role: "Full Stack Developer",
    title: "Savour!",
    images: savourPhotos,
    details: savourDetails,
    tech_stack: "ReactJS, JavaScript, HTML5, CSS3, Django",
    start: "Dec 2020",
    end: "Mar 2021",
  },
  {
    id: "factorem",
    role: "Frontend Developer (Intern)",
    title: "Factorem Pte. Ltd.",
    images: factoremPhotos,
    details: factoremDetails,
    tech_stack: "ReactJS, JavaScript, HTML5, CSS3",
    start: "Jun 2020",
    end: "Jan 2021",
  },
  //   {
  //     id: "g",
  //     role: "Holidays",
  //     title: "Our Pick of Apps to Help You Escape From Apps",
  //     pointOfInterest: 200,
  //     backgroundColor: "#8F986D",
  //   },
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
