import "./globals.css";
import StoreProvider from "./  StoreProvider";
import { Hind_Siliguri } from "next/font/google";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${hindSiliguri.className} antialiased`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
