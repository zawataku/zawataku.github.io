"use client"
import React, { useState, useEffect } from "react";

export default function Header_90s() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex h-20 w-full bg-red-400 pt-10 md:hidden lg:hidden">
            <h1 className="m-auto text-xl text-white" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
                ざわたくのﾎﾑﾍﾟにようこそ！！
            </h1>
        </div>
    );
}
