import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default async function Home() {
  return (
    <section
      className="grid place-items-center h-screen bg-center bg-contain"
      style={{
        backgroundImage: "url(/assets/images/header-bg5-1.png)",
      }}
    >
      <div className="flex flex-col items-center w-full gap-5">
        <span className=" px-3 py-2 font-semibold font-dm_sans rounded-lg bg-siteLemon/10 text-siteLemon capitalize">
          Top #1 SEO & Marketing Agency
        </span>
        <h2 className=" font-figTree text-4xl max-w-[500px] w-full text-center text-white font-bold">
          Amplify Your Brand with Targeted SEO & Marketing
        </h2>
        <p className="text-white font-dm_sans text-center max-w-[600px] w-full">
          Our team of seasoned experts is dedicated to maximizing your
          visibility, driving traffic, and ultimately boosting your bottom line
          social media.
        </p>
        <div className=" flex items-center gap-6">
          <Link
            href="/about"
            className="flex px-3 py-[9px] gap-3 items-center font-dm_sans capitalize rounded text-black border border-siteLemon hover:bg-siteLemon bg-siteLemon font-semibold"
          >
            <span className="">Get Started Now</span>
            <span className="">
              <LuArrowUpRight />
            </span>
          </Link>
          <Link
            href="/contact"
            className="flex px-3 py-[9px] gap-3 items-center font-dm_sans capitalize rounded text-siteLemon border border-siteLemon hover:bg-transparent bg-transparent font-semibold"
          >
            <span className="">Lets talk</span>
            <span className="">
              <LuArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
