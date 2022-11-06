import React from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function ProjectWrapper({ Component, pageProps }) {
  const router = useRouter();

  // <Component/> returns the component it self
  // pageProps returns the props you use to in that component. It can be any data
  // router.route returns the route your component lives on. So in our case it will be '/' or '/projects/[id]'
  // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.query} />
    </AnimatePresence>
  );
}

export default ProjectWrapper;
