import React from "react";
import Scroll_90s from "@/styles/scroll_90s.module.css";

export default function Scroll_Text_90s() {
    return (
        <div className="relative flex h-14 w-full items-center overflow-hidden bg-white">
                <p className={`${Scroll_90s.welcome} text-3xl font-bold`}>こんにちは！！　ざわたくの部屋にようこそ！！</p>
         
        </div>
    );
}