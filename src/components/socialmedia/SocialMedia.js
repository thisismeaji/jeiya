import React from 'react';
import Styles from "../socialmedia/socialmedia.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function SocialMedia() {
  return (
    <div className={Styles.socialMedia}>
          <Link href="https://www.instagram.com/jeaj.je?igsh=MTgyMGF4NDZxeTM3aA==">
            <Image
                src="/assets/icons/ts.png"
                width={1080}
                height={1080}
                alt='Instagram'
            />
          </Link>
          <Link href="https://x.com/40143_/status/1873231064560484420?t=kD6f98fqB_TRXVayNSTgOg&s=19">
            <Image
                src="/assets/icons/x.png"
                width={1080}
                height={1080}
                alt='X'
            />
          </Link>
    </div>
  );
}
