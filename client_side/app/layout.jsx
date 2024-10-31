import { DM_Sans } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const DM = DM_Sans({ subsets: ["latin"] });
const space = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "HotelSage",
  description: "Hotel recommendation based on customer feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${DM.variable} ${space.variable}`}>
      <UserProvider>
        <body>
          <Nav />
          <div className="bg-[#ECE3D4] h-auto w-[100%]">{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}
