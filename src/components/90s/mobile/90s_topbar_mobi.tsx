"use client"
import React, { useEffect, useState } from "react";

export default function Topbar_90s() {
    const [time, setTime] = useState("");

    function setZero(num) {
        return num < 10 ? "0" + num : num;
    }

    function updateClock() {
        const currentTime = new Date();
        const hour = setZero(currentTime.getHours());
        const min = setZero(currentTime.getMinutes());
        setTime(hour + ":" + min);
    }

    useEffect(() => {
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="fixed flex h-10 w-full bg-black md:hidden lg:hidden">
            <img src="/img/90s/battery.svg" alt="バッテリーの画像" className=" ml-2 size-10 p-1" />
            <img src="/img/90s/antenna.svg" alt="アンテナの画像" className=" size-10 p-1" />
            <div className="my-auto ml-auto mr-2 text-2xl text-white">{time}</div>
        </div>
    );
}
