import { anim, program } from "@/data/data";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

export function Program() {
  return (
    <section className=" FontArmDecorativeU text-[#580000] px-6 py-5">
      <motion.h2 {...anim} className="relative z-0 text-center text-4xl mb-10 ">
        Ժամանակացույց
        <p className=" absolute w-max -z-1 text-5xl -top-1 left-1/2 -translate-x-1/2 text-[#1b1b1b13] ">
          Ժամանակացույց
        </p>
      </motion.h2>

      {program.map((item:any, i:any) => (
        <div className=" bg-cover bg-no-repeat  bg-center" key={i}>
          <ProgramItem {...item} />
        </div>
      ))}
    </section>
  );
}

const getImage = (title:any) => {
  if (title === "Պսակադրություն") return "/ekexeci.jpg";
  if (title === "Հարսանյաց հանդիսություն") return "/restoran.jpg";
  return null;
};

const ProgramItem = ({ time, title, address }:any) => {
  const img = getImage(title);

  return (
    <div className="my-8 flex flex-col items-center text-xl">
      <motion.h3 {...anim}>{title}</motion.h3>
      <motion.p {...anim} className="text-sm opacity-80">
        {address}
      </motion.p>
      <motion.p {...anim} className="">
        {time}
      </motion.p>

      {img && <img src={img} className="my-4 max-w-full rounded" />}

      <motion.a
        {...anim}
        href={`https://www.google.com/maps/search/${address}`}
        target="_blank"
        className="inline-flex items-center gap-2 px-4 py-1.5 text-sm"
      >
        <FaMapMarkedAlt />
        Ինչպես հասնել
      </motion.a>

      {title !== "Հարսանյաց հանդիսություն" && (
        <img
          src="/icon00.png"
          className=" w-20 mt-5"
        />
      )}
    </div>
  );
};
