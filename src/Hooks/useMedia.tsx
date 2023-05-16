import { useEffect, useState } from "react";

const useMedia = (media: any) => {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};
export default useMedia;
