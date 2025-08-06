import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar"; // Import the new Sidebar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SYMI OS - Sadia K",
  description: "The complete infrastructure to scale your practice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800`}>
        <div className="flex h-screen text-white">
          {/* This is our persistent sidebar navigation */}
          <Sidebar />

          {/* This is the main content area that will change on each page */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
