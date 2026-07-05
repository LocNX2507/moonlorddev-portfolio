import { Project } from '@/lib/types'

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const { title, type, overview, challenge, contributions, technologies } = data

  return (
    <div className="bg-secondary border-border flex flex-col justify-between gap-4 rounded-[14px] border p-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-secondary-content text-lg font-semibold md:text-xl">{title}</h3>
          <span className="bg-accent/10 text-accent rounded-md px-2 py-1 text-xs font-medium">
            {type}
          </span>
        </div>
        <p className="text-primary-content mt-3 text-sm md:text-base">{overview}</p>
      </div>

      <div className="bg-primary rounded-2xl p-4">
        <p className="text-tertiary-content mb-2 text-xs font-semibold tracking-wide uppercase">
          The Challenge
        </p>
        <p className="text-primary-content text-sm">{challenge}</p>
      </div>

      <div>
        <p className="text-tertiary-content mb-2 text-xs font-semibold tracking-wide uppercase">
          My Contributions
        </p>
        <ul className="text-primary-content space-y-1.5 text-sm">
          {contributions.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-accent mt-1 block size-1.5 shrink-0 rounded-full" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="border-border text-tertiary-content rounded-md border px-2 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
