
import { Experience, Project, SkillCategory, Education, ContactInfo, Achievement } from './types';

export const CONTACT: ContactInfo = {
  phone: "+94 77 355 6800",
  email: "vanakeethan@outlook.com",
  location: "Colombo, Sri Lanka",
  linkedin: "linkedin.com/in/vanakeethan",
  website: "vanakeethan.netlify.app",
  instagram: "https://www.instagram.com/vanakeethan__/",
  medium: "https://medium.com/@shamdeepvk"
};

export const SUMMARY = "Performance-driven DevOps Engineer with expertise in architecting high-availability infrastructure and automating complex deployment lifecycles. Specialized in cloud-native ecosystems (AWS/Azure), container orchestration (Kubernetes), and CI/CD optimization, with a strong focus on system reliability, security, and operational efficiency.";

export const CV_URL = "https://drive.google.com/file/d/13E_UtI3ce6Li-MTY3u29Tz8mQGyGQEpQ/view?usp=sharing";


export const EXPERIENCES: Experience[] = [
  {
    company: "Aventage Labs (Pvt) Ltd",
    role: "DevOps Engineer",
    period: "September 2024 – Present",
    location: "Colombo, Sri Lanka",
    responsibilities: [
      "Engineered high-performance CI/CD pipelines using Jenkins and AWS, reducing deployment cycles through automated Docker containerization and Compose orchestration.",
      "Architected and managed production-grade Kubernetes (EKS) clusters with Bitbucket-integrated GitOps workflows for seamless service rollouts.",
      "Implemented enterprise-level monitoring and observability stacks using Prometheus and Grafana, resulting in a 30% improvement in incident detection and system transparency.",
      "Hardened infrastructure security by implementing automated SSL/TLS certificate management and identity-access policies for cloud services."
    ]
  },
  {
    company: "Huex (Pvt) Ltd",
    role: "DevOps Engineer Intern",
    period: "July 2023 – December 2023",
    location: "Colombo, Sri Lanka",
    responsibilities: [
      "Facilitated the migration of monolithic services to microservices using Docker and Kubernetes, enhancing application scalability and fault tolerance.",
      "Optimized source code management workflows across GitHub and GitLab, streamlining collaborative development for multiple Agile scrum teams.",
      "Reduced CI build failures by 40% through rigorous troubleshooting and script optimization in Jenkins-based environments.",
      "Leveraged AWS services for cost-effective cloud resource allocation and automated infrastructure provisioning."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C", "HTML/CSS", "JavaScript", "Bash"]
  },
  {
    category: "DevOps Tools",
    skills: ["Docker", "Jenkins", "Kubernetes", "Ansible", "Terraform", "Prometheus", "Grafana", "Git"]
  },
  {
    category: "Technologies/Frameworks",
    skills: ["Spring Boot", "React.js", "Tailwind", "Bootstrap", "Material-UI"]
  },
  {
    category: "Cloud Platform",
    skills: ["AWS", "Azure", "Google Cloud"]
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Operating System",
    skills: ["Windows", "MacOS", "Linux"]
  },
  {
    category: "Developer Tools",
    skills: ["GitHub", "VS Code", "PyCharm", "Kaggle", "Google Colab", "IntelliJ IDEA", "Postman"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Driven Financial Market Analysis",
    year: "2023",
    category: "Research & Development",
    description: "Developed a predictive analysis engine using Bi-LSTM models and NLP to evaluate the correlation between social media sentiment and cryptocurrency volatility during geopolitical conflicts.",
    technologies: ["Python", "Bi-LSTM", "TensorFlow", "NLP", "Data Engineering"]
  },
  {
    title: "Enterprise Reimbursement Platform",
    year: "2022",
    category: "Full Stack Systems",
    description: "Designed a secure financial reimbursement system with a Spring Boot backend and React frontend, focusing on transactional integrity and role-based access control (RBAC).",
    technologies: ["Spring Boot", "React.js", "MySQL", "Docker", "REST API"]
  },
  {
    title: "Industrial Boiler Monitoring System",
    year: "2021",
    category: "Embedded Systems",
    description: "Engineered an automated hardware-software solution for real-time industrial boiler condition monitoring, extending equipment lifespan through precise sensor-driven environmental control.",
    technologies: ["C", "ATmega32", "Firmware Engineering", "Hardware Integration"]
  },
  {
    title: "Scalable Microservices Media Hub",
    year: "2022",
    category: "Architecture Project",
    description: "Implemented a decoupled media review architecture utilizing MongoDB and Spring Boot, designed for horizontal scaling and high-concurrency user interactions.",
    technologies: ["MongoDB", "Spring Boot", "React", "Microservices"]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "University of Moratuwa",
    degree: "B.Sc. (Hons) in Information Technology",
    period: "Nov 2018 – July 2023",
    details: ["Focused on Software Engineering and Enterprise Architectures", "Cumulative GPA: 3.04"]
  },
  {
    institution: "Jaffna Hindu College",
    degree: "Advanced Level (Physical Science)",
    period: "2017",
    details: ["Achieved 2 A's and 1 B in core science subjects", "Distinction in Mathematics and Chemistry"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    link: "https://www.credly.com/badges/fc4a93d7-e75c-457c-b012-40a51845d950/public_url"
  },
  {
    name: "AWS Cloud Practitioner (Certified)",
    //link: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/"
  },
  {
    name: "Cisco: Introduction to Cybersecurity & Networking",
    link: "https://www.credly.com/badges/8e0cc245-24d2-4140-b694-f24c239de1d8/public_url"
  }
];
