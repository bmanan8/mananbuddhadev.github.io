import React from "react";

export default function TOCLink({ href, children }) {
  return (
    <a href={href} className="block rounded-xl px-3 py-2 hover:bg-slate-50 text-slate-700">
      {children}
    </a>
  );
}
