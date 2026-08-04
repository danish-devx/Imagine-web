import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterSection() {
  const socialLinks = [
    { icon: faFacebookF, href: "#", label: "Facebook" },
    { icon: faInstagram, href: "#", label: "Instagram" },
    { icon: faXTwitter, href: "#", label: "Twitter" },
    { icon: faLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: faPinterestP, href: "#", label: "Pinterest" },
  ];

  return (
    <footer className="bg-white text-slate-600 py-10 px-6 border-t border-slate-200">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-y-6 sm:flex-row sm:gap-y-0">
        <div className="flex items-center gap-x-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:bg-sky-600 hover:text-white hover:scale-110 shadow-xs"
            >
              <FontAwesomeIcon icon={item.icon} className="text-base" />
            </a>
          ))}
        </div>

        <div className="text-center sm:text-right text-xs sm:text-sm text-slate-500">
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 leading-relaxed">
            <span>Copyright © 2026 All rights reserved</span>
            <span className="hidden sm:inline">|</span>
            <span>This template is made with</span>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-500 text-sm animate-pulse mx-0.5"
            />
            <span>by</span>
            <a
              href="https://github.com/danish-devx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-600 hover:text-sky-500 hover:underline transition-colors"
            >
              Danish-devx
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
