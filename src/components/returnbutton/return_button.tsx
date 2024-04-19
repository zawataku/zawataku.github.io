import React from "react";

export default function ReturnTopButton() {
    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="p-5 mx-auto content-center text-center py-20">
            <button className="btn btn-wide bg-teal-300 hover:bg-teal-400 text-black font-bold" onClick={returnTop}>
                TOPに戻る
                <img src="/img/button/745_ar_f rotated.svg" alt="矢印" className="size-7" />
            </button>
        </div>
    )
}



