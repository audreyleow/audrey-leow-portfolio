import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import AIcon from "../public/icons/a-icon.png";
import GithubIcon from "../public/icons/github-logo.png";
import EmailIcon from "../public/icons/email-logo.png";
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
            <div className={styles["name-test"]}>{name}</div>
            <div className={styles.intro}>
              <br />
              I'm a full-stack software engineer that mainly works with React.js
              and Ruby on Rails but I am language agnostic and interested in
              designing frontend interfaces and architecting backend processes.
            </div>
            <div className={styles["indiv-links"]}>
              <Link
                href={"https://github.com/audreyleow"}
                className={styles["a-icon"]}
              >
                <Image src={GithubIcon} alt="a icon" width={32} height={32} />
              </Link>
              <Link
                href={"http://linkedin.com/in/audrey-leow"}
                className={styles.icon}
              >
                <LinkedInIcon />
              </Link>
              <Link href={"mailto:audreyleow@yahoo.com.sg"}>
                <div className={styles["email-icon"]}>
                  <Image src={EmailIcon} alt="a icon" width={38} height={38} />
                </div>
              </Link>
              {/* <div className={styles["a-icon"]}>
                <Image src={AIcon} alt="a icon" width={36} height={36} />
              </div> */}
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
