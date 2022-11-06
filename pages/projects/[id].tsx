import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "./testdata";
import { GetStaticPaths, GetStaticProps } from "next/types";

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
  project,
}: {
  project: {
    id: string;
    role: string;
    title: "NodeFlair";
    image: string;
    price: "#814A0E";
  };
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      variants={{
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { duration: 1 } },
      }}
      transition={{ type: "linear" }}
    >
      <div className="fullscreen">
        <div className="product">
          <motion.div
            className="img"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.img
              src={project.image}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
          <div className="product-details">
            <motion.div variants={stagger} className="inner">
              <MotionLink href="/projects" variants={fadeInUp} className="go-back">
                Back to products
              </MotionLink>
              <motion.div variants={fadeInUp}>
                <span className="category">Protein</span>
              </motion.div>
              <motion.h1 variants={fadeInUp}>{project.role}</motion.h1>
              <motion.p variants={fadeInUp}>{project.title}</motion.p>
              <motion.div variants={fadeInUp} className="additonals">
                <span>Soy Free</span>
                <span>Gluten Free</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="qty-price">
                <div className="qty">
                  <div className="minus">-</div>
                  <div className="amount">1</div>
                  <div className="add">+</div>
                </div>
                <span className="price">{project.price}</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="btn-row">
                <button className="add-to-cart"> Add to cart</button>
                <button className="subscribe"> Subscribe</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({ params: { id: project.id } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      project: projects.find((project) => project.id === params?.id),
    },
  };
};
