import React from 'react';
import Styles from "../profile/profile.module.css";
import Image from 'next/image';

export default function Profile() {
  return (
    <div className={Styles.profile}>
        <div className={Styles.image}>
          <Image
            src="/assets/images/profile.png"
            width={1080}
            height={1080}
            alt="Profile"
          />
        </div>
        <div className={Styles.text}>
          <h1>Jeiya</h1>
          <h2>Cosplayer - Online Store</h2>
          <p>
            🩰𝚂𝚎𝚕𝚕𝚒𝚗𝚐 𝚘𝚏 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 𝚊𝚙𝚙𝚜 & 𝚐𝚊𝚖𝚎 𝚝𝚘𝚙-𝚞𝚙𝚜. 𝙲𝚘𝚜𝚙𝚕𝚊𝚢 𝚎𝚗𝚝𝚑𝚞𝚜𝚒𝚊𝚜𝚝, 𝚐𝚊𝚖𝚎𝚛 𝚊𝚝 𝚑𝚎𝚊𝚛𝚝, 𝙺-𝚙𝚘𝚙 & 𝚊𝚗𝚒𝚖𝚎 𝚕𝚘𝚟𝚎𝚛, 𝚠𝚎𝚊𝚟𝚒𝚗𝚐 𝚌𝚛𝚎𝚊𝚝𝚒𝚟𝚒𝚝𝚢 𝚒𝚗𝚝𝚘 𝚎𝚟𝚎𝚛𝚢 𝚙𝚕𝚊𝚢 ⋆🎀⋆
          </p>
        </div>
    </div>
  );
}
