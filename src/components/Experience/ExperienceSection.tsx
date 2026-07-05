import SectionHeading from '../SectionHeading/SectionHeading'

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'Viettel Group',
    period: '2023 — Present',
    description:
      'Contributed to AI platforms, enterprise applications, and cloud infrastructure while collaborating closely with Product Owners, Project Managers, and cross-functional engineering teams.',
    responsibilities: [
      'Deliver frontend and backend features for enterprise platforms.',
      'Participate in architecture discussions and technical solution design.',
      'Debug production issues and improve operational stability.',
      'Maintain deployment pipelines and cloud infrastructure.',
      'Continuously improve engineering workflows and development efficiency.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Blameo Technology',
    period: '2022 — 2023',
    description:
      'Developed responsive web applications, optimized frontend performance, and streamlined deployment pipelines.',
    responsibilities: [
      'Built and maintained modular web applications using Vue.js and Nuxt.js integrated with Ant Design and TailwindCSS.',
      'Ensured cross-browser compatibility and implemented pixel-perfect, responsive layouts.',
      'Configured GitLab CI/CD pipelines and Docker-based environments for frontend deployment.',
    ],
  },
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-14">
      <SectionHeading title="Professional Experience" />

      <div className="mt-8 space-y-8 md:mt-[3.75rem]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-secondary border-border rounded-[14px] border p-6 md:p-8">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-secondary-content text-lg font-semibold md:text-xl">
                  {exp.role}
                </h3>
                <p className="text-accent text-sm font-medium">{exp.company}</p>
              </div>
              <span className="text-tertiary-content text-sm">{exp.period}</span>
            </div>

            <p className="text-primary-content mt-4 text-sm md:text-base">
              {exp.description}
            </p>

            <ul className="text-primary-content mt-4 space-y-1.5 text-sm">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-accent mt-1 block size-1.5 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
