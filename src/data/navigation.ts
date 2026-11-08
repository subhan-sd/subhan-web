export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "AI Journey", href: "/#ai-journey" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/subhan-sd",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/subhan-singandaru-4b31b0214/",
    icon: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:subhan.singandaru2@gmail.com",
    icon: "mail",
  },
];
