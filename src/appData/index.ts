// Data for portfolio
import {
  ArgoCDIcon,
  GitlabIcon,
  JavaScriptIcon,
  KubernetesIcon,
  NestjsIcon,
  NodejsIcon,
  NuxtIcon,
  RancherIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
  VueIcon,
} from '../utils/icons'

// Technical Expertise Data
export const serviceData = [
  {
    title: 'LLM Integration & Platform Engineering',
    shortDescription:
      'Integrating large language models into production platforms with streaming responses, document knowledge retrieval, and real-time conversational interfaces.',
  },
  {
    title: 'Backend Engineering',
    shortDescription:
      'Designing scalable backend services, RESTful APIs, API Gateway architectures, and authentication systems.',
  },
  {
    title: 'Frontend Engineering',
    shortDescription:
      'Building enterprise dashboards, internal platforms, and real-time user interfaces with Vue.js and React.',
  },
  {
    title: 'Cloud & Infrastructure',
    shortDescription:
      'Deploying containerized services with Docker and Kubernetes while maintaining production environments through CI/CD and observability.',
  },
  {
    title: 'Real-time Systems',
    shortDescription:
      'Implementing Server-Sent Events, Socket.IO, and Redis-based communication for responsive user experiences.',
  },
]

// Skill marquee (curated highlight)
export const skillList = [
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'Vue.js', icon: VueIcon },
  { name: 'Nuxt.js', icon: NuxtIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Node.js', icon: NodejsIcon },
  { name: 'Nest.js', icon: NestjsIcon },
  { name: 'Socket.io', icon: SocketIcon },
  { name: 'Tailwind CSS', icon: TailwindCSS },
  { name: 'Kubernetes', icon: KubernetesIcon },
  { name: 'Rancher', icon: RancherIcon },
  { name: 'Argo CD', icon: ArgoCDIcon },
  { name: 'GitLab', icon: GitlabIcon },
]

export const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '10/2025 – 10/2027',
    credentialUrl: '#',
  },
  {
    title: 'IBM Full Stack Software Developer',
    issuer: 'Coursera',
    date: '03/2024 – 06/2024',
    credentialUrl: '#',
  },
  {
    title: 'TOEIC B2 — English: Intermediate',
    issuer: 'ETS Global',
    date: '09/2023 – 03/2026',
    credentialUrl: '#',
  },
]

export const awards = [
  {
    title: 'Advanced Worker Award',
    organization: 'Viettel',
    year: 2025,
  },
  {
    title: 'Employee of the Year',
    organization: 'Blameo',
    year: 2022,
  },
  {
    title: '2nd Prize, Provincial Math Olympiad',
    organization: 'Vietnam',
    year: 2010,
  },
]

export const footerLinks = [
  { title: 'Projects', href: '#projects' },
  { title: 'Experience', href: '#experience' },
  { title: 'Technical Expertise', href: '#expertise' },
  { title: 'Technology Stack', href: '#tech-stack' },
  { title: 'Education', href: '#education' },
  { title: 'Certifications', href: '#certifications' },
  { title: 'Awards', href: '#awards' },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
]
