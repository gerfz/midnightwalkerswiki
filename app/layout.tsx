import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "The Midnight Walkers Wiki - Complete Guide",
  description: "Complete guide and wiki for The Midnight Walkers - PvPvE zombie extraction shooter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-[var(--border)] bg-[var(--card-bg)] mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-400 text-sm">
              <p>The Midnight Walkers Wiki - Community Guide</p>
              <p className="mt-2">Game by ONEWAY TICKET STUDIO | Early Access: November 2025</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
