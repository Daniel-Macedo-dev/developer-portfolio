import type { NextConfig } from "next";

/**
 * Headers de segurança configurados no app; HSTS é fornecido pela
 * plataforma (Vercel). CSP estrita foi deliberadamente omitida: exigiria
 * nonces nos scripts do runtime do Next sem ganho proporcional em um
 * site estático sem entrada de usuário.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
