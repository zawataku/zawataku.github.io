"use client";

import React from "react";
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion"

import Top from "@/components/top/top";
import Profile from "@/components/profile/profile";
import Timeline from "@/components/timeline/timeline";
import Product from "@/components/products/products";
import Skill from "@/components/skills/skills";
import ReturnTopButton from "@/components/returnbutton/return_button";
import Footer from "@/components/footer/footer";

import styles from "../styles/styles.module.css"
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
    <div className={styles.body}>
      <div className={shutter.shutter}></div>
      <section className="bg-slate-50">
        <motion.div className={bar.progressbar} style={{ scaleX: scrollYProgress }} />
        <Top></Top>
        <Profile></Profile>
        <Timeline></Timeline>
        <Product></Product>
        <Skill></Skill>
        <ReturnTopButton></ReturnTopButton>
        <Footer></Footer>
      </section>
    </div>
  );
}