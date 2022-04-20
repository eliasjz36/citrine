import { useState } from 'react'
import Image from 'next/image'

import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import NavBarItem from './NavBarItem'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="flex w-full items-center justify-between p-4 md:justify-center">
      <div className="flex-initial items-center justify-center md:flex-[0.5]">
        <a href="#" className="flex max-w-fit">
          <Image
            src="/images/logo.svg"
            alt="citrine logo"
            width={128}
            height={39.46}
          />
        </a>
      </div>
      <ul className="hidden flex-initial list-none flex-row items-center justify-between text-white md:flex">
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="mx-4 cursor-pointer rounded-full bg-lightYellow py-2 px-7 text-black hover:bg-mediumYellow">
          Login
        </li>
      </ul>
      <div className="relative flex">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="cursor-pointer text-white md:hidden"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="cursor-pointer text-white md:hidden"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="blue-glassmorphism fixed -top-0 -right-2 z-10 flex h-screen w-[70vw] animate-slide-in list-none
            flex-col items-end justify-start rounded-md p-3 text-white shadow-2xl md:hidden"
          >
            <li className="my-2 w-full text-xl">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
