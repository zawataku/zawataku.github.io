import React from "react";

export default function ReturnTopButton() {
    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="mx-auto content-center p-5 pb-20 pt-40 text-center">
            <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-teal-500 px-6 py-3 text-base font-medium text-slate-50 shadow-lg transition-transform duration-200 ease-in-out hover:scale-110"
                onClick={returnTop}>
                ↑　トップに戻る　↑
            </button>
        </div>
    )
}