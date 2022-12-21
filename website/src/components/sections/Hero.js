import { Popover } from '@headlessui/react'


export default function Hero() {
  return (
    <>
      <div className="">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
            <div className="relative h-full">
            </div>
          </div>

          <div className="relative pt-6">
            <Popover>
              <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                  <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                    <div className="flex w-full items-center justify-between md:w-auto">

                    </div>
                  </div>

                </nav>
              </div>

            </Popover>

            <div className="mx-auto mt-16 flex flex-col w-full px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl inline-block font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="text-white">Our mission?</span>

                  <div className='flex flex-col md:flex-row'>
                    <span className="ml-2 text-primaryText">deliver great ideas.</span>
                    <div className='flex'><img
                      className="h-32 w-32 md:-mt-10"
                      src="/images/wand.svg"
                      alt=""
                    />
                      <div
                        className="h-12 w-12 bg-white mt-5 ml-4 md:-mt-5 md:ml-4 rounded-full opacity-50 absolute animate-ping"
                        alt=""
                      />
                    </div>
                  </div>
                </h1>

              </div>

            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="w-full flex-1 bg-gray-800" />
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              {/* <img
                            className="relative rounded-lg shadow-lg"
                            src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                            alt="App screenshot"
                        /> */}
            </div>
          </div>
        </div>

      </div >
      <div class="w-full h-48 hidden sm:block" alt="" style={{
        background: "url(/images/vector.svg) center bottom",
        position: "absolute",

        zIndex: 9999999,
        border: 0,
        width: "100%",
        backgroundSize: "150%"
      }}></div>

    </>
  )
}
