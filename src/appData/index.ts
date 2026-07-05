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
    title: 'AI Engineering',
    shortDescription:
      'Building AI-enabled applications using LLMs, document knowledge, streaming responses, and conversational interfaces.',
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

export const footerLinks = [
  { title: 'Projects', href: '#projects' },
  { title: 'Experience', href: '#experience' },
  { title: 'Technical Expertise', href: '#expertise' },
  { title: 'Technology Stack', href: '#tech-stack' },
  { title: 'Education & Certifications', href: '#education' },
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
