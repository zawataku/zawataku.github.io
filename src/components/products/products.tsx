import React from "react";
import ProductCard from "./product_card";

import { motion } from "framer-motion";

export default function Product() {
    return (
        <div className="py-24">

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
                <h1 className="pb-3 text-center text-5xl font-semibold text-slate-900">Products</h1>
                <p className="text-center text-lg text-slate-900">今までに作ったものたち</p>
                <div className="mx-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductCard name="zawataku CSS Framework" description="自作汎用CSSフレームワークです．大量のCSSコードを書くことなく美しいデザインのWebページを作ることができます．" imgURL="/img/products/zawatakuCSS.webp" linkURL="https://github.com/zawataku/zawataku_framework"></ProductCard>
                </div>
            </motion.div>
        </div >
    )
}