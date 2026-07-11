import { skillList } from '@/appData'
import AwardsSection from '@/components/Awards/AwardsSection'
import CertificationsSection from '@/components/Certifications/CertificationsSection'
import EducationSection from '@/components/Education/EducationSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import TechStackSection from '@/components/TechStack/TechStackSection'
import { getAllProjects } from '@/services'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection projects={projects} />
        <ExperienceSection />
        <ServiceSection />
        <TechStackSection />
        <EducationSection />
        <CertificationsSection />
        <AwardsSection />
      </div>
    </main>
  )
}
