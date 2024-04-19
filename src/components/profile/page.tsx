import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Profile() {
    return (
        <div className="max-w-xl mx-auto pt-32">
            <motion.div
                variants={{
                    offscreen: { // 画面外の場合のスタイル
                        y: 100,
                        opacity: 0,
                    },
                    onscreen: { // 画面内の場合のスタイル
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                        },
                    },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: true, amount: 0 }}
            >
                <h1 className="text-center text-5xl font-semibold mb-10">Profile</h1>
                <img className="size-32 rounded-full mx-auto shadow-xl" src="/img/profile/profile_picture.jpg" alt="Profile picture"></img>
                <h2 className="text-center text-3xl font-semibold mt-3">ざわたく</h2>
                <div className="flex justify-center mt-8">
                    <Link href={'https://twitter.com/zawataku_Tech'}>
                        <img src="/img/profile/X_logo.svg" alt="Xのロゴ" className="size-12 mr-6" />
                    </Link>
                    <Link href={'https://github.com/zawataku'}>
                        <img src="/img/profile/GitHub_logo.svg" alt="GitHubのロゴ" className="size-12 ml-6" />
                    </Link>
                </div>
                <div className="mt-5 border-t-2 border-slate-200 text-center mx-3">
                    <p className="text-gray-600 mt-5">石川県の大学生です</p>
                    <p className="text-gray-600 mt-1">中学生の頃プログラミングに興味を持ち，なんやかんやで今に至ります</p>
                    <p className="text-gray-600 mt-1">普段はTypeScriptとPython書いてます</p>
                    <p className="text-gray-600 mt-1">最近の趣味はドライブとフィルムカメラ</p>
                </div>
            </motion.div>
        </div>
    );
}