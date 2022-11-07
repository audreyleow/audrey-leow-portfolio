import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "./testdata";
import { useRouter } from "next/router";
import styles from "./index.module.css";
// Our custom easing
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

const Index = () => {
  const router = useRouter();
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className={styles["work-container"]}>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className={styles["work-title"]}
        >
          <h1>My Work Experiences</h1>
        </motion.div>
        <motion.div variants={stagger} className={styles["product-row"]}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/projects/[id]"
              as={`/projects/${project.id}`}
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.card}
              >
                <span className={styles.category}>{project.title}</span>
                <motion.img
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  key={project.image}
                  src={project.image}
                  width={250}
                />
                <div className={styles["product-info"]}>
                  <h4>{project.role}</h4>
                  <span>{project.price}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Index.getInitialProps = async function() {
//   const res = await fetch(
//     "https://my-json-server.typicode.com/wrongakram/demo/projects"
//   );
//   const data = await res.json();
//   return {
//     products: data
//   };
// };

export default Index;
