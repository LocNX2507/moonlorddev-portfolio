interface AwardCardProps {
  title: string
  organization: string
  year: number
}

const AwardCard: React.FC<AwardCardProps> = ({ title, organization, year }) => {
  return (
    <div className="bg-secondary border-border rounded-lg border p-5 transition-all duration-300 hover:border-accent">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-primary-content font-semibold">{title}</h3>
        <span className="text-accent text-sm font-medium">{year}</span>
      </div>
      <p className="text-tertiary-content text-sm">{organization}</p>
    </div>
  )
}

export default AwardCard
