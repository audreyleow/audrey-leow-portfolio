import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import styles from "./layout.module.css";
import { techStacks } from "../utils/data";

const Card = ({
  imageRoute,
  techStack,
}: {
  imageRoute: string;
  techStack: string;
}) => {
  return (
    <div className={styles["card-container"]}>
      <Image src={imageRoute} width={50} height={50} alt={techStack} />
      <div className={styles.skills}>{techStack}</div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className={styles["skills-container"]}>
      <div className={styles["skills-heading"]}>My Skills</div>

      <Marquee speed={40} gradientWidth={100}>
        {techStacks.map((techStack) => (
          <Card techStack={techStack.name} imageRoute={techStack.imageRoute} />
        ))}
      </Marquee>
    </div>
  );
}
