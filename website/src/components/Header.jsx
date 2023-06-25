import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import menu from '@/images/icons/menu.svg'
import Image from 'next/image'
import { WhatsAppButton } from './WhatsappButton'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <Image className='transition-all h-24 md:h-28 lg:h-32' src={menu} alt={"Menu"} unoptimized />
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-6 w-6 items-center justify-center"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/#you">Who Are You</MobileNavLink>
            <MobileNavLink href="/#what">What Can We Do</MobileNavLink>
            <MobileNavLink href="/#who">Who Are We</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}


export function Header() {
  return (
    <header className="py-5">
      <Container>
        <nav className="relative w-full z-50 flex justify-around lg:justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-5 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/#you">Who Are You</NavLink>
              <NavLink href="/#what">What Can We Do</NavLink>
              <NavLink href="/#who">Who Are We</NavLink>

              <NavLink href="/blog">Blog</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">

            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
            <WhatsAppButton phoneNumber={"07956000356"} message={`I want to talk about my project`} />
          </div>
        </nav>
      </Container>
    </header>
  )
}
