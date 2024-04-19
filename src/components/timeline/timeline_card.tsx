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
            <div className="md:flex items-center md:space-x-4 mb-3">
                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <svg className="fill-teal-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                        </svg>
                    </div>
                    <time className="font-bold text-indigo-500 md:w-28">{date}</time>
                </div>
                <div className="ml-14 text-slate-900 font-bold">{title}</div>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">{body}<img src={imgURL} className="rounded-xl mt-3"></img></div>
        </div>
    )
}