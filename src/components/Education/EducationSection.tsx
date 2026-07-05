import SectionHeading from '../SectionHeading/SectionHeading'

const education = [
  {
    school: 'Posts and Telecommunications Institute of Technology (PTIT)',
    program: 'Information Technology',
    period: '2025 — Present',
  },
  {
    school: 'FPT Aptech',
    program: 'Software Engineering',
    period: '2019 — 2022',
    note: 'GPA: 73% (Good)',
  },
]

const certifications = [
  'IBM Full Stack Software Developer (Coursera)',
  'Oracle Cloud Infrastructure 2025 Foundations Associate',
  'TOEIC B2 (Intermediate English)',
]

const EducationSection = () => {
  return (
    <section id="education" className="my-14">
      <SectionHeading title="Education & Certifications" />

      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-[3.75rem] md:grid-cols-2">
        <div className="bg-secondary border-border rounded-[14px] border p-6">
          <h5 className="text-accent mb-4 text-base font-semibold">Education</h5>
          <div className="space-y-5">
            {education.map((item) => (
              <div key={item.school}>
                <p className="text-secondary-content text-sm font-medium md:text-base">
                  {item.school}
                </p>
                <p className="text-primary-content text-sm">{item.program}</p>
                <p className="text-tertiary-content text-xs">
                  {item.period}
                  {item.note ? ` · ${item.note}` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary border-border rounded-[14px] border p-6">
          <h5 className="text-accent mb-4 text-base font-semibold">Certifications</h5>
          <ul className="text-primary-content space-y-2 text-sm">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2">
                <span className="text-accent mt-1 block size-1.5 shrink-0 rounded-full" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
