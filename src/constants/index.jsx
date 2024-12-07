import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const HERO = {
  name: "ARUN SINGH",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full-stack developer with over 4 years of experience crafting dynamic, functional web applications and stunning user interfaces. Driven by creativity and innovation, I specialize in transforming ideas into seamless, engaging digital experiences. Whether building from scratch or enhancing existing systems, I thrive on bringing concepts to life through clean code and intuitive design."
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1
    // githubLink: "https://github.com/user/personal-portfolio"
  },
  {
    id: 2,
    name: "Moonshot Titan",
    description:
      "Developed an in-house orchestrator to automate report generation and distribution using Apache Airflow for scheduling DAGs. The system triggers DAGs to generate reports from various data sources, significantly reducing manual effort and streamlining workflows. Once reports are generated, they are automatically emailed to clients based on predefined schedules, ensuring timely delivery.",
    image: projectImage2
  },
  {
    id: 3,
    name: "Moonshot Genie",
    description:
      "Developed a middleware service used by various teams to generate reports and access data efficiently. The service facilitates seamless data sharing and visualization through powerful backend integrations, leveraging AWS QuickSight, a caching service, and AWS presigned URLs.",
    image: projectImage3
  },
  {
    id: 4,
    name: "Central DB",
    description:
      "Developed a centralized database system that consolidates data from multiple sources across the organization. This system enhances data management and streamlines access to critical information.",
    image: projectImage4
  },
  {
    id: 5,
    name: "Wynsure",
    description:
      "Contributed to the development and enhancement of an insurance-based product targeted at the European market. The project involved acquiring proficiency in GOLD, a new programming language, to customize the product and optimize its performance. The frontend was developed using JavaScript and React.js, ensuring a dynamic and user-friendly interface.",
    image: projectImage5
  },
  {
    id: 6,
    name: "Customer Complaint Management System",
    description:
      "Developed an application for an electronic product distributor to manage and resolve customer complaints related to purchased products. The system streamlines the process of handling complaints and allocating customer representatives to efficiently address and resolve product issues.",
    image: projectImage6
  }
];

export const BIO = [
  "I’m currently a Development Engineer at XpressBees, where I’ve contributed to impactful projects like Moonshot Titan, an in-house orchestrator integrating frontend and backend components, and Moonshot Genie, which optimized performance by reducing query costs by over 80%. I also built a Central DB to streamline and aggregate data across multiple sources, enhancing organizational efficiency. These initiatives utilized technologies like Node.js, Express, MySQL, MongoDB, AWS, and React.js.",
  "In my role, I’ve leveraged technologies such as AWS (Lambda, S3, EC2, QuickSight), Keycloak, and RESTful APIs to build scalable and high-performing solutions. I’m proud to have been recognized as a Top Performer at XpressBees in 2023 for my contributions to innovative projects.",
  "Before XpressBees, I worked at Mphasis, delivering enhancements for an insurance-based product. I collaborated closely with clients to meet their requirements and successfully addressed production issues, all while continuously adapting to new technologies and complex challenges.",
  "I’m driven by a passion for learning new technologies and solving challenging problems. My curiosity and dedication to staying ahead in the ever-evolving tech landscape fuel my desire to make a meaningful impact through technology."
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React"
  },
  {
    icon: <FaAws className="text-4xl text-white lg:text-5xl" />,
    name: "AWS"
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB"
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js"
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js"
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL"
  }
];

export const EXPERIENCES = [
  {
    title: "Software Development Engineer",
    company: "Xpressbees Logistics",
    duration: "July 2022 - Present",
    description:
      "As a Development Engineer at XpressBees, I’ve been fortunate to work on innovative projects that drive efficiency and scalability across the organization. My contributions span backend, frontend, and middleware development, utilizing modern technologies to deliver impactful solutions."
  },
  {
    title: "Associate Software Engineer",
    company: "Mphasis Ltd",
    duration: "February 2021 - July 2022",
    description:
      "At Mphasis, I contributed to delivering customized solutions for an insurance-based product catering to the European market, while quickly adapting to new technologies and collaborating with clients to meet their business needs."
  },
  {
    title: "Intern Software Devleoper",
    company: "Eagle Foundation",
    duration: "Oct 2019 - Dec 2019",
    description:
      "Worked as Software developer made android application integrated with firebase for wholesale dealer of electric appliances."
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Global Nature Care Sangathan Group of Institute (RGPV)",
    duration: "August 2016 -  2020",
    description:
      "Passionate about web development and database management, I’ve built several web applications using HTML, CSS, JavaScript, Python and Java. My senior project, an Online Quiz Android App, secured 2nd place at the university. Actively involved in coding clubs and hackathons, I graduated with a high GPA, continuously expanding my skills in software development."
  },
  {
    degree: "Full Stack Developer & DSA",
    institution: "Scaler",
    duration: "July 2021 - Dec 2022",
    description:
      "A program for engineers to master Problem Solving & System Design."
  }
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/ArunSinghSaab",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />
  },
  {
    href: "https://github.com/arunsaab",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />
  },
  {
    href: "https://www.linkedin.com/in/arun-singh-saab/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />
  },
  {
    href: "https://www.instagram.com/arunsinghsaab/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />
  }
];
