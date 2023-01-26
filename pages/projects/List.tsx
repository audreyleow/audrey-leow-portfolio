import React from "react";
import { project_items } from "../../lib/project_data";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./list.module.css";
import Dialog from "@mui/material/Dialog";
import { useRouter } from "next/router";
type CardDetails = {
  id: string;
  type: string;
  title: string;
  details: string[];
  tech_stack: string;
  start: string;
  end: string;
  href?: string;
  as?: string;
  external?: boolean;
};

let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Card({
  id,
  type,
  title,
  details,
  tech_stack,
  start,
  end,
  as,
  href,
  external,
}: CardDetails) {
  const projectDetails = () =>
    details?.map((line: string) => {
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
          className={styles.details}
        >
          {line}
        </motion.li>
      );
    });

  const innerComponent = (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={styles["card-content-container"]}
    >
      <motion.div>
        <div className={styles["general-info"]}>
          <div>
            <div className={styles.category}>{type}</div>
            <div className={styles.subheading}>{title}</div>
          </div>
          <div className={styles.date}>
            ({start} - {end})
          </div>
        </div>

        <motion.div variants={fadeInUp}>
          <motion.ol className={styles.details}>{projectDetails()}</motion.ol>
          {id === "swe-project" ? (
            <motion.li className={styles.details}>
              Click to watch application demo!
            </motion.li>
          ) : id === "audrey-the-foodie" ? (
            <motion.li className={styles.details}>
              Click to explore my site!
            </motion.li>
          ) : undefined}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div variants={stagger} className={styles.card}>
      {href !== undefined && external ? (
        <a
          href={href}
          className={styles["remove-link-style"]}
          target="_blank"
          rel="noopener"
        >
          {innerComponent}
        </a>
      ) : as !== undefined && href !== undefined && !external ? (
        <Link as={as} href={href} className={styles["remove-link-style"]}>
          {innerComponent}
        </Link>
      ) : (
        <div>{innerComponent}</div>
      )}
    </motion.div>
  );
}

export default function List() {
  const router = useRouter();

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={styles["work-title"]}
      >
        <div className={styles.heading}>My Projects</div>
      </motion.div>
      <motion.div className={styles["card-list"]}>
        {project_items.map((card) => {
          return (
            <Card
              {...card}
              key={card.id}
              as={
                card.id === "swe-project" ? "/projects/swe-project" : undefined
              }
              href={
                card.id === "swe-project"
                  ? "/projects/?openModal=swe-project"
                  : card.id === "audrey-the-foodie"
                  ? "https://audreythefoodie.com"
                  : undefined
              }
              external={card.id === "audrey-the-foodie"}
            />
          );
        })}
      </motion.div>
      <motion.div>
        <Dialog
          open={router.query.openModal !== undefined}
          onClose={() => {
            router.push("/projects");
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ padding: "20px" }}
          PaperProps={{
            sx: {
              maxWidth: "80%",
            },
          }}
        >
          <motion.div
            className={styles["modal-content"]}
            layoutId={`card-container-swe-project`}
          >
            <motion.div animate>
              Video demonstration of the web application I wrote for my NTU
              CZ2006 - Software Engineering module.
            </motion.div>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/TKunzXhCr-I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ aspectRatio: "16 / 9", padding: "20px" }}
            ></iframe>
            <motion.div animate>
              Access to Github repo available upon request!
            </motion.div>
          </motion.div>
        </Dialog>
      </motion.div>
    </motion.div>
  );
}
