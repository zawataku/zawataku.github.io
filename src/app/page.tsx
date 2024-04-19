"use client";

import React from "react";
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion"

import Top from "@/components/top/page";
import Profile from "@/components/profile/page";
import Timeline from "@/components/timeline/page";
import Skill from "@/components/skills/page";
import ReturnTopButton from "@/components/returnbutton/return_button";
import Footer from "@/components/footer/footer";

import bar from "../styles/bar.module.css"
import shutter from "../styles/shutter.module.css"
import { scrollFadeIn } from "@/components/action/fade";


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); //ページがロードされたときに一番上までスクロール
    scrollFadeIn();
  }, []);

  const { scrollYProgress } = useScroll();
  return (
    <div>
      <div className={shutter.shutter}></div>
      <section className="bg-slate-50">
        <motion.div className={bar.progressbar} style={{ scaleX: scrollYProgress }} />
        <Top></Top>
        <Profile></Profile>
        <Timeline></Timeline>
        <Skill></Skill>
        <ReturnTopButton></ReturnTopButton>
        <Footer></Footer>
      </section>
    </div>
  );
}