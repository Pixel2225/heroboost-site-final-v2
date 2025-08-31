import React from "react";
import SiteHeader from "./SiteHeader";

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Vidéo en arrière-plan */}
      <video autoPlay loop muted className="video-background">
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      <div className="app-container flex-1 flex flex-col">
        <SiteHeader />
        <main className="flex-1 container py-8">
          {children}
        </main>
        <footer className="border-t border-white/10 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Heroboost — Tous droits réservés.
        </footer>
      </div>
    </div>
  );
}
