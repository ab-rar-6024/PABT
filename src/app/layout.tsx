import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import SplashScreen from "@/components/SplashScreen";
import NavigationLoader from "@/components/NavigationLoader";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "PABT Foundation | Planting a Billion Trees & Circular Communities",
  description: "Indian NGO dedicated to environmental sustainability through native forest restoration (Miyawaki), waste circularity, clean energy micro-grids, enterprise ESG consulting, and green school networks.",
  keywords: "PABT, Plant A Billion Trees, NGO India, Reforestation, Circular Economy, Green Schools, ESG Consulting, Solar Ladakh, Miyawaki Forest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="bg-background text-foreground flex flex-col min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <NavigationLoader />
          <SplashScreen />
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
