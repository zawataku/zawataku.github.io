import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-center bg-slate-500 p-10 text-base text-slate-50">
            <p className="text-slate-50">
            <Link href="/cookie_policy" className="leading-3 hover:underline">クッキーポリシー</Link>
            </p>
            <aside>
                <p className="font-bold">
                    ざわたくの部屋　
                    -Since 2023-
                </p>
                <p>Copyright © 2024 ざわたく All rights reserved.</p>
            </aside>
        </footer>
    )
}