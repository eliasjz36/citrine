import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

import ServiceCard from './ServiceCard'

const Services = () => (
  <div className="gradient-bg-services flex w-full items-center justify-center">
    <div className="flex flex-col items-center justify-between py-12 px-4 md:p-20 mf:flex-row">
      <div className="flex flex-1 flex-col items-start justify-start">
        <h1 className="py-2 text-3xl font-medium text-white sm:text-5xl">
          <span className="text-lightYellow">Services</span> that we
          <br />
          continue to improve
        </h1>
        <p className="my-2 w-11/12 text-left text-base font-light text-white md:w-9/12">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-start">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security guarantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
)

export default Services
