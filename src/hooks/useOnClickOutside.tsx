/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: { target: unknown }) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
