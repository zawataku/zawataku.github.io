import React from "react";

export default function Top() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/img/top/top_img_1.webp)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 hidden text-7xl font-bold text-slate-50 lg:block">Hello there👋</h1>
                    <h1 className="mb-10 text-5xl font-bold text-slate-50 lg:hidden">Hello there👋</h1>
                    <p className="mb-5 text-2xl text-slate-50">ざわたくの部屋にようこそ</p>
                </div>
            </div>
        </div>
    );
}