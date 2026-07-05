import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <p className="text-neutral">
            I'm interested in opportunities involving AI engineering, backend development,
            platform engineering, and cloud-native applications. If you're building AI products,
            enterprise software, or modern developer platforms, I'd be happy to connect.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:moordlorddev@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> moordlorddev@gmail.com
          </a>
          <a
            href="tel:0376971543"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> 0376971543
          </a>
          <p className="text-neutral font-light">Hanoi, Vietnam</p>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
