import SectionHeading from '../SectionHeading/SectionHeading'

const responsibilities = [
  'Deliver frontend and backend features for enterprise platforms.',
  'Participate in architecture discussions and technical solution design.',
  'Debug production issues and improve operational stability.',
  'Maintain deployment pipelines and cloud infrastructure.',
  'Continuously improve engineering workflows and development efficiency.',
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-14">
      <SectionHeading title="Professional Experience" />

      <div className="bg-secondary border-border mt-8 rounded-[14px] border p-6 md:mt-[3.75rem] md:p-8">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <div>
            <h3 className="text-secondary-content text-lg font-semibold md:text-xl">
              Fullstack Developer
            </h3>
            <p className="text-accent text-sm font-medium">Viettel Solutions</p>
          </div>
          <span className="text-tertiary-content text-sm">2022 — Present</span>
        </div>

        <p className="text-primary-content mt-4 text-sm md:text-base">
          Contributed to AI platforms, enterprise applications, and cloud infrastructure while
          collaborating closely with Product Owners, Project Managers, and cross-functional
          engineering teams.
        </p>

        <ul className="text-primary-content mt-4 space-y-1.5 text-sm">
          {responsibilities.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-accent mt-1 block size-1.5 shrink-0 rounded-full" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ExperienceSection
