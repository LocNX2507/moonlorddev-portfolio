import SectionHeading from '../SectionHeading/SectionHeading'

const stack = [
  { category: 'Languages', items: 'JavaScript · TypeScript · PHP' },
  { category: 'Frontend', items: 'Vue.js · Nuxt.js · React · Next.js · Tailwind CSS · Quasar · Ant Design' },
  { category: 'Backend', items: 'Node.js · NestJS · Laravel · REST APIs · Microservices · JWT · RBAC' },
  { category: 'Infrastructure', items: 'Docker · Kubernetes · GitLab CI/CD · ArgoCD · Linux · Nginx' },
  { category: 'Database', items: 'MongoDB · PostgreSQL · MySQL · Redis' },
  { category: 'Monitoring', items: 'Prometheus · Grafana' },
]

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="my-14">
      <SectionHeading title="Technology Stack" />

      <div className="mt-8 grid grid-cols-1 gap-4 md:mt-[3.75rem] md:grid-cols-2">
        {stack.map((row) => (
          <div key={row.category} className="bg-secondary border-border rounded-[14px] border p-5">
            <p className="text-accent mb-1.5 text-sm font-semibold">{row.category}</p>
            <p className="text-primary-content text-sm">{row.items}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStackSection
