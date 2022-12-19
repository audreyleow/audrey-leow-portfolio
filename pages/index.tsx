import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import { getSortedPostsData } from "../lib/posts";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="bottom">
        <div className="bottom-text">
          Prefer dark mode? Just flip the toggle!
        </div>
        <ThemeToggle />
      </div>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };
