import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./layout.module.css";
import LinkedInIcon from "./icons/LinkedInIcon";
import AIcon from "../public/icons/a-icon.png";
import GithubIcon from "../public/icons/github-logo.png";
import EmailIcon from "../public/icons/email-logo.png";
import AnimatedFadeUpIndiv from "./AnimatedFadeUpIndiv";

export default function ShareExternal() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className={styles["indiv-links"]}
    >
      <Link href={"https://github.com/audreyleow"} className={styles["a-icon"]}>
        <AnimatedFadeUpIndiv>
          <Image src={GithubIcon} alt="a icon" width={32} height={32} />
        </AnimatedFadeUpIndiv>
      </Link>
      <Link href={"http://linkedin.com/in/audrey-leow"} className={styles.icon}>
        <AnimatedFadeUpIndiv>
          <LinkedInIcon />
        </AnimatedFadeUpIndiv>
      </Link>
      <Link href={"mailto:audreyleow@yahoo.com.sg"}>
        <div className={styles["email-icon"]}>
          <AnimatedFadeUpIndiv>
            <Image src={EmailIcon} alt="a icon" width={38} height={38} />
          </AnimatedFadeUpIndiv>
        </div>
      </Link>
      {/* <div className={styles["a-icon"]}>
                <Image src={AIcon} alt="a icon" width={36} height={36} />
              </div> */}
    </motion.div>
  );
}
