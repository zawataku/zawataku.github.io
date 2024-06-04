import React from "react";

import ProfileProps_90s from "./90s_profileprops_mobi";

export default function Profile_Mobi_90s() {
    return (
        <div id="Profile_Mobile">
            <div className="flex h-7 w-full bg-red-400 md:hidden lg:hidden">
                <p className="mx-auto text-white">ざわたくのﾌﾟﾛﾌｨｰﾙ</p>
            </div>
            <img src="/img/profile/profile_picture.webp" alt="プロフィール画像" className="mx-auto mt-7 size-28" />

            <ProfileProps_90s title="ﾊﾝﾄﾞﾙﾈｰﾑ" content="ざわたく"></ProfileProps_90s>
            <ProfileProps_90s title="誕生日" content="8月19日"></ProfileProps_90s>
            <ProfileProps_90s title="住んでるところ" content="北陸のどこか"></ProfileProps_90s>
            <ProfileProps_90s title="好きな言語" content="TypeScript / Python / C++"></ProfileProps_90s>

            <div className="mx-auto mt-6 w-3/4">
                <div className="flex h-7 w-full bg-red-400 md:hidden lg:hidden">
                    <p className="mx-2 text-white">ﾘｱﾙ</p>
                </div>
                <div className="mt-2 w-full">
                    <a className="p-2 underline hover:bg-black hover:text-white" href="https://twitter.com/zawataku_Tech">@zawataku_Tech</a>
                </div>
            </div>

            <div className="mx-auto mt-6 w-3/4">
                <div className="flex h-7 w-full bg-red-400 md:hidden lg:hidden">
                    <p className="mx-2 text-white">Myﾘﾝｸ</p>
                </div>
                <div className="mt-2 w-full">
                    <ul className="list-none">
                        <li><a className="p-2 underline hover:bg-black hover:text-white" href="https://github.com/zawataku">GitHub</a></li>
                        <li className="my-2"><a className="p-2 underline hover:bg-black hover:text-white" href="https://qiita.com/zawataku0819">Qiita</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}