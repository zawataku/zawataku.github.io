import React from "react";
import Link from "next/link";

type ProductProps = {
    name: string
    description: string
    language: string
    imgURL: string
    linkURL: string
}

export default function ProductCard({ name, description, language, imgURL, linkURL }: ProductProps) {
    return (
        <li>
            <ul className="mt-3 flex gap-x-3">
                <Link href={linkURL}>
                    <div className="m-2 space-y-2">
                        <div className="group flex flex-col gap-1 rounded-lg p-5 text-gray">
                            <div className="shadow-xl group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">

                                    <img src={imgURL} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                                </div>

                                <div className="text-center justify-center content-center bg-slate-500 p-3 rounded-xl opacity-90 absolute bottom-0 z-20 m-0 w-full h-full transition duration-300 ease-in-out group-hover:opacity-0">
                                    <h1 className="text-3xl font-bold text-slate-50">{name}</h1>
                                    <h2 className="text-xl font-light text-slate-50 mb-3">{description}</h2>
                                    <p className="border-t-2 border-slate-50"></p>
                                    <span className="inline-block rounded-full bg-slate-50 font-semibold text-slate-600 px-3 py-2 mt-3">{language}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </ul>
        </li>
    )
}