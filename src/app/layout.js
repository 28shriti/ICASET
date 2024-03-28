import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICASET-2024",
  description: "International Conference on Application of Science, Engineering and Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-scrollbar">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
