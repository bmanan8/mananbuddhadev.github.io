import React from "react";

export default function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}