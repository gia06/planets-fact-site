import { useCallback, useEffect, useState } from "react";

function useElementWidth(
  option: string,
  myRef: React.RefObject<HTMLImageElement>
) {
  const [width, setWidth] = useState<number | null>(null);

  const getWidth = (): number =>
    myRef.current ? myRef.current.offsetWidth : 0;

  const handleResize = useCallback(() => {
    setWidth(getWidth());
    window.addEventListener("resize", handleResize);
  }, [myRef]);

  // const handleResize = () => setWidth(getDimensions());

  useEffect(() => {
    option === "surface" ? handleResize() : null;

    return () => {
      setWidth(null);
      window.removeEventListener("resize", handleResize);
    };
    // () => {
    //   setWidth(getDimensions());
    // };

    // if (myRef.current) {
    //   setDimensions(getDimensions());
    // }

    // window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);

    // };
  }, [option]);

  console.log(width);

  return { width };
}

export default useElementWidth;
