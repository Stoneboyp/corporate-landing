import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeSection from "@/components/sections/HomeSection";

const HomePage = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return <HomeSection aboutRef={aboutRef} />;
};

export default HomePage;
