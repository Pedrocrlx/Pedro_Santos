export const projects = [
  {
    id: 1,
    title: "EarnIt",
    description: "A full-stack application taken from design to deployment as my second-year final project at ETIC Algarve. I led the team and shaped the architecture, then deployed it on my VPS using Docker Compose, Nginx and PostgreSQL. Self-hosting puts application delivery, persistent storage and runtime configuration under my control.",
    link: "https://earnit.pedrocrlx.pt/",
    linkLabel: "Visit EarnIt",
    status: "Live · Self-hosted VPS",
    tags: ["Docker Compose", "Nginx", "PostgreSQL", "VPS"]
  },
  {
    id: 2,
    title: "Grid",
    description: "A SaaS application built with Next.js, hosted on Vercel and backed by Supabase for PostgreSQL, authentication and storage. Developed during Frontend II at ETIC Algarve, it combines a React interface with managed services that handle key parts of the infrastructure.",
    link: "https://gridschedule.com",
    linkLabel: "Visit Grid",
    status: "Live · Managed services",
    tags: ["Next.js", "Vercel", "Supabase", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Cloud Infrastructure Automation v2",
    description: "An academic DevOps and platform engineering lab exploring infrastructure as code, container orchestration and delivery automation. It brings together Terraform, Kubernetes, Helm, Docker and CI/CD to practise repeatable provisioning and deployments in a training environment.",
    link: "https://github.com/Pedrocrlx/Cloud-Infrastructure-Automation-v2",
    linkLabel: "View repository",
    status: "Coursework · Infrastructure lab",
    tags: ["Terraform", "Kubernetes", "Helm", "Docker", "CI/CD"]
  }
];
