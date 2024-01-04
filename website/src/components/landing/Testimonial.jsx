import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
export default function Testimonial({ JobTitle, Name, Testimonial, PersonImage }) {
    return (
        <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <figure className="mx-auto max-w-2xl">
                <p className="sr-only">5 out of 5 stars</p>
                <div className="flex gap-x-1 text-teal-600">
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                </div>
                <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                    <p>
                        {Testimonial}
                    </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                    <Image
                        className="h-12 w-12 rounded-full bg-gray-50"
                        src={PersonImage || "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlY2lmaWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=3603&q=80"}
                        alt=""
                    />
                    <div className="text-sm leading-6">
                        <div className="font-semibold text-gray-900">{Name}</div>
                        <div className="mt-0.5 text-gray-600">{JobTitle}</div>
                    </div>
                </figcaption>
            </figure>
        </section>
    )
}
