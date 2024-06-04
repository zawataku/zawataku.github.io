import React from "react";

import Scroll_Text_90s from "./90s_scroll_text_desktop";
import Footer_Desktop_90s from "./90s_footer_desktop";

export default function Top_Desktop_90s() {
    return (
        <div className="h-full grow border-l-DEFAULT border-black bg-[url('/img/90s/b056.jpg')]">
            <div className="my-10 flex justify-center">
                <img src="/img/90s/90s_top_img.webp" alt="トップ画像" />
            </div>
            <Scroll_Text_90s></Scroll_Text_90s>
            <Footer_Desktop_90s></Footer_Desktop_90s>
        </div>
    )
}
