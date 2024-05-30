import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Profile() {
    return (
        <div className="mx-auto max-w-xl py-24">
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
                <h1 className="mb-10 text-center text-5xl font-semibold text-slate-900">Profile</h1>
                <img className="mx-auto size-32 rounded-full shadow-xl" src="/img/profile/profile_picture.webp" alt="Profile picture"></img>
                <h2 className="mt-3 text-center text-3xl font-semibold text-slate-900">ざわたく</h2>
                <div className="mt-8 flex justify-center">
                    <Link href={'https://twitter.com/zawataku_Tech'}>
                        <img src="/img/profile/X_logo.svg" alt="Xのロゴ" className="mr-6 size-12 transition-transform duration-200 ease-in-out hover:scale-150" />
                    </Link>
                    <Link href={'https://github.com/zawataku'}>
                        <img src="/img/profile/GitHub_logo.svg" alt="GitHubのロゴ" className="ml-6 size-12 transition-transform duration-200 ease-in-out hover:scale-150" />
                    </Link>
                </div>
                <div className="mx-3 mt-5 border-t-2 border-slate-200 text-center">
                    <p className="mt-5 text-slate-600">石川県の大学生です</p>
                    <p className="mt-1 text-slate-600">中学生の頃プログラミングに興味を持ち，なんやかんやで今に至ります</p>
                    <p className="mt-1 text-slate-600">普段はTypeScriptとPython書いてます</p>
                    <p className="mt-1 text-slate-600">最近の趣味はドライブとフィルムカメラ</p>
                </div>
            </motion.div>
        </div>
    );
}