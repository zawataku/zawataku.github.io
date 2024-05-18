import React from "react";

type ProductProps = {
    name: string
    description: string
    imgURL: string
    linkURL: string
}

export default function ProductCard({ name, description, imgURL, linkURL }: ProductProps) {
    return (

        <a className="group" href={linkURL}>
            <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
                <img className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" src={imgURL} alt="Image Description" />
            </div>

            <div className="mt-7">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-500">{name}</h3>
                <p className="mt-3 text-slate-900">{description}</p>
                <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 group-hover:underline">Read more
                    <svg className="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </p>
            </div>
        </a>
    )
}