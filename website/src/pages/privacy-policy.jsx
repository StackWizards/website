import {Footer} from "@/components/Footer";
import {AbstractWavyBackground} from "@/components/Svg/WavyBackground";



export default function PrivacyPolicy() {
    return (
        <>
            <main className='transition-all'>
                <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <svg
                            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y={-1}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M100 200V.5M.5 .5H200" fill="none"/>
                                </pattern>
                            </defs>
                            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                                <path
                                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                    strokeWidth={0}
                                />
                            </svg>
                            <rect width="100%" height="100%" strokeWidth={0}
                                  fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
                        </svg>
                    </div>
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div
                            className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy
                                        Policy</h1>

                                </div>
                            </div>
                        </div>
                        <div
                            className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1.
                                        Introduction
                                    </h2>
                                    <p className="mt-8">
                                        Welcome to StackWizards (&quot;we,&quot; our,&quot; or &quot;us&quot;). This Privacy Policy explains how
                                        we collect, use, disclose, and safeguard your personal information when you
                                        visit our website [www.stackwizards.com] (the &quot;Site&quot;) or use our services
                                        (collectively, the &quot;Services&quot;).
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. Information
                                        We Collect</h2>
                                    <p className="mt-8">
                                        We may collect personal information that you provide directly to us, such as
                                        your name, email address, and other contact details. Additionally, we may
                                        automatically collect certain information about your device and usage of the
                                        Services.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. How We Use
                                        Your Information</h2>
                                    <p className="mt-8">
                                        We use the information we collect for various purposes, including providing and
                                        improving the Services, communicating with you, and ensuring the security of our
                                        platform.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. Disclosure
                                        of Your Information</h2>
                                    <p className="mt-6">
                                        We may share your information with third parties, such as service providers,
                                        business partners, or as required by law. We do not sell your personal
                                        information to third parties.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                        5. Cookies and Tracking Technologies
                                    </h2>
                                    <p className="mt-6">
                                        We use cookies and similar tracking technologies to enhance your experience on
                                        our Site and for analytics purposes. You can control the use of cookies through
                                        your browser settings.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                        6. Your Choices
                                    </h2>
                                    <p className="mt-6">
                                        You have the right to access, update, or delete your personal information. You
                                        may also opt-out of certain communications. Please contact us at
                                        hello@stackwizards.com for assistance.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                        7. Security
                                    </h2>
                                    <p className="mt-6">
                                        We take reasonable measures to protect your information from unauthorized access
                                        or disclosure. However, no method of transmission over the internet or
                                        electronic storage is completely secure.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                        8. Changes to this Privacy Policy
                                    </h2>
                                    <p className="mt-6">
                                        We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                        9. Contact Us
                                    </h2>
                                    <p className="mt-6">
                                        If you have any questions or concerns about this Privacy Policy, please contact us at hello@stackwizards.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className='relative'>
                <Footer/>
            </div>
        </>
    )
}
