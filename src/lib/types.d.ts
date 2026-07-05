export interface Project {
  priority: number
  title: string
  type: string
  overview: string
  challenge: string
  contributions: string[]
  technologies: string[]
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}
