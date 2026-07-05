interface ServiceCardTypes {
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription }) => {
  return (
    <div className="bg-secondary border-border flex flex-col rounded-[14px] border p-5">
      <span className="bg-accent mb-4 block h-1 w-8 rounded-full" />
      <h5 className="text-accent mb-3 text-base font-semibold">{title}</h5>
      <p className="text-primary-content text-sm font-normal">{shortDescription}</p>
    </div>
  )
}

export default ServiceCard
