import { awards } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import AwardCard from './AwardCard'

const AwardsSection = () => {
  return (
    <section id="awards" className="my-14">
      <SectionHeading title="Recognition & Awards" subtitle="Industry recognition for technical excellence and contributions." />

      <div className="mt-8 grid grid-cols-1 gap-4 md:mt-[3.75rem] md:grid-cols-3">
        {awards.map((award) => (
          <AwardCard key={award.title} title={award.title} organization={award.organization} year={award.year} />
        ))}
      </div>
    </section>
  )
}

export default AwardsSection
