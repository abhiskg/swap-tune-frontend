import { useEffect } from "react";

const useDocTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Swap Tune` || "Swap Tune";
  }, []);
};

export default useDocTitle;
