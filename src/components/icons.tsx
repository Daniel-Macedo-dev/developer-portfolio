import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function baseProps(props: IconProps): IconProps {
  return {
    width: 20,
    height: 20,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    ...props,
  };
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)} fill="currentColor" stroke="none">
      <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12c0 4.53 2.94 8.37 7.01 9.73.51.09.7-.22.7-.5l-.01-1.92c-2.85.62-3.45-1.21-3.45-1.21-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.11 2.98.85.09-.66.36-1.11.65-1.37-2.28-.26-4.67-1.14-4.67-5.07 0-1.12.4-2.03 1.06-2.75-.11-.26-.46-1.3.1-2.72 0 0 .86-.28 2.82 1.05a9.8 9.8 0 0 1 5.14 0c1.96-1.33 2.82-1.05 2.82-1.05.56 1.42.21 2.46.1 2.72.66.72 1.06 1.63 1.06 2.75 0 3.94-2.4 4.8-4.68 5.06.37.31.69.94.69 1.9l-.01 2.82c0 .28.19.6.7.5A10.26 10.26 0 0 0 22.25 12c0-5.66-4.59-10.25-10.25-10.25Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)} fill="currentColor" stroke="none">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}
