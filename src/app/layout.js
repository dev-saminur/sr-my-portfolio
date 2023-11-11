import "./globals.css";

export const metadata = {
  title: "SR Portfolio",
  description: "Created by SR RaKiB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-primaryFont">{children}</body>
    </html>
  );
}
