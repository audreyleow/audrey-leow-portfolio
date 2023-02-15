import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import ShareExternal from "../components/ShareExternal";
import Skills from "../components/Skills";
// import { getSortedPostsData } from "../lib/posts";

const name = "[Audrey Leow]";
export const siteTitle = "Audrey Leow's Portfolio";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
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
            <ShareExternal />
          </div>
          <div className={styles.pic}>
            <img
              src="/profile_pic.png"
              // className={utilStyles.borderCircle}
              alt={name}
            />
          </div>
        </div>
        <b className="divider"></b>
        <Skills />
      </header>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };
