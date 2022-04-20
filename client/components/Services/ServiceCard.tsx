interface ServiceCardProps {
  color: string
  title: string
  icon: JSX.Element
  subtitle: string
}

const ServiceCard = ({ color, title, icon, subtitle }: ServiceCardProps) => (
  <div className="white-glassmorphism m-2 flex cursor-pointer flex-row items-center justify-start p-3 hover:shadow-xl">
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-1 flex-col">
      <p className="mt-2 text-lg text-white">{title}</p>
      <p className="mt-1 text-sm text-white md:w-9/12">{subtitle}</p>
    </div>
  </div>
)

export default ServiceCard
