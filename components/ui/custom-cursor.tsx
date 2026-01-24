"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for instant dot movement
    const dotX = useMotionValue(-100);
    const dotY = useMotionValue(-100);

    // Spring values for trailing outline movement
    const springConfig = { damping: 25, stiffness: 250 };
    const outlineX = useSpring(useMotionValue(-100), springConfig);
    const outlineY = useSpring(useMotionValue(-100), springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            dotX.set(e.clientX);
            dotY.set(e.clientY);
            outlineX.set(e.clientX);
            outlineY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button' ||
                target.classList.contains('cursor-pointer');

            setIsHovered(!!isInteractive);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [dotX, dotY, outlineX, outlineY]);

    return (
        <>
            {/* Central Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00f3ff] rounded-full pointer-events-none z-[9999]"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Trailing Outline */}
            <motion.div
                className="fixed top-0 left-0 border border-white/40 rounded-full pointer-events-none z-[9998]"
                animate={{
                    width: isHovered ? 45 : 28,
                    height: isHovered ? 45 : 28,
                    borderColor: isHovered ? "rgba(0, 243, 255, 1)" : "rgba(255, 255, 255, 0.4)",
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0)",
                }}
                style={{
                    x: outlineX,
                    y: outlineY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
        </>
    );
};
