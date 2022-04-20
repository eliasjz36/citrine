import Image from 'next/image'

const Footer = () => (
  <div className="gradient-bg-footer flex w-full flex-col items-center justify-between p-4 md:justify-center">
    <div className="my-4 flex w-full flex-col items-center justify-between sm:flex-row">
      <div className="flex flex-[0.5] items-center justify-center">
        <a href="#" className="flex">
          <Image
            src="/images/logo.svg"
            alt="citrine logo"
            width={128}
            height={39.46}
          />
        </a>
      </div>

      <div className="mt-5 flex w-full flex-1 flex-wrap items-center justify-evenly sm:mt-0">
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <p
            key={item + index}
            className="mx-2 cursor-pointer text-center text-base text-white"
          >
            {item}
          </p>
        ))}
      </div>
    </div>

    <div className="mt-5 flex flex-col items-center justify-center">
      <p className="text-center text-sm text-white">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="mt-2 text-center text-sm font-medium text-white">
        info@citrine.com
      </p>
    </div>

    <div className="mt-5 h-[0.25px] w-full bg-gray-400 sm:w-[90%] " />

    <div className="mt-3 flex w-full items-center justify-between sm:w-[90%]">
      <p className="text-left text-xs text-white">@citrine2022</p>
      <p className="text-right text-xs text-white">All rights reserved</p>
    </div>
  </div>
)

export default Footer
