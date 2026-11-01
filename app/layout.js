
import "./globals.css";
import { LinkProvider } from "../context/LinkContext";

export const metadata = {
  title: "LinkVault",
  description: "Your personal knowledge space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LinkProvider>{children}</LinkProvider>
      </body>
    </html>
  );
}
