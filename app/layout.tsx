import type { Metadata } from "next";
import "./globals.css";
import ScrollToTopButton from "./components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import TopLoader from "./components/top-loader";

export const metadata: Metadata = {
  title: {
    default: "All About AP",
    template: "%s | All About AP",
  },
  description: "Anthony Philip is a forward-thinking web developer who builds responsive, high-performance websites using the latest tech stacks. Passionate about innovation, he stays up-to-date with current trends to deliver cutting-edge digital experiences tailored for modern users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
          className={`antialiased`}
        >
        <TopLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
          <main>
            {children}
            <ScrollToTopButton />
          </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
