import React from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "@/data/link/Links";
import Styles from "../listlink/listlink.module.css";

export default function ListLink() {
  return (
    <div className={Styles.list}>
      {Links.map((link, index) => (
        <Link key={index} href={link.href} className={Styles.button}>
          <Image
              src={link.image}
              alt={link.text}
              width={1080}
              height={1080}
              className={Styles.linkImage}
            />
            <p>{link.text}</p>
        </Link>
      ))}
    </div>
  );
}
