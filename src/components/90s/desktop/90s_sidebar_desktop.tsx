import React from "react";

export default function Sidebar_90s() {
    return (
        <div className="z-50 min-h-full w-1/4 min-w-52 max-w-96 border-r-[10px] border-[#a3a7aa] bg-teal-50">
            <div className="sticky top-0">
                <h1 className="pb-8 pt-12 text-center text-2xl font-bold">お品書き</h1>
                <div className="text-center text-blue-600 underline">
                    <p className="flex items-center justify-center py-2 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 20 20" className="my-auto mr-1">
                            <path fill="currentColor" d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 1.414 1.414L4 10.414V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293a1 1 0 0 0 1.414-1.414z" />
                        </svg>
                        トップ
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 20 20" className="my-auto ml-1">
                            <path fill="currentColor" d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 1.414 1.414L4 10.414V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293a1 1 0 0 0 1.414-1.414z" />
                        </svg>
                    </p>

                    <p className="flex items-center justify-center py-2 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 24 24" className="my-auto mr-1">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
                        </svg>
                        自己紹介
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 24 24" className="my-auto ml-1">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    )
}
