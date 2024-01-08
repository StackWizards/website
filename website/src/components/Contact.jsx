import {useState} from "react";
import Link from "next/link";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import { useRouter } from 'next/navigation'

export default function Contact() {
    const [signUpMailing, setSignupMailing] = useState(true)
    const [captureValue, setCaptureValue] = useState(null)
    const { executeRecaptcha } = useGoogleReCaptcha();
    const router = useRouter()


    const onSubmit = (e) => {
        // post off to /api/contact/submit
        executeRecaptcha('contact').then((token) => {
            setCaptureValue(token);
        });
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        data.mailingList = signUpMailing;
        data.captcha = captureValue;
        fetch('/api/contact/submit', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            // redirect to thank you page
            router.push("/contact/success");

        }).catch((error) => {
            console.error('Error:', error);
            // alert('Sorry, there was an error submitting your message. Please try again later.')
        });
    }

    return (
        <div id="contact" className="relative isolate px-6 py-24 sm:py-16 lg:px-8">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="50%"
                        y={-64}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
            <div className="mx-auto max-w-xl lg:max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">Let’s talk about your project</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    We help companies and individuals build out their brand guidelines.
                </p>
                <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <form action="/api/contact/submit" method="POST" className="lg:flex-auto" onSubmit={onSubmit}>
                        {/*<GoogleReCaptcha*/}
                        {/*    onVerify={token => {*/}
                        {/*        setCaptureValue(token);*/}
                        {/*    }}*/}
                        {/*/>*/}
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name *
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        autoComplete="given-name"
                                        required={true}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name *
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        autoComplete="family-name"
                                        required={true}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Budget
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="budget"
                                        name="budget"
                                        type="text"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="website"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    Website
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="website"
                                        id="website"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email *
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message *
                                </label>
                                <div className="mt-2.5">
                  <textarea
                      id="message"
                      name="message"
                      required={true}
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />

                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-start pt-4">
                            <div className="flex h-6 items-center">
                                <input
                                    checked={signUpMailing}
                                    onChange={() => setSignupMailing(!signUpMailing)}
                                    id="mailingList"
                                    aria-describedby="mailingListDescription"
                                    name="mailingList"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                                />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                                <label htmlFor="mailingList" className="font-medium text-gray-900">
                                    Sign up for our Mailing List
                                </label>
                                <p id="mailingListDescription" className="text-gray-500">
                                    Get hints, tips and tricks to help you grow your business using technology.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            >
                                Let’s talk
                            </button>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            By submitting this form, I agree to the{' '}
                            <Link href="/privacy-policy" className="font-semibold text-teal-600">
                                    privacy&nbsp;policy
                                </Link>
                                .
                            </p>
                    </form>
                </div>
            </div>
        </div>
)
}
