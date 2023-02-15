import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./layout.module.css";
import LinkedInIcon from "./icons/LinkedInIcon";
import AIcon from "../public/icons/a-icon.png";
import GithubIcon from "./icons/GithubIcon";
import EmailIcon from "./icons/EmailIcon";
import AnimatedFadeUpIndiv from "./AnimatedFadeUpIndiv";

export default function ShareExternal() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className={styles["indiv-links"]}
    >
      <Link href={"https://github.com/audreyleow"} className={styles.icon}>
        <AnimatedFadeUpIndiv>
          <GithubIcon />
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
            <EmailIcon />
          </AnimatedFadeUpIndiv>
        </div>
      </Link>
      {/* <div className={styles["a-icon"]}>
                <Image src={AIcon} alt="a icon" width={36} height={36} />
              </div> */}
    </motion.div>
  );
}
