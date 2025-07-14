import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import I18nProvider from "@/components/I18nProvider";
import { Noto_Sans_Bengali, Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Pharmacy Management System",
    description:
        "A modern Pharmacy Management System solution for efficient business operations",
    keywords:
        "pharmacy management, inventory management, medical store, pharmacy software",
};

// Load Bengali font
const notoSansBengali = Noto_Sans_Bengali({
    subsets: ["bengali"],
    variable: "--font-noto-bengali",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

// Load Inter font for Latin text
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${notoSansBengali.variable} ${inter.variable}`}
        >
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <I18nProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                    >
                        <Navbar />
                        <AntdRegistry>{children}</AntdRegistry>
                    </ThemeProvider>
                </I18nProvider>
            </body>
        </html>
    );
}
