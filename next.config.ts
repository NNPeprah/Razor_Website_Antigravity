import type { NextConfig } from "next";

const securityHeaders = [
  // Clickjacking protection — deny framing entirely (also enforced via CSP below)
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin for cross-site requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Deny sensitive browser features the site never uses
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // Disable the legacy XSS auditor (it is buggy; modern browsers use CSP)
  { key: "X-XSS-Protection", value: "0" },
  // Defense-in-depth against XSS: scripts/styles from this origin only,
  // images limited to this origin + Unsplash, no plugins, no form hijacking
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://images.unsplash.com",
      "font-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
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
