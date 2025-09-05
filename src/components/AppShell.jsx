import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FileDown } from "lucide-react";
import Container from "./Container";
import NavItem from "./NavItem";
import SocialBar from "./SocialBar";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/data/profile";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <Container>
          <nav className="flex items-center justify-between py-3">
            <Link to="/" className="font-semibold tracking-tight text-lg">
              {PROFILE.name}
            </Link>
            <div className="flex items-center gap-1">
              <NavItem to="/" label="Home" />
              <NavItem to="/resume" label="Resume" />
              <a href={PROFILE.resumePdfUrl} className="ml-2 hidden sm:inline-block" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm" className="rounded-2xl">
                  <FileDown className="mr-2 h-4 w-4" /> PDF
                </Button>
              </a>
            </div>
          </nav>
        </Container>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-slate-200 py-10">
        <Container>
          <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
            <SocialBar compact />
          </div>
        </Container>
      </footer>
    </div>
  );
}
