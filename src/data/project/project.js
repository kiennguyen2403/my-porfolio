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
    link: variable.URL + '/project/2',
    github: "https://github.com/kiennguyen2403/culina",
    deploy : "",
    technologies: [
      "NextJS",
      "TailwindCSS",
      "MySQL",
      "Redis",
      "Ably",
    ]
  },
  {
    id: 3,
    title: "Smart Kerbside Parking Utilisation App",
    content: `Smart Kerbside Parking Utilisation App is a scalable prototype system using Melbourne's parking data API. The goal of the project is to help drivers find available parking spots in real-time. It also assists drivers to reduce the time and hassle of finding parking spaces, while also improving the utilisation of kerbside parking `,
    mediaID: "7sBN_cT3w6k",
    status: "completed",
    link: variable.URL + '/project/3',
    github: "https://github.com/swinPatrick/Smart_Kerbside_Parking_Utilisation_App",
    deploy : "",
    technologies: [
      "Native Android (Kotlin)",
      "Spring Boot",
      "MongoDB",
      "Google Maps API",
    ]
  },
  {
    id: 4,
    title: "Miachan- Hotels Booking System",
    content: `Miachan is a hotel booking system that allows users to search for hotels, view hotel details, and make reservations. The system also provides a dashboard for hotel owners to manage their hotel's information and bookings. `,
    mediaID: "7sBN_cT3w6k",
    status: "completed",
    link: variable.URL + '/project/4',
    github: "https://github.com/daothanhduy305/miachan_go_strapi",
    deploy: "https://miachango.duydao.org/?fbclid=IwAR3t8Pzq3df6JSjfi6IdjXqNHVN054-ctcfyQ7eqcbxs3izsvLEOaw48_lM",
    technologies: [
      "Flutter",
      "Strapi",
      "MySQL",
    ]
  },
  {
    id: 5,
    title: "Troubadour",
    content: `Troubadour is a mobile application that aims to provide a platform for musicians to connect with their audience. It allows musicians to create and manage their events, and for users to discover and attend these events. `,
    mediaID: "7sBN_cT3w6k",
    status: "in-progress",
    link: variable.URL + '/project/5',
    github: "https://github.com/kiennguyen2403/Troubadour",
    deploy : "",
    technologies: [
      "React",
      "Android Native (Java)",
      "SwiftUI",
      "ExpressJS",
      "MongoDB",
      "Kong Gateway",
    ]
  },
  {
    id: 6,
    title: "Echo- Cross-platform Audio Processing Application",
    content: `Echo is a cross-platform audio processing application that allows users to record, edit, and share audio files. It also provides a platform for users to collaborate on audio projects. `,
    mediaID: "7sBN_cT3w6k",
    status: "in-progress",
    link: variable.URL + '/project/6',
    github: "https://github.com/thelazyant164/Echo",
    deploy : "",
    technologies: [
      "React Native",
      "React",
      "ExpressJS",
      "MongoDB",
      "AWS S3",
    ]
  }

];
