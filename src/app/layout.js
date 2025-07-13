import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import I18nProvider from "@/components/I18nProvider";
import { Noto_Sans_Bengali } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "pms-project",
    description: "A modern pms-project with Tailwind CSS 4",
};

const notoSansBengali = Noto_Sans_Bengali({
    subsets: ["bengali"],
    variable: "--font-noto-bengali",
    display: "swap",
    weight: ["400", "700"],
});

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={notoSansBengali.variable}
        >
            <body>
                <I18nProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <Navbar />
                        {/*  <Header/>*/}
                        <AntdRegistry>{children}</AntdRegistry>
                    </ThemeProvider>
                </I18nProvider>
            </body>
        </html>
    );
}
