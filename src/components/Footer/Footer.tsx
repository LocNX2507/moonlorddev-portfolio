import { footerLinks } from '@/appData'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex flex-col justify-between gap-16 overflow-hidden px-4 py-14 md:p-14">
      <div className="relative z-20 grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <h5 className="mb-8 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">Moonlorddev</span>
          </h5>
          <p className="text-tertiary-content max-w-md">
            Fullstack Developer building reliable software for AI platforms, cloud
            infrastructure, and real-time systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline">
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex flex-col gap-10 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h5 className="text-neutral mb-3 text-base font-medium">Contact</h5>
          <a
            href="mailto:moordlorddev@gmail.com"
            className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300">
            moordlorddev@gmail.com
          </a>
          <p className="text-tertiary-content text-sm font-light">Hanoi, Vietnam</p>
        </div>

        <p className="text-tertiary-content text-xs">© {new Date().getFullYear()} Moonlorddev. All rights reserved.</p>
      </div>

      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
