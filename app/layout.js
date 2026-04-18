import "./globals.css";
import { AppStateProvider } from "../context/AppStateProvider";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body className="bg-slate-50 text-slate-900">
        <AppStateProvider>
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
        </AppStateProvider>
      </body>
    </html>
  );
}