import React from "react";
import SkillProps from "./skillprops";
import { motion } from "framer-motion";

export default function Skill() {
    return (
        <div className="">
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
                <h1 className="pb-3 text-center text-5xl font-semibold text-slate-900">Skills</h1>
                <p className=" mb-7 text-center text-lg text-slate-900">独断と偏見で考える言語習熟度</p>
                <SkillProps skillname="HTML" progress_pct="80%" progress="80" tooltip="かなり書き慣れてきた"></SkillProps>
                <SkillProps skillname="CSS" progress_pct="60%" progress="60" tooltip="Tailwind大好き！"></SkillProps>
                <SkillProps skillname="JavaScript" progress_pct="30%" progress="30" tooltip="拡張機能づくりに"></SkillProps>
                <SkillProps skillname="TypeScript" progress_pct="40%" progress="40" tooltip="Next.jsとRaect"></SkillProps>
                <SkillProps skillname="Python" progress_pct="15%" progress="15" tooltip="絶賛勉強中"></SkillProps>
                <SkillProps skillname="C++" progress_pct="15%" progress="15" tooltip="絶賛勉強中"></SkillProps>
            </motion.div>
        </div>
    )
}