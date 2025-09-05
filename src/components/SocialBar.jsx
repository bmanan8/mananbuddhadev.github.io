import React from "react";

const icons = {
  location: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5L4 8V6l8 5 8-5Z"/>
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="currentColor" d="M22 5.8c-.6.3-1.3.5-2 .6.7-.4 1.2-1.1 1.5-1.8-.7.4-1.5.7-2.3.9C18.6 4.6 17.6 4 16.4 4c-2.2 0-3.9 2-3.4 4.2-3.2-.2-6-1.7-7.9-4.1C4 5.2 4.4 7 5.8 7.9c-.6 0-1.1-.2-1.6-.4 0 1.6 1.1 3 2.7 3.3-.5.1-1 .2-1.5.1.4 1.3 1.6 2.2 3 2.2-1.1.9-2.6 1.4-4.1 1.4-.3 0-.7 0-1-.1 1.5 1 3.3 1.6 5.2 1.6 6.2 0 9.7-5.2 9.5-9.9.7-.5 1.3-1.1 1.8-1.8Z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.3 17.3V9.9H6V17.3h2.3m-1.2-8.4c.8 0 1.3-.5 1.3-1.2 0-.8-.5-1.3-1.2-1.3S6.1 6.9 6.1 7.7c0 .7.5 1.2 1.1 1.2m6.8 8.4h2.3v-3.9c0-2.1-1.1-3.1-2.6-3.1-1.2 0-1.7.7-2 1.2V9.9H10v7.4h2.3v-3.7c0-1 .2-1.9 1.4-1.9s1.3 1 1.3 2v3.6Z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.9.1-.6.3-1.1.5-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.4.1 2.6.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.3.3.6.8.6 1.6v2.3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>
    </svg>
  ),
  scholar: (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="currentColor" d="M12 3 1 9l11 6 9-4.9V17h2V9M3.2 12.2 12 17l4.8-2.6V15L12 18 2 12.5z"/>
    </svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 opacity-70">
      <path fill="currentColor" d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>
    </svg>
  ),
};

export default function SocialLinks({ location, links = [] }) {
  return (
    <ul className="space-y-3 text-slate-800">
      {links.map((item) => {
        const isEmail = item.type === "email";
        const href = isEmail ? `mailto:${item.href}` : item.href;
        const isExternal = !isEmail;
        const icon =
          item.type === "email" ? icons.email :
          item.type === "twitter" ? icons.twitter :
          item.type === "linkedin" ? icons.linkedin :
          item.type === "github" ? icons.github :
          item.type === "scholar" ? icons.scholar :
          icons.external;
        return (
          <li key={item.label}>
            <a
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-md px-1 py-1 text-sm transition-colors hover:text-blue-600"
            >
              <span className="text-slate-700">{icon}</span>
              <span className="flex-1">{item.label}</span>
              {isExternal ? <span className="opacity-0 group-hover:opacity-100">{icons.external}</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
