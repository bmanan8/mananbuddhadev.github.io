import React from "react";
import { ExternalLink } from "lucide-react";

export default function ArticleLink({ title, href }) {
  return (
    <a className="group flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50" href={href} target="_blank" rel="noreferrer">
      <span className="text-slate-700">{title}</span>
      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
    </a>
  );
}
