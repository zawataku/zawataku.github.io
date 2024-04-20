import React from "react";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="h-screen bg-white p-5 text-center">
            <img src="/img/404/404.webp" alt="404_image" className="mx-auto hidden h-4/6 md:block lg:block" />
            <img src="/img/404/404.webp" alt="404_image" className="mx-auto md:hidden lg:hidden" />
            <p className="text-sm text-slate-900">Illustration by 2個 (@chohjaharaSA)</p>
            <h1 className="hidden py-4 text-5xl font-bold text-slate-900 md:block lg:block">ページが見つかりませんでした...</h1>
            <h1 className="block py-5 text-3xl font-bold text-slate-900 md:hidden lg:hidden">ページが<br />見つかりませんでした...</h1>
            <p className="text-base text-slate-900">お探しのページは一時的にアクセスができない状況にあるか，移動もしくは削除された可能性があります．</p>
            <p className="my-5"><Link href="https://zawataku.github.io" className="leading-10 text-blue-600 hover:underline">トップに戻る</Link></p>
        </div>
    );
}
