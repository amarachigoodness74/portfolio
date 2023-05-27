import "./styles/globals.css";
import { ThemeProvider } from "./components/themeProvider";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amarachi Goodness",
  description: "This is my portfolio website where I showcase my projects and contents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="max-w-[700px] m-auto flex flex-col items-center justify-between min-h-screen py-14 px-8">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
