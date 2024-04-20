import React from "react";

type TimelineTextProps = {
    date: string
    title: string
    body: string
    imgURL: string
}

export default function TimeCard({ date, title, body, imgURL}: TimelineTextProps) {
    return (
        <div className="relative">
            <div className="mb-3 items-center md:flex md:space-x-4">
                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                        <svg className="fill-teal-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                        </svg>
                    </div>
                    <time className="font-bold text-indigo-500 md:w-28">{date}</time>
                </div>
                <div className="ml-14 font-bold text-slate-900">{title}</div>
            </div>
            <div className="ml-14 rounded border border-slate-200 bg-white p-4 text-slate-500 shadow md:ml-44">{body}<img src={imgURL} className="mt-3 rounded-xl"></img></div>
        </div>
    )
}