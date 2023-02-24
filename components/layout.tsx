import Head from "next/head";
import styles from "./layout.module.css";
import { siteTitle } from "../pages";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Audrey Leow Software Engineering Portfolio Site"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <header className={styles.header}>
        <div className={styles.profile}>
          <div className={styles["intro-container"]}>
            <div>Hi, I'm</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.intro}>
              <br />
              I'm a full-stack software engineer that mainly works with React.js
              and Ruby on Rails but I am language agnostic and interested in
              designing frontend interfaces and architecting backend processes.
            </div>
          </div>
          <div className={styles.pic}>
            <img
              src="/profile_pic.png"
              // className={utilStyles.borderCircle}
              alt={name}
            />
          </div>
        </div>
      </header> */}
      <main>{children}</main>
    </div>
  );
}
