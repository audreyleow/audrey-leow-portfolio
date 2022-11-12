import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { work_experience } from "./testdata";
import { GetStaticPaths, GetStaticProps } from "next/types";
import CarouselSwiper from "../../components/CarouselSwiper";
import styles from "./index.module.css";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const MotionLink = motion(Link);

const Project = ({
  indivWork,
}: {
  indivWork: {
    id: string;
    role: string;
    title: string;
    images: string[];
    details: string[];
    tech_stack: string;
    start: string;
    end: string;
  };
}) => {
  const workDetails = () =>
    indivWork.details.map((line: string) => {
      return (
        <motion.li
          style={{ listStyle: "disc" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {line}
        </motion.li>
      );
    });

  return (
    <div className={styles["work-details-container"]}>
      <motion.div
        initial="hidden"
        animate="enter"
        variants={{
          hidden: { opacity: 0, x: -200, y: 0 },
          enter: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
          exit: { opacity: 0, transition: { duration: 1 } },
        }}
        transition={{ type: "linear" }}
        style={{ padding: "20px" }}
      >
        <motion.div variants={stagger}>
          <motion.h3 variants={fadeInUp}>{indivWork.title}</motion.h3>
          <motion.h1 variants={fadeInUp}>{indivWork.role}</motion.h1>
          <motion.div variants={fadeInUp}>
            <motion.ol className={styles.category}>{workDetails()}</motion.ol>
          </motion.div>
          <motion.div>
            <MotionLink
              href="/projects"
              variants={fadeInUp}
              className={styles["go-back"]}
            >
              ← Back to my other work experiences
            </MotionLink>
          </motion.div>
        </motion.div>
      </motion.div>

      <CarouselSwiper images={indivWork.images} />
    </div>
    // <motion.div
    //   initial="hidden"
    //   animate="enter"
    //   variants={{
    //     hidden: { opacity: 0, x: -200, y: 0 },
    //     enter: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
    //     exit: { opacity: 0, transition: { duration: 1 } },
    //   }}
    //   transition={{ type: "linear" }}
    // >
    //   <div className={styles.fullscreen}>
    //     <div className={styles.product}>
    //       <motion.div
    //         className={styles.img}
    //         animate={{ opacity: 1 }}
    //         initial={{ opacity: 0 }}
    //       >
    //         <CarouselSwiper images={indivWork.images} />
    //         {/* <motion.img
    //           src={indivWork.images[0]}
    //           animate={{ x: 0, opacity: 1 }}
    //           initial={{ x: 200, opacity: 0 }}
    //           exit={{ opacity: 0 }}
    //           transition={{ delay: 0.2 }}
    //         /> */}
    //       </motion.div>
    //       <div className={styles["work-details"]}>
    //         <motion.div variants={stagger} className={styles.inner}>
    //           <MotionLink
    //             href="/work_experience"
    //             variants={fadeInUp}
    //             className={styles["go-back"]}
    //           >
    //             ← Back to my other work experiences
    //           </MotionLink>
    //           <motion.h3 variants={fadeInUp}>{indivWork.title}</motion.h3>
    //           <motion.h1 variants={fadeInUp}>{indivWork.role}</motion.h1>
    //           <motion.div variants={fadeInUp}>
    //             <motion.ol className={styles.category}>
    //               {workDetails()}
    //             </motion.ol>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
  );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = work_experience.map((indivWork) => ({
    params: { id: indivWork.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const indivWork = work_experience.find(
    (indivWork) => indivWork.id === params?.id
  );
  return {
    props: {
      indivWork,
    },
  };
};
