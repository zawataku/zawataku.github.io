import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="bg-slate-300 p-5 text-slate-600">
            <div className="rounded-lg bg-slate-50 p-3">
                <h1 className="px-2 py-5 text-center text-3xl font-bold">クッキーポリシー</h1>
                <p className="p-5">
                    「ざわたくの部屋」（以下，「当サイト」といいます．）は，お客様のウェブサイト利用状況を分析し，または個々のお客様に対してカスタマイズされたサービスを提供する等の目的のため，クッキーを使用して一定の情報を収集します．
                </p>

                <h1 className="my-3 border-l-4 border-solid border-l-teal-400 px-5 text-xl font-bold">1．クッキーについて</h1>
                <p className="px-5 pb-5">
                    クッキーとはお客様のウェブサイト閲覧情報を，そのお客様のコンピュータ（PCやスマートフォン，タブレットなどインターネット接続可能な機器）に記憶させる機能のことです．<br />
                    クッキーには，当サイトによって設定されるもの（ファーストパーティークッキー）と，当サイトと提携する第三者によって設定されるもの（サードパーティークッキー）があります．
                </p>

                <h1 className="my-3 border-l-4 border-l-teal-400 px-5 text-xl font-bold">2．クッキーの利用目的</h1>
                <p className="px-5 pb-5">
                    当サイトでは，クッキーをお客様の利便性向上のために使用しています．<br />
                    当サイトでは，クッキーを使用して収集した情報を利用してお客様のウェブサイトの利用状況（アクセス状況，トラフィック，ルーティング等）を分析し，ウェブサイト自体のパフォーマンス改善や当サイトからお客様に提供するサービスの向上，改善のために使用することがあります．
                </p>

                <h1 className="my-3 border-l-4 border-solid border-l-teal-400 px-5 text-xl font-bold">3．クッキーの拒否方法</h1>
                <p className="px-5 pb-5">
                    お客様がブラウザの設定を変更することによりクッキーを無効にすることが可能です．ただしクッキーを無効にした場合は，一部のサービスが受けられない場合があります．<br />
                    クッキーの設定の変更方法については，各ブラウザの製造元へご確認ください．<br />
                    この規約に関しての詳細は
                    <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/" className="text-blue-600 underline">Googleアナリティクスサービス利用規約のページ</Link>
                    や
                    <Link href="https://policies.google.com/technologies/ads?hl=ja" className="text-blue-600 underline">Googleポリシーと規約ページ</Link>をご覧ください．
                </p>

                <h1 className="my-3 border-l-4 border-solid border-l-teal-400 px-5 text-xl font-bold">4．クッキーによる送信情報</h1>
                <p className="px-5 pb-5">
                    本サイトではアクセス解析目的でGoogle Analyticsを使用しています．クッキーによる送信情報等は以下のとおりです．
                </p>
                <div className="px-5">
                    <ul className="list-disc px-5">
                        <li>インターネット通信に通常用いられるシステム、デバイス、ネットワーク、通信に関する情報</li>
                        <li>位置情報</li>
                        <li>サイト・アプリ上での行動に関するデータ</li>
                        <li>閲覧ページに関するデータ</li>
                        <li>ユーザー識別子（Cookie、端末識別子等）</li>
                    </ul>
                </div>
                <div className="divider mx-6"></div>
                <p className="my-6 content-center text-center text-lg">
                    <Link href="/" className="leading-3 hover:underline">トップに戻る</Link>
                </p>
            </div>
        </div>
    )
}