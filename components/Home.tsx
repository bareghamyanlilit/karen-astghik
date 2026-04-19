"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { anim, calendar, date, txt1, txt2 } from "@/data/data";
import { motion } from "framer-motion";
import AttendanceGuests from "./RSVP";
import { Program } from "./Program";
import { Footer } from "./footer";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <div className="FontArmDecorativeU flex items-center justify-center h-screen text-3xl">
        Loading...
      </div>
    );
  }
  return (
    <div className="text-center overflow-hidden  FontArmDecorativeU ">
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-100 p-1  rounded-2xl bg-[#818181d3]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain invert-100"
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>
      <div className="relative h-screen overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative h-screen overflow-hidden">
          {/* VIDEO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* CONTENT */}
          <div className="relative text-[#580000] tracking-widest z-10 FontArmAllegroU tracking-0 flex flex-col pt-20 p-7">
            <div className="flex items-center">
              <h2 className="text-9xl">Կ</h2>
              <p className="text-4xl ml-5">արեն</p>
            </div>

            <div className="flex items-end -mt-10 justify-end">
              <h2 className="text-9xl">Ա</h2>
              <p className="text-4xl mb-10 -ml-8">ստղիկ</p>
            </div>
            {/* DATE */}
            <h1 className="mt-[30vh] FontArmDecorativeU text-5xl tracking-widest">
              {date}
            </h1>
          </div>
        </div>
      </div>

      <div className="FontArmDecorativeU px-7 ">
        <div className="py-15 ">
          <motion.h3 {...anim} className=" relative text-[32px]">
            ՍԻՐԵԼԻՆԵՐ
            <p className=" absolute -z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-[#5800001A]">
              ՍԻՐԵԼԻՆԵՐ
            </p>
          </motion.h3>
          <motion.p {...anim} className="  text-xl mt-10">
            {txt1}
          </motion.p>
        </div>
      </div>

      <div className="px-5">
        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full h-60 object-cover rounded-xl mb-20 "
        />
      </div>

      <div className=" w-full text-[#580000] ">
        <div className="whitespace-nowrap animate-marquee-2 text-4xl -rotate-2  -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
        <div className="whitespace-nowrap animate-marquee text-4xl mb-10 rotate-2  -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
        <div className="whitespace-nowrap animate-marquee-2 text-4xl mt-15  -rotate-2 -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
        <div className="whitespace-nowrap animate-marquee text-4xl mb-10 rotate-2  -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
        <div className="whitespace-nowrap animate-marquee-2 text-4xl mt-15 -rotate-2 -translate-x-full">
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր Սեր
          Սեր Սեր Սեր
        </div>
      </div>

      <Image
        src="/img3.jpg"
        alt="icon1"
        width={500}
        height={500}
        className="w-full object-cover my-15 mb-30 "
      />

      {/* jamnakacuyc */}
      <div className="relative my-30 ">
        <Image
          src="/icon1.png"
          alt="icon1"
          width={500}
          height={500}
          className="-z-1 w-30  top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/4  absolute  "
        />
        <Image
          src="/icon4.png"
          alt="icon1"
          width={500}
          height={500}
          className="-top-10 absolute -z-1 w-full  "
        />
        <div className="FontArmDecorativeU flex justify-around ml-4 -rotate-7">
          <div className="flex flex-col gap-10">
            <p className="text-sm">{calendar[0][0]}</p>
            <p className="text-4xl">{calendar[1][0]}</p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-sm">{calendar[0][1]}</p>
            <p className="text-4xl">{calendar[1][1]}</p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-sm">{calendar[0][2]}</p>
            <p className="text-4xl">{calendar[1][2]}</p>
          </div>
        </div>
      </div>
      <Program/>

      <div className="  relative  h-140 mb-15">
        <div className=" absolute top-15  bg-[#F4F4F4] w-full h-140 -z-1"></div>
        <Image
          src="/img4.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-75  absolute z-5 h-75 object-cover rounded-xl  left-1/2 -translate-x-1/2  top-[60%] -translate-y-1/2   "
        />
        <p className="FontAkronim text-[300px] tracking-[30%] text-[#580000] ">
          LO
        </p>
        <p className="FontAkronim text-[300px] tracking-[30%] text-[#580000] -mt-45 ">
          VE
        </p>
      </div>

      <motion.p
        {...anim}
        className=" relative  px-7 py-20 text-2xl text-center"
      >
        {txt2}

        <span className="FontArmAllegroU w-[200%] leading-20  absolute -z-1 text-5xl top-0 left-1/2 -translate-x-1/2 text-[#5800000D]">
          Մասնակցության մասին Խնդրում ենք Տեղեկացնել մինչև <br /> Ապրիլի 10-ը
        </span>
      </motion.p>

      <TimeBox />

      <div>
        <motion.h3 {...anim} className=" relative text-[32px] ">
          Dress Code
          <p className=" absolute w-max mx-auto -z-1 text-5xl top-2 left-1/2 -translate-x-1/2 text-[#5800001A]">
            Dress Code
          </p>
        </motion.h3>

        <Image
          src="/img5.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-[90%] mx-auto object-cover my-15 rounded-[150px] "
        />

        <p className="text-2xl tracking-widest mb-15">
          Խնդրում ենք <br /> հարսանիքի օրը <br /> խուսափել <br />
          սպիտակ հագուստ <br /> կրելուց
          <br />
          <br />
          Մնացած բոլոր
          <br /> երանգները <br />
          սազում են Ձեզ <br />
          առավել քան երբևէ
        </p>
      </div>

      {/* RSVP */}
      <AttendanceGuests />
        <Footer />
    </div>
  );
}
