import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./[id]";
import { List } from "./List";
import { useRouter } from "next/router";
import AnimatedWrapper from "./wrapper";

export default function Home() {
  const router = useRouter();
  const { id }: { id: string } = router.query;
  const imageHasLoaded = true;
  return (
    <>
      <AnimatedWrapper>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatedWrapper>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//     const allWorkData = getSortedWorkData();
//     return {
//       props: {
//         allWorkData,
//       },
//     };
//   };
