"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos, para escalonar elementos irmãos. */
  delay?: number;
}

/**
 * Entrada sutil ao entrar na viewport. Com prefers-reduced-motion ativo,
 * renderiza o conteúdo estático, sem animação.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
