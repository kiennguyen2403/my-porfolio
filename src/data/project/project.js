import { variable } from "@/app/lib/variable";
export const projects = [
  { 
    id : 1,
    title: "VersionFlow",
    mediaID: "7pXZerDFpKo",
    status: "completed",
    link: variable.URL + '/project/1',
    github: "https://github.com/kiennguyen2403/VersionFlow",
    deploy: "",
    content: "VersionFlow is the ultimate solution for Miro users grappling with the complexities of version management in collaborative boards. Say goodbye to the frustration of losing track of ideas in intricate board landscapes. With VersionFlow, you can seamlessly navigate through the evolution of your creative process. magine a scenario where your team brainstorms ideas in a Miro board during a meeting. As the board grows in complexity, finding specific drafts becomes a daunting task. VersionFlow addresses this challenge by introducing a robust commit and branching system. Users can now attach meaningful commit messages to their ideas, making it effortless to revisit and revise past concepts.",
    technologies: [
      "NextJS",
      "MongoDB",
      "Miro API",
    ]
  },
  {
    id: 2,
    title: "Culina",
    content: `Culina is an innovative and versatile social app designed to bring people together over the joy of sharing a meal. In a fast-paced world where young individuals often find themselves too busy and lonely, Culina aims to bridge the gap by connecting people who are looking for meaningful mealtime experiences. Culina's mission is to address the loneliness and busy lifestyles faced by young people today. By connecting individuals who share a common interest in food, the app aims to enhance the quality of meals and make them more meaningful. It encourages users to break away from their solitary routines and build relationships over shared meals, ultimately contributing to a happier and more connected society.`,
    mediaID: "7sBN_cT3w6k",
    status: "in-progress",
    github : "",
    deploy : "",
    technologies: [
      "NextJS",
      "TailwindCSS",
      "MySQL",
      "Redis",
      "Ably",
    ]
  },
];
