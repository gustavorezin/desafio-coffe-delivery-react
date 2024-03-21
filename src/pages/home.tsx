/* import heroBg from "../assets/images/hero-bg.svg"; */
import hero from "../assets/images/hero.svg";

export function Home() {
  return (
    <div className="relative">
      <div className="bg-purple-200 flex items-center justify-between gap-28 h-[544px]">
        <div>
          <h1 className="text-5xl font-bold font-primary">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
        </div>
        <img src={hero} alt="" />
      </div>
      {/* <img
        src={heroBg}
        alt=""
        className="absolute top-0 left-0 max-h-[544px] w-screen object-cover"
      /> */}
    </div>
  );
}
