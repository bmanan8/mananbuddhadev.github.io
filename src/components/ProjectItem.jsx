import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectItem({ title, tags = [] }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <ArrowRight className="h-4 w-4 text-slate-400" />
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Badge key={t} variant="outline" className="rounded-xl">
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}