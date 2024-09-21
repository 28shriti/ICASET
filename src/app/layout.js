import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "ACT-2025",
        template: '%s - ACT-2025',
    },
    description: " International Conference on Advances in Computing, Control & Telecommunication Technologies - 2025 (Phase - I)",

    openGraph: {
        title: "ACT-2025",
        description: "International Conference on Advances in Computing, Control & Telecommunication Technologies - 2025 (Phase - I)",
        url: "https://ycce-act.com/",
        type: "website",
        images: [
            {
                url: "https://ycce-act.com/images/act_logo.png",
            },
        ],
    },

};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="no-scrollbar">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
