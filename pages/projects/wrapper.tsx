import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { List } from "./List";
import { useRouter } from "next/router";

function AnimatedWrapper() {
  const router = useRouter();

  return (
    <div className="container">
      <AnimateSharedLayout>
        <List />
        {/* <AnimatePresence>{children} </AnimatePresence> */}
      </AnimateSharedLayout>
    </div>
  );
}

export default AnimatedWrapper;
