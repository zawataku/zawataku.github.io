import React from "react";
import styles_90s from "@/styles/styles_90s.module.css"

import Sidebar_90s from "@/components/90s/desktop/90s_sidebar_desktop";
import Top_Desktop_90s from "@/components/90s/desktop/90s_top_desktop";

import Topbar_90s from "@/components/90s/mobile/90s_topbar_mobi";
import Header_90s from "@/components/90s/mobile/90s_header_mobi";
import Top_Mobi_90s from "@/components/90s/mobile/90s_top_mobi";
import Profile_Mobi_90s from "@/components/90s/mobile/90s_profile_mobi";
import Footer_90s from "@/components/90s/mobile/90s_footer_mobi";

export default function Page_90s() {
    return (
        <div className={styles_90s.body_90s}>

            <div id="desktop" className="hidden md:flex lg:flex">
                <Sidebar_90s></Sidebar_90s>
                <Top_Desktop_90s></Top_Desktop_90s>
            </div>

            <div id="mobile" className="bg-sky-200 md:hidden lg:hidden">
                <Topbar_90s></Topbar_90s>
                <Header_90s></Header_90s>
                <Top_Mobi_90s></Top_Mobi_90s>
                <Profile_Mobi_90s></Profile_Mobi_90s>
                <Footer_90s></Footer_90s>
            </div>
        </div>

    )
}