import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { List } from "./List";
import { useRouter } from "next/router";

function AnimatedWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { id }: { id: string } = router.query;

  return (
    <div className="container">
      <AnimateSharedLayout>
        <List selectedId={id} />
        <AnimatePresence>{children} </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}

export default AnimatedWrapper;
