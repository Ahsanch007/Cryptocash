import { Geist, Geist_Mono, Poppins } from "next/font/google"; // Import Poppins along with other fonts
import "./globals.css";

// Import fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Specify the weights you want to include
});

// Metadata for your app
export const metadata = {
  title: "Master of Trivia",
  description: "Free online trivia quizes - Master of Trivia",
};

// Define the type for RootLayout props
interface RootLayoutProps {
  children: React.ReactNode;
}

// Root layout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
