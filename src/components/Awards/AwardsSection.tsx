import SectionHeading from '../SectionHeading/SectionHeading'

const awards = [
  { title: 'Advanced Worker Award', org: 'Viettel', year: '2025' },
  { title: 'Employee of the Year', org: 'Blameo', year: '2022' },
  { title: 'Second Prize', org: 'Provincial Mathematics Olympiad', year: '' },
]

const AwardsSection = () => {
  return (
    <section id="awards" className="my-14">
      <SectionHeading title="Awards" />

      <div className="mt-8 grid grid-cols-1 gap-4 md:mt-[3.75rem] md:grid-cols-3">
        {awards.map((award) => (
          <div
            key={award.title}
            className="bg-secondary border-border rounded-[14px] border p-6 text-center">
            <p className="text-secondary-content text-sm font-medium md:text-base">
              {award.title}
            </p>
            <p className="text-tertiary-content mt-1 text-xs">
              {award.org}
              {award.year ? ` — ${award.year}` : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AwardsSection
