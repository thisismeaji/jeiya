"use client";

import Image from "next/image";
import Styles from "../navigation/navigation.module.css";
import { useSubscribe } from "@/app/context/SubscribeContext";

export default function Navigation() {
  const { setShowSubscribe } = useSubscribe(); // Ambil setShowSubscribe dari context

  return (
    <nav className={Styles.nav}>
      <div
        className={Styles.logo}
        onClick={() => setShowSubscribe((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        <Image
          src="/assets/icons/bell.png"
          alt="Subscribe"
          width={1000}
          height={1000}
        />
      </div>
      <div className={Styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
