import React from "react";

type ProfileProps_90s = {
    title: string
    content: string
}

export default function ProfileProps_90s({ title, content }: ProfileProps_90s) {
    return (
        <div className="mx-auto mt-6 w-3/4">
            <div className="flex h-7 w-full bg-red-400 md:hidden lg:hidden">
                <p className="mx-2 text-white">{title}</p>
            </div>
            <div className="mt-2 w-full">
                <p className="mx-2">{content}</p>
            </div>
        </div>
    )
}