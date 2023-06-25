
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import { Button } from './Button';

export function Footer() {
  const [theWindow, setTheWindow] = useState(null)

  useEffect(() => {
    setTheWindow(window)
  }, [])

  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-12">
          <Logo className="mx-auto h-10 w-auto" />
          <p className='mt-10 font-display'>
            StackWizards Technology Ltd.
          </p>
          <p className='text-slate-600 text-sm'>
            71-75 Shelton Street,
            Covent Garden
            London
            United Kingdom
            WC2H 9JQ
          </p>
          <a className='text-teal-600 font-medium font-display' href='mailto:hello@stackwizards.com'>hello@stackwizards.com</a>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <SocialIcon bgColor='black' className='transition-all hover:scale-90' style={{ width: 30, height: 30 }} url={"https://twitter.com/thestackwizards"} />
            <SocialIcon bgColor='black' className='transition-all hover:scale-90' style={{ width: 30, height: 30 }} url={"https://www.linkedin.com/company/stackwizards"} />
            <SocialIcon bgColor='black' className='transition-all hover:scale-90' style={{ width: 30, height: 30 }} url={"https://www.instagram.com/stackwizards/"} />
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} StackWizards Technology Ltd. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
