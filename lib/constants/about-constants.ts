import { AboutMeType, Category, File, Folder } from "@/types/about-types";

const experience: File = {
  name: "experience",
  icon: "text-file",
  content: `Senior Developer at Uncommon.org (2020 - Present)

  Quinton joined Uncommon.org in 2023 as a Software 
  Development Intern, where he contributed to 
  real-world web applications and quickly built
  a strong foundation in modern web development. 
  In 2024, he transitioned into a full-time role
  and currently serves as a Senior Software 
  Developer. In this role, he is responsible for
  the full development lifecycle of web 
  products — including system architecture design,
  application development, testing, and deployment.
  He collaborates closely with cross-functional 
  teams to build scalable, maintainable solutions 
  and continuously improve performance, reliability,
  and user experience.`,
};

const education: File = {
  name: "education",
  icon: "certificate-file",
  content: `- B.Sc. in Computer Science, University of Zimbabwe (2021 - 2025)
- High School Certificate, City High School (2015 - 2020)`,
};

const personalBio: File = {
  name: "personal",
  icon: "text-file",
  content: `
 About me:
 Quinton Tinotenda Maisiri grew up in Marondera, 
 where he learned early the value of discipline, 
 fairness, and staying true to oneself. 
 Introverted by nature, he finds comfort in calm spaces
 whether he's grinding a gym session, watching anime, 
 or climbing ranks in League of Legends with close friends. 
 He’s not one for the club scene; 
 his world is built on meaningful conversations, chill nights, 
 and genuine connection.

Quinton has a simple philosophy: 
don’t judge, don’t pretend, and don’t expect from others what 
you’re not willing to give. 
He holds a deep dislike for hypocrisy and prefers people who 
show up as they are. 
Grounded, honest, and self-contained, 
he moves through life focusing on growth, discipline, 
and authenticity.
 `,
};

const professionalBio: File = {
  name: "professional",
  icon: "text-file",
  content: `
  Quinton Tinotenda Maisiri is a full-stack developer 
  with over two years of hands-on experience 
  building fast, scalable, and user-focused web applications.
  He specializes in React, Next.js, TypeScript, 
  Tailwind, Node, and Sanity—delivering clean, 
  efficient solutions across the entire stack.
  
  Quinton has worked on projects such as wardrobe-worth.com
  and an automated nurse trainee applicants system,
  handling everything from frontend interfaces to 
  backend logic and data workflows. 
  He enjoys turning ideas into polished, 
  reliable products and thrives in environments where
  he can solve real problems through modern engineering.

  He is open to all opportunities—freelance, full-time,
  collaborative, or project-based—and is continually
  expanding his skillset to build better, smarter
  digital experiences.`,
};

const bio: Folder = {
  name: "Bio",
  color: "text-green-500",
  files: [personalBio, professionalBio],
};

const gamingInterests: File = {
  name: "gaming",
  icon: "text-file",
  content: `
  Outside of work, he engages in competitive gaming through
  League of Legends and VALORANT, with a particular interest
  in roles and agents that emphasize systems thinking and 
  execution. 
  
  In League of Legends, he plays Top lane and 
  Jungle, roles that require macro-level decision-making,
  resource optimization, and real-time adaptation based
  on evolving game states. 
  
  In VALORANT, he favors Yoru, an agent that rewards 
  precise timing, state manipulation, and creative 
  problem-solving. He views competitive gaming as a parallel
  to software development, reinforcing skills such as 
  strategic planning, iterative optimization, risk assessment,
  and performance under pressure.
  `,
};

const musicInterests: File = {
  name: "music",
  icon: "text-file",
  content: `
  Music plays an important role in Quinton's creative 
  and technical workflow, with listening habits 
  spanning Trap, Soft Pop, Dark Pop, EDM, and Afrobeats.
  He gravitates toward genres that balance rhythm, 
  atmosphere, and emotional contrast — from the 
  high-energy intensity of Trap and EDM to the melodic
  structure of Soft and Dark Pop. Afrobeats adds a 
  strong sense of groove and cultural rhythm, often 
  serving as background fuel for focused development 
  sessions. He views music as a productivity tool and 
  creative catalyst, helping maintain flow, 
  concentration, and momentum during problem-solving 
  and long engineering tasks.
  `,
};

const interests: Folder = {
  name: "Interests",
  color: "text-purple-500",
  files: [gamingInterests, musicInterests],
};

const personalInfo: Category = {
  name: "personal-info",
  iconSelected: "/images/bulb-filled.png",
  iconUnselected: "/images/bulb.png",
  details: [bio, interests],
};

const professionalInfo: Category = {
  name: "professional-info",
  iconSelected: "/images/terminal-filled.png",
  iconUnselected: "/images/terminal.png",
  details: [experience, education],
};

export const aboutMeData: AboutMeType = {
  categories: [professionalInfo, personalInfo],
};
