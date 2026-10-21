
import "./globals.css";

export const metadata = {
  title: "SMART DEAL - Online Shopping",
  description: "Shop smart with SMART DEAL. Products at ₹399."
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
