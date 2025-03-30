import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "AspireAI - Job Success Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*   header */}
            <Header></Header>
            <main className="min-h-screen overflow-x-hidden">{children}</main>
            <Toaster richColors></Toaster>
            {/* fotter */}
            <fotter className="bg-muted/50 ">
              <div className="container  px-4 text-center text-gray-200 mx-auto">
                <p>Made with 💟 by NITESH-DK</p>
              </div>
            </fotter>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
