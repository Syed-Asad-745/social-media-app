import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";

export const metadata: Metadata = {
  title: "My ChatMAX",
  description: "Created using NextJS",
  icons: {
    icon: "/assets/Logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <StoreProvider>
      <html lang="en" className={` h-full antialiased`}>
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </StoreProvider>
  );
}
