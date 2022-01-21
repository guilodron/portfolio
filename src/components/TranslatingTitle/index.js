import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import { Container } from "./styles";

const TranslatingTitle = () => {
  const { scrollYProgress } = useViewportScroll();
  const offset = useTransform(scrollYProgress, [0, 1], [-100, -500]);
  const offset2 = useTransform(scrollYProgress, [0, 1], [-500, 100]);
  return (
    <Container>
      <motion.div
        style={{
          translateX: offset,
        }}
      >
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
      </motion.div>
      <motion.div
        style={{
          translateX: offset2,
        }}
      >
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
      </motion.div>
    </Container>
  );
};

export default TranslatingTitle;
