import { useEffect } from "react";

const useDocTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Ultimate Fit` || "Ultimate Fit";
  }, []);
};

export default useDocTitle;
