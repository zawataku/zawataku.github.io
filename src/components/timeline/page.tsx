import React from "react";
import TimeCard from "./timeline_card";
import { motion } from "framer-motion";

export default function Timeline() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden antialiased max-w-2xl mx-auto mt-20">

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

                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                    <h1 className="text-center text-5xl font-semibold pb-3 text-slate-900">History</h1>
                    <p className=" text-center text-lg text-slate-900">これまでの軌跡</p>
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                        <div className="w-full max-w-3xl mx-auto">
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                                <TimeCard date="2018-08" title="Raspberry Piで温度計" body="中学の自由研究でRaspberry Pi 3 Model Bを使った室内温度計製作に挑戦．制御に使用した言語はPython．" imgURL=""></TimeCard>
                                <TimeCard date="2020-07" title="部活ホームページ制作" body="HTMLとCSSで高校時代に所属していた部活のホームページを制作．最終的にデプロイはせず，ローカル環境で動かしたものを文化祭で展示．" imgURL=""></TimeCard>
                                <TimeCard date="2021-06" title="BASICで疑似対話ゲーム" body="文化祭展示用の疑似的な対話が楽しめるゲーム．使用言語はSmileBASIC．" imgURL="/img/timeline/IMG_3178.webp"></TimeCard>
                                <TimeCard date="2023-04" title="旧ホームページ開設" body="ポートフォリオ兼ミニブログとしてホームページを開設．1990年代を思わせるデザイン．" imgURL="/img/timeline/IMG_4321.webp"></TimeCard>
                                <TimeCard date="2023-10" title="Chrome拡張機能開発" body="大学のポータルサイトの使い勝手を良くするための拡張機能開発にハマる．" imgURL=""></TimeCard>
                                <TimeCard date="2024-01" title="Next.jsで簡易掲示板アプリ制作" body="ログイン機能のあるネット掲示板っぽいもをの制作（未デプロイ）．Next.js初挑戦！" imgURL="/img/timeline/IMG_3377.webp"></TimeCard>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div >
        </div>
    )
}