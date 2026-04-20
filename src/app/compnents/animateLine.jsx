"use client";
import React from "react";
import { motion } from "framer-motion";

const MovingBar = ({ delay }) => {
  return (
    <motion.div
      initial={{ y: "-120px" }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: delay,
        repeat: Infinity,
        repeatDelay: 13, // total cycle gap
      }}
      className="absolute top-0 left-0 w-full h-20 bg-linear-to-t from-white to-gray-700 "
    />
  );
};

const AnimateLine = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <div className="mx-auto flex h-screen max-w-7xl justify-between px-4 sm:px-6">

        {/* LINE 1 */}
        <div className="relative h-full w-px bg-white/20 overflow-hidden">
          <MovingBar delay={0} />
        </div>

        {/* LINE 2 */}
        <div className="relative h-full w-px bg-white/20 overflow-hidden">
          <MovingBar delay={5} />
        </div>

        {/* LINE 3 */}
        <div className="relative h-full w-px bg-white/20 overflow-hidden">
          <MovingBar delay={10} />
        </div>

      </div>
    </div>
  );
};

export default AnimateLine;