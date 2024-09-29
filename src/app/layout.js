
import "./globals.css";
import NavBar from "@/components/Navbar";

export const metadata = {
  title      : "My First Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}