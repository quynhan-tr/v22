export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      className={`arrow${down ? " arrow-down" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7m0-10v.01M12 17v-7m0 3c.7-2 4-2.2 4 1v3" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 21v-3.9c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.8 6c.1-.3.5-1.6-.1-3 0 0-1-.3-3.2 1.2a11.2 11.2 0 0 0-6 0C7.3 2.7 6.3 3 6.3 3c-.6 1.4-.2 2.7-.1 3A4.6 4.6 0 0 0 5 9.1c0 4.6 2.7 5.7 5.5 6-.5.5-.6 1-.5 2V21" />
      <path d="M10 19c-2.5.8-3.5-1-4-1.5" />
    </svg>
  );
}
