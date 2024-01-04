import Link from "next/link";
import swLogo from "@/images/logos/stackwizards.svg";
import Image from "next/image";
export default function Error () {
    return (
        <>
            <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] lg:grid-cols-[max(50%,36rem),1fr]">
                <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
                    <Link href="/">
                        <span className="sr-only">Your Company</span>
                        <Image
                            className="h-10 w-auto sm:h-12"
                            src={swLogo}
                            alt=""
                        />
                    </Link>
                </header>
                <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
                    <div className="max-w-lg">
                        <p className="text-base font-semibold leading-8 text-teal-600">404</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Sorry, we couldn’t find the page you’re looking for.
                        </p>
                        <div className="mt-10">
                            <Link href="/" className="text-sm font-semibold leading-7 text-teal-600">
                                <span aria-hidden="true">&larr;</span> Back to home
                            </Link>
                        </div>
                    </div>
                </main>
                <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
                    <Image
                        fill={true}
                        src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}
