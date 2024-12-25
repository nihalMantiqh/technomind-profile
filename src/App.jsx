import "./App.css";
import "./assets/css/component.css";
import Header from "./components/layout/header";
import AppRoutes from "./utils/routes";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  const resumeData = {
    about: {
      name: "Nihal Shaikh",
      email: "shaikhnihal0020@gmail.com",
      phone: "+91 7483794112",
      description:
        "An experienced front-end developer with 2.5+ years of exprience specializing in React.js, Next.js, Mobile App development and cloud platforms, with a strong foundation in responsive design, SEO optimization, and API integration. Proficient in modern web technologies such as Tailwind CSS, TypeScript, and Redux. Proven track record of leading cross-platform projects and delivering user-friendly interfaces with a focus on performance and maintainability. Skilled in collaborating with teams, mentoring peers, and implementing innovative solutions to enhance user engagement and project outcomes",
      education: [
        {
          school: "PEOPLE'S TREE",
          degree: "BBA in HR",
          year: "2021",
          location: "Belgaum, Karnataka",
        },
        {
          school: "GOOD SHEPHERD PU",
          degree: "Science (CS)",
          year: "2018",
          location: "Belgaum, Karnataka",
        },
      ],
      experience: [
        {
          company: "MANTIQH TECHNOLOGIES",
          role: "Front-end Developer",
          duration: "July 2022 – September 2024",
          location: "Belgaum, Karnataka",
        },
        {
          company: "ULTIMEZ TECHNOLOGIES",
          role: "Front-end Developer",
          duration: "September 2024 – Present",
          location: "Hubli, Karnataka",
        },
      ],
    },
    skills: {
      languages: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "SCSS",
        "jQuery",
        "PHP",
      ],
      frameworks: [
        "React.js",
        "Next.js",
        "Gatsby.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
      cloud: ["Firebase", "cPanel", "Hostinger", "Vercel", "AWS"],
    },
    projects: [
      {
        title: "THE PARTIMER",
        tech: "React.js, AWS, Ant Design, SCSS, Typescript",
        highlights: [
          "Engineered robust API communication using React Query",
          "Implemented global state management",
          "Developed advanced features including infinite scrolling",
          "Established comprehensive test coverage using Jest",
        ],
      },
      {
        title: "KOR WEB APP",
        tech: "Next.js, Tailwind CSS, Material UI, Vercel",
        highlights: [
          "Crafted responsive and animated interfaces",
          "Optimized performance and SEO through server-side rendering",
          "Leveraged Next.js SWR and React Query hydration",
        ],
      },
      {
        title: "QPLEASE ADMIN PANEL",
        tech: "React.js, Redux, Ant Design, Typescript",
        highlights: [
          "Architected complex admin panel with React.js and Redux",
          "Integrated RESTful APIs using Axios",
          "Designed multi-tiered authentication system",
        ],
      },
    ],
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ resumeData }}>
        <Header />
        <AppRoutes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
