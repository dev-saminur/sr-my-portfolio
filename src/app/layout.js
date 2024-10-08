import "./globals.css";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  weight: ["300", "400", "600", "700"], // define the font weights you need
  style: ["normal", "italic"], // normal or italic
  variable: "--font-open-sans", // Optional: CSS variable for the font
});
export const metadata = {
  title: "SR Portfolio",
  description: "Created by SR RaKiB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
