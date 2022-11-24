import Error from "next/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isRender404, setIsRender404] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (router.asPath === "/projects/swe-project") {
        router.replace(
          "/projects/?openModal=swe-project",
          "/projects/swe-project"
        );
      } else {
        setIsRender404(true);
      }
    }
  }, [router]);

  if (!isRender404) {
    return null;
  }

  return <Error statusCode={404} />;
}
