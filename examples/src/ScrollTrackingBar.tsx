import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Progress = styled.div<{ color?: string; scroll?: string }>`
  position: fixed;
  background: linear-gradient(
    to right,
    rgba(250, 224, 66, 0.8) ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 4px;
  z-index: 3;
`;

export const ScrollTrackingProgressBar: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    let requestId: number;

    calculateScrollDistance();

    const handleScroll = () => {
      requestId = requestAnimationFrame(() => {
        // Calculates the scroll distance
        calculateScrollDistance();
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(requestId);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = (scrollTop / totalDocScrollLength) * 100;

    setScroll(scrollPostion);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  return <Progress scroll={`${scroll}%`} />;
};

export default ScrollTrackingProgressBar;
