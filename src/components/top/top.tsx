import React from "react";

export default function Top() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/img/top/top_img_1.webp)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <img className="animate-puff-in-center lg:scale-125" src="/img/top/hello.webp" alt="Hello There" />
                </div>
            </div>
        </div>
    );
}