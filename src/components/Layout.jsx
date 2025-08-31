import React from "react";
import SiteHeader from "./SiteHeader";

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        {children}
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Heroboost — Tous droits réservés.
      </footer>
    </div>
  );
}
