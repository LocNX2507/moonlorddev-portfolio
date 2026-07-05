import SectionHeading from '../SectionHeading/SectionHeading'

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="my-14">
      <SectionHeading title="Engineering Philosophy" />

      <div className="bg-secondary border-border text-primary-content mt-8 space-y-4 rounded-[14px] border p-6 text-sm md:mt-[3.75rem] md:p-8 md:text-base">
        <p>
          I enjoy building software that remains understandable, maintainable, and reliable long
          after its first release.
        </p>
        <p>
          Rather than pursuing unnecessary complexity, I prefer practical engineering decisions
          that help teams move faster while keeping systems easy to maintain.
        </p>
        <p>
          Artificial intelligence is an important part of my daily workflow for prototyping,
          debugging, and implementation. However, engineering judgement should always come before
          generated code — every AI-assisted solution should be reviewed, validated, and tested
          before reaching production.
        </p>
        <p>
          Beyond writing code, I'm interested in improving developer experience, deployment
          workflows, and production observability, because good software is measured not only by
          the features it delivers, but also by how easy it is to operate and evolve.
        </p>
      </div>
    </section>
  )
}

export default PhilosophySection
