"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos, para escalonar elementos irmãos. */
  delay?: number;
}

/**
 * Entrada sutil ao entrar na viewport.
 *
 * reducedMotion="user" delega a preferência ao Motion: com
 * prefers-reduced-motion ativo o deslocamento é desativado e resta um
 * fade curto. Importante: não renderizar um branch estático separado —
 * o SSR emite opacity:0 inline e, sem o Motion gerenciando o elemento
 * na hidratação, o conteúdo ficaria invisível permanentemente.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.div
          className={className}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{ duration: 0.45, delay, ease: "easeOut" }}
        >
          {children}
        </m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
