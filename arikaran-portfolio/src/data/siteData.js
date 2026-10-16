export const siteData = {
  name: "Arikaran M.",
  role: "Java Full Stack Developer",
  email: "hafizz0758@gmail.com",
  linkedin: "https://www.linkedin.com/in/arikaran0758",
  github: "https://github.com/hafizz0758-tech",
  resume: "/resume/Arikaran_M_Resume.pdf",
  projects: [
    {
      id: "shopzone",
      number: "01",
      title: "ShopZone E-commerce",
      type: "Full-stack application",
      description: "A full-stack e-commerce project built around a React interface and Spring Boot backend, with product browsing and shopping-related flows.",
      stack: ["React", "Java", "Spring Boot", "MySQL"],
      demo: "https://shopzone-ecommerce-lilac.vercel.app/",
      repo: "https://github.com/hafizz0758-tech/shopzone-ecommerce.git",
      visual: "shop",
      featured: true
    },
    {
      id: "cabbooking",
      number: "02",
      title: "Cab Booking System",
      type: "Backend application",
      description: "A Java and Spring Boot backend project focused on users, ride requests, and core cab-booking operations.",
      stack: ["Java", "Spring Boot", "REST API", "MySQL"],
      demo: "",
      repo: "https://github.com/hafizz0758-tech/cabbooking.git",
      visual: "cab",
      featured: false
    },
    {
      id: "fooddelivery",
      number: "03",
      title: "Food Delivery Microservices",
      type: "Microservices learning project",
      description: "A Swiggy-inspired backend learning project exploring separated services and service discovery with Spring Boot and Eureka.",
      stack: ["Java", "Spring Boot", "Eureka", "MySQL"],
      demo: "",
      repo: "",
      visual: "food",
      featured: false
    }
  ],
  skills: [
    { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
    { group: "Backend", items: ["Java", "Spring Boot", "REST APIs"] },
    { group: "Database", items: ["MySQL"] },
    { group: "Tools", items: ["Git", "GitHub", "Eclipse", "VS Code", "Postman"] }
  ],
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/arikaran0758", key: "linkedin" },
    { label: "GitHub", url: "https://github.com/hafizz0758-tech", key: "github" },
    { label: "Instagram", url: "", key: "instagram" },
    { label: "YouTube", url: "", key: "youtube" },
    { label: "X / Twitter", url: "", key: "twitter" }
  ],
  codingProfiles: [
    { label: "GitHub", note: "Projects and source code", url: "https://github.com/hafizz0758-tech", icon: "github" },
    { label: "LeetCode", note: "Add your profile link", url: "", icon: "code" },
    { label: "HackerRank", note: "Add your profile link", url: "", icon: "terminal" },
    { label: "GeeksforGeeks", note: "Add your profile link", url: "", icon: "braces" }
  ],
  articles: []
};
