import { certifications } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const CertificationsSection = () => {
  return (
    <section id="certifications">
      <SectionHeading title="Certifications & Credentials" subtitle="Industry-recognized certifications validating technical expertise." />

      <div className="my-8 space-y-4 md:my-12">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-secondary border-border rounded-lg border p-5 transition-all duration-300 hover:border-accent">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-primary-content mb-1 font-semibold">{cert.title}</h3>
                <p className="text-tertiary-content text-sm">{cert.issuer}</p>
              </div>
              <span className="text-accent whitespace-nowrap text-sm font-medium">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CertificationsSection
