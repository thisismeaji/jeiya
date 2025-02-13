"use client";

import React, { useEffect, useRef } from "react";
import Styles from "../subscribe/subscribe.module.css";
import Image from "next/image";
import { useSubscribe } from "@/app/context/SubscribeContext";

export default function Subscribe() {
  const { setShowSubscribe } = useSubscribe();
  const modalRef = useRef(null); // Buat referensi untuk kotak subscribe

  // Fungsi untuk menangani klik di luar kotak
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowSubscribe(false);
      }
    }

    // Tambahkan event listener saat subscribe muncul
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSubscribe]);

  return (
    <div className={Styles.overlay}>
      <div className={Styles.subscribe} ref={modalRef}>
        <div className={Styles.cardPhoto}>
          <Image
            src="/assets/images/profile.png"
            width={1080}
            height={1080}
            alt="profile"
          />
          <h1>Subscribe to Jeiya</h1>
          <p>Stay up to date with everything important.</p>
        </div>
        <div className={Styles.cardForm}>
          <input type="email" placeholder="email" />
          <button>Subscribe</button>
        </div>
        <div className={Styles.cardTOS}>
          <p>
            By subscribing, you agree to our Terms of Service and Privacy Policy.
            You can unsubscribe anytime.
          </p>
        </div>
        <div
          className={Styles.closeBtn}
          onClick={() => setShowSubscribe(false)}
          style={{ cursor: "pointer" }}
        >
          <p>×</p>
        </div>
      </div>
    </div>
  );
}
