import { useEffect } from "react";
import { Observable } from "rxjs";

export const useDetectOutsideClick: (ref: any) => Observable<any> = (ref) =>
  new Observable((subscriber) => {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        const path = event.composedPath(); // Standardized method
        const isClickInside = path.includes(ref.current);

        if (ref.current && !isClickInside) {
          subscriber.next(event.target);
          subscriber.complete();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, subscriber]);
  });
