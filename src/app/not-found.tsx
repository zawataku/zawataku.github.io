import React from "react";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="text-center bg-white h-screen p-5">
            <img src="/img/404/404.webp" alt="404_image" className="hidden lg:block md:block mx-auto h-4/6" />
            <img src="/img/404/404.webp" alt="404_image" className="lg:hidden md:hidden mx-auto" />
            <p className="text-sm">Illustration by 2個 (@chohjaharaSA)</p>
            <h1 className="text-5xl font-bold py-4 hidden lg:block md:block">ページが見つかりませんでした...</h1>
            <h1 className="text-3xl font-bold py-5 lg:hidden md:hidden block">ページが<br />見つかりませんでした...</h1>
            <p className="text-base">お探しのページは一時的にアクセスができない状況にあるか，移動もしくは削除された可能性があります．</p>
            <p className="my-5"><Link href="https://zawataku.github.io" className="text-blue-600 hover:underline leading-10">トップに戻る</Link></p>
        </div>
    );
}
