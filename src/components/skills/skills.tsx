import React from "react";
import { motion } from "framer-motion";

export default function Skill() {
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
                <h1 className="pb-3 text-center text-5xl font-semibold text-slate-900">Skills</h1>
                <p className=" mb-7 text-center text-lg text-slate-900">こんな技術使えます</p>

                <div className="mx-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {/* HTML/CSSここから */}
                    <div className="group relative z-40 m-2  rounded-md bg-white p-4 shadow-xl transition-all duration-500 hover:bg-slate-500 hover:shadow-xl">
                        <div className=" absolute  left-0 top-0 z-30 h-1 w-24 bg-slate-500/50  transition-all duration-200 group-hover:w-1/2 group-hover:bg-[#e44f26]"></div>
                        <div className="relative px-9 py-2  ">
                            <div className="flex">
                                <svg className="size-16"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path className="fill-slate-400 group-hover:fill-[#e44f26]" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"></path><path className="fill-slate-400 group-hover:fill-[#f1662a]" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path><path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"></path><path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-.833zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"></path>
                                </svg>
                                <svg className="size-16"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path className="fill-slate-400 group-hover:fill-[#1572b6]" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z" /><path className="fill-slate-400 group-hover:fill-[#33a9dc]" d="m16 27.858l8.17-2.265l1.922-21.532H16z" /><path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z" /><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z" /><path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z" /><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z" />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-slate-900 group-hover:text-white ">HTML / CSS</h3>
                            <p className="mt-4 text-base text-slate-600 group-hover:text-white">旧ホームページで使っていた言語たち．Tailwindに移行したから素のCSSは最近あまり書いてないかも...</p>
                        </div>
                    </div>
                    {/* HTML/CSSここまで */}

                    {/* JSここから */}
                    <div className="group relative z-40 m-2  rounded-md bg-white p-4 shadow-xl transition-all duration-500 hover:bg-slate-500 hover:shadow-xl">
                        <div className=" absolute  left-0 top-0 z-30 h-1 w-24 bg-slate-500/50  transition-all duration-200 group-hover:w-1/2 group-hover:bg-[#f5de19]"></div>
                        <div className="relative px-9 py-2  ">
                            <svg className="size-16"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path className="fill-slate-400 group-hover:fill-[#f5de19]" d="M2 2h28v28H2z" /><path className="fill-white group-hover:fill-black" d="M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" /></svg>
                            <h3 className="mt-8 text-lg font-semibold text-slate-900 group-hover:text-white ">JavaScript</h3>
                            <p className="mt-4 text-base text-slate-600 group-hover:text-white">Chromeの拡張機能作るときにお世話になってます．</p>
                        </div>
                    </div>
                    {/* JSここまで */}

                    {/* TSここから */}
                    <div className="group relative z-40 m-2  rounded-md bg-white p-4 shadow-xl transition-all duration-500 hover:bg-slate-500 hover:shadow-xl">
                        <div className=" absolute  left-0 top-0 z-30 h-1 w-24 bg-slate-500/50  transition-all duration-200 group-hover:w-1/2 group-hover:bg-[#3178c6]"></div>
                        <div className="relative px-9 py-2  ">
                            <svg className="size-16"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="28" height="28" x="2" y="2" className="fill-slate-400 group-hover:fill-[#3178c6]" rx="1.312" /><path fill="#fff" fillRule="evenodd" d="M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575a11.56 11.56 0 0 0 2.146.192a9.968 9.968 0 0 0 2.088-.211a5.11 5.11 0 0 0 1.735-.7a3.542 3.542 0 0 0 1.181-1.266a4.469 4.469 0 0 0 .186-3.394a3.409 3.409 0 0 0-.717-1.117a5.236 5.236 0 0 0-1.123-.877a12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.089 2.089 0 0 1-.516-.518a1.091 1.091 0 0 1-.181-.618a1.039 1.039 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.439 2.439 0 0 1 .726-.283a4.211 4.211 0 0 1 .956-.1a5.942 5.942 0 0 1 .808.058a6.292 6.292 0 0 1 .856.177a5.994 5.994 0 0 1 .836.3a4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4a12.426 12.426 0 0 0-1.9-.129a8.767 8.767 0 0 0-2.064.235a5.239 5.239 0 0 0-1.716.733a3.655 3.655 0 0 0-1.171 1.271a3.731 3.731 0 0 0-.431 1.845a3.588 3.588 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517a2.463 2.463 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.269 1.269 0 0 1-.435.441a2.381 2.381 0 0 1-.726.292a4.377 4.377 0 0 1-1.018.105a5.773 5.773 0 0 1-1.969-.35a5.874 5.874 0 0 1-1.805-1.045m-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z" /></svg>
                            <h3 className="mt-8 text-lg font-semibold text-slate-900 group-hover:text-white ">TypeScript</h3>
                            <p className="mt-4 text-base text-slate-600 group-hover:text-white">主にReactとNext.jsで使用している言語．ついついany型使いがち．</p>
                        </div>
                    </div>
                    {/* TSここまで */}

                    {/* Reactここから */}
                    <div className="group relative z-40 m-2  rounded-md bg-white p-4 shadow-xl transition-all duration-500 hover:bg-slate-500 hover:shadow-xl">
                        <div className=" absolute  left-0 top-0 z-30 h-1 w-24 bg-slate-500/50  transition-all duration-200 group-hover:w-1/2 group-hover:bg-[#00d8ff]"></div>
                        <div className="relative px-9 py-2  ">
                            <svg className="size-16"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="15.974" r="2.5" className="fill-slate-400 group-hover:fill-[#00d8ff]" /><path className="fill-slate-400 group-hover:fill-[#00d8ff]" d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489" /><path className="fill-slate-400 group-hover:fill-[#00d8ff]" d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307m1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z" /><path className="fill-slate-400 group-hover:fill-[#00d8ff]" d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324m-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z" /></svg>
                            <h3 className="mt-8 text-lg font-semibold text-slate-900 group-hover:text-white ">React（TS）</h3>
                            <p className="mt-4 text-base text-slate-600 group-hover:text-white">最近使い始めたとっても優秀なフロントエンドライブラリ．コンポーネントもPropsも慣れるともう...戻れない...</p>
                        </div>
                    </div>
                    {/* Reactここまで */}

                    {/* Nextここから */}
                    <div className="group relative z-40 m-2  rounded-md bg-white p-4 shadow-xl transition-all duration-500 hover:bg-slate-500 hover:shadow-xl">
                        <div className=" absolute  left-0 top-0 z-30 h-1 w-24 bg-slate-500/50  transition-all duration-200 group-hover:w-1/2 group-hover:bg-black"></div>
                        <div className="relative px-9 py-2  ">
                            <svg className="size-16"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path className="fill-slate-400 group-hover:fill-[#d2d2d2]" d="M29.874 13.964A14.058 14.058 0 0 0 20.3 2.653a14.74 14.74 0 0 0-2.915-.61c-.263-.027-2.072-.057-2.3-.035c-.06 0-.252.024-.424.038A14.034 14.034 0 0 0 4.6 7.848a13.855 13.855 0 0 0-2.471 6.116A10.731 10.731 0 0 0 2 16a10.737 10.737 0 0 0 .126 2.039A14.055 14.055 0 0 0 11.7 29.352a14.772 14.772 0 0 0 2.956.613a25.525 25.525 0 0 0 2.682 0a14.139 14.139 0 0 0 5.045-1.475c.24-.123.287-.156.254-.183s-1.048-1.393-2.28-3.057l-2.239-3.024l-2.8-4.152c-1.544-2.282-2.814-4.148-2.825-4.148s-.022 1.841-.027 4.094a32.213 32.213 0 0 1-.06 4.2a.5.5 0 0 1-.241.249c-.088.044-.165.052-.578.052h-.473l-.126-.079a.517.517 0 0 1-.184-.2l-.057-.123l.005-5.487l.009-5.49l.084-.107a.768.768 0 0 1 .2-.167c.112-.054.156-.06.629-.06c.559 0 .652.022.8.181c.041.044 1.56 2.331 3.377 5.087s4.3 6.519 5.524 8.366L23.59 27.8l.112-.074a14.357 14.357 0 0 0 2.877-2.526a13.932 13.932 0 0 0 3.295-7.156A10.737 10.737 0 0 0 30 16a10.731 10.731 0 0 0-.126-2.036m-8.761 1.855l-.008 4.921l-.868-1.33l-.87-1.33V14.5c0-2.312.011-3.612.027-3.675a.558.558 0 0 1 .271-.345c.112-.058.153-.063.583-.063c.4 0 .476.005.566.055a.546.546 0 0 1 .277.323c.022.074.027 1.595.022 5.024" /></svg>
                            <h3 className="mt-8 text-lg font-semibold text-slate-900 group-hover:text-white ">Next.js</h3>
                            <p className="mt-4 text-base text-slate-600 group-hover:text-white">Reactとセットで使ってるJSライブラリ．SSGがとても優秀．まだまだ使ってない機能が山ほどあるので味わい尽くしたい．</p>
                        </div>
                    </div>
                    {/* Nextここまで */}

                    {/* Tailwindここから */}
                    <div className="group relative z-40 m-2  rounded-md bg-white p-4 shadow-xl transition-all duration-500 hover:bg-slate-500 hover:shadow-xl">
                        <div className=" absolute  left-0 top-0 z-30 h-1 w-24 bg-slate-500/50  transition-all duration-200 group-hover:w-1/2 group-hover:bg-[#44a8b3]"></div>
                        <div className="relative px-9 py-2  ">
                            <svg className="size-16"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path className="fill-slate-400 group-hover:fill-[#44a8b3]" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"/></svg>
                                <h3 className="mt-8 text-lg font-semibold text-slate-900 group-hover:text-white ">Tailwind CSS</h3>
                            <p className="mt-4 text-base text-slate-600 group-hover:text-white">愛してやまないCSSフレームワーク．慣れると簡潔かつ自由にUIが書けるようになるので素晴らしい．コードが煩雑になるけどESlintで綺麗に揃えられるのでOK.</p>
                        </div>
                    </div>
                    {/* Tailwindここまで */}

                </div>
            </motion.div >
        </div >
    )
}