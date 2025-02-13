"use client"

import Background from "@/components/background/Background";
import Profile from "@/components/profile/Profile";
import Styles from "../app/page.module.css";
import ListLink from "@/components/list/listlink/ListLink";
import SocialMedia from "@/components/socialmedia/SocialMedia";
import Subscribe from "@/components/subscribe/Subscribe";
import { useSubscribe } from "@/app/context/SubscribeContext";

export default function Home() {
  const { showSubscribe } = useSubscribe(); // Ambil showSubscribe dari context

  return (
    <section className={Styles.section}>
      <Background />
      <div className={Styles.card}>
        <Profile />
        <ListLink />
        <SocialMedia />
        {showSubscribe && <Subscribe />}
      </div>
    </section>
  );
}
