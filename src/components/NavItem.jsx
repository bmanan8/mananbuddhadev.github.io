import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 text-sm font-medium rounded-2xl transition-colors hover:bg-slate-100 ${isActive ? "text-slate-900" : "text-slate-600"}`
      }
      end
    >
      {label}
    </NavLink>
  );
}
