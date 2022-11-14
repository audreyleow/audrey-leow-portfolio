import Link from "next/link";
import { motion } from "framer-motion";
import { work_experience } from "./testdata";
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

const MotionLink = motion(Link);

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
          <div className={styles.heading}>My Work Experiences</div>
        </motion.div>
        <motion.div variants={stagger} className={styles.cards}>
          {work_experience.map((work_experience) => (
            <div className={styles["item-container"]}>
              <Link
                key={work_experience.id}
                href="/projects/[id]"
                as={`/projects/${work_experience.id}`}
              >
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.item}
                >
                  <div className={styles.subheading}>
                    {work_experience.title}
                  </div>
                  <motion.img
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    key={work_experience.images[0]}
                    src={work_experience.images[0]}
                    width={250}
                    height={150}
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  />
                  <div className={styles.subheading}>
                    <div>{work_experience.role}</div>
                  </div>
                  <div className={styles.date}>
                    {`${work_experience.start} - ${work_experience.end}`}
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </motion.div>
        <motion.div style={{ paddingTop: "20px" }}>
          <MotionLink
            href="/"
            variants={fadeInUp}
            className={styles["go-back"]}
          >
            ← Back to main page
          </MotionLink>
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
