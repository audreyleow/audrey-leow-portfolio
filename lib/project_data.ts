const atfDetails = [
"Designed and developed a responsive full-stack web application for my food blog using TypeScript and Next.js, hosted on Vercel",
"Created a theme switch toggle component amongst other features available on the site"
];

const sweDetails = [
  "Developed a responsive full-stack web application using React, Express.js and MongoDB that allows users to create personalised or auto-generated itineraries for activities in Singapore",
  "Integrated firebase authentication that allows users to persist their itinerary preferences by tagging it to their Google account",
];

const oopDetails = [
  "Developed Java program based on Object Oriented Principles allowing admin users to manage students and courses, and student users to register, deregister, and change index numbers for modules during individual access time periods while preventing timetable clashes",
  "Implemented databases via the serialization and deserialization of classes, login system with encrypted passwords and email notification system to inform waitlisted students of successful course registration",
];

const dsaiDetails = [
  "Cleaned, visualized and analysed medical data of Native Americans using R to identify relevant biomarkers of diabetes",
  "Ran machine learning algorithms (such k-Nearest Neighbour Regression, Support Vector Machines, etc.) to determine the best method for diabetes classification",
];

const compthinkDetails = [
  "Programmed a Connect Four game (the pop out version) with a simple user interface and game display using Python, where a human can play against a human or a computer player",
];
export const project_items = [
  {
    id: "audrey-the-foodie",
    type: "Personal Lifestyle Blog",
    title: "AudreyTheFoodie",
    // images: sweDetails,
    details: atfDetails,
    tech_stack: "TypeScript, Next.JS, MongoDB, JavaScript, HTML5, CSS3",
    start: "Dec 2022",
    end: "Present",
  },
  {
    id: "swe-project",
    type: "Software Engineering Project",
    title: "LazyGoWhere",
    // images: sweDetails,
    details: sweDetails,
    tech_stack: "ReactJS, Express, MongoDB, JavaScript, HTML5, CSS3",
    start: "Oct 2021",
    end: "Nov 2021",
  },
  {
    id: "oop-project",
    type: "Object Oriented Design and Programming Project",
    title: "NTU Course Registration System",
    // images: oopDetails,
    details: oopDetails,
    tech_stack: "Java",
    start: "Sep 2020",
    end: "Nov 2020",
  },
  {
    id: "intro-to-dsai-project",
    type: "Introduction to Data Science and Artificial Intelligence Project",
    title: "Machine Learning Approaches to Data Analysis",
    // images: dsaiDetails,
    details: dsaiDetails,
    tech_stack: "R",
    start: "Mar 2020",
    end: "April 2021",
  },
  {
    id: "intro-to-comp-think-project",
    type: "Introduction to Computational Thinking Project",
    title: "Connect Four Game",
    // images: compthinkDetails,
    details: compthinkDetails,
    tech_stack: "Python",
    start: "Oct 2018",
    end: "Nov 2018",
  },
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
