import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "./testdata";

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

const Product = () => {
  const router = useRouter();
  const { id }: { id: string } = router.query;
  const [currentitem, setCurrentitem] = useState({});

  useEffect(() => {
    const item = projects.find((item) => item.id === id);
    if (item) {
      setCurrentitem(item);
    }
  }, [projects]);
  if (currentitem) {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className="fullscreen">
          <div className="product">
            <motion.div
              className="img"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <motion.img
                key={currentitem.image}
                src={currentitem.image}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
            <div className="product-details">
              <motion.div variants={stagger} className="inner">
                <Link href="/">
                  <motion.div variants={fadeInUp}>
                    <a className="go-back">Back to products</a>
                  </motion.div>
                </Link>
                <motion.div variants={fadeInUp}>
                  <span className="category">Protein</span>
                </motion.div>
                <motion.h1 variants={fadeInUp}>{currentitem.role}</motion.h1>
                <motion.p variants={fadeInUp}>{currentitem.title}</motion.p>
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
                  <span className="price">{currentitem.price}</span>
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
  }
};

export default Product;
