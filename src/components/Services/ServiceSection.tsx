import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  return (
    <section id="expertise" className="my-14">
      <SectionHeading
        title="Technical Expertise"
        subtitle="Areas of focus across AI engineering, backend systems, and cloud infrastructure."
      />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} title={service.title} shortDescription={service.shortDescription} />
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
