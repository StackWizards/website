import logo from '@/images/logos/stackwizards.svg'
import Image from 'next/image'

export function Logo(_props) {
  return (
    <Image width={60} src={logo} alt={"StackWizars Logo"} unoptimized />
  )
}
