import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import hero from "../assets/images/hero.svg";
import { coffees } from "../../data.json";
import { Card } from "../components/card";

export function Home() {
  return (
    <div className="max-w-6xl m-auto mt-28">
      <section className="flex items-center justify-between gap-28 h-[544px]">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-base-title font-extrabold font-primary leading-tight">
              Encontre o café perfeito
              <br />
              para qualquer hora do dia
            </h1>
            <p className="text-xl text-base-subtitle leading-tight">
              Com o Coffee Delivery você recebe seu café onde estiver, <br />a
              qualquer hora
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-5 gap-x-10">
            <div className="flex items-center gap-3">
              <ShoppingCart
                size={32}
                weight="fill"
                className="text-base-background bg-yellow-dark rounded-full p-2"
              />
              <span>Compra simples e segura</span>
            </div>

            <div className="flex items-center gap-3">
              <Package
                size={32}
                weight="fill"
                className="text-base-background bg-base-text rounded-full p-2"
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div className="flex items-center gap-3">
              <Timer
                size={32}
                weight="fill"
                className="text-base-background bg-yellow rounded-full p-2"
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div className="flex items-center gap-3">
              <Coffee
                size={32}
                weight="fill"
                className="text-base-background bg-purple rounded-full p-2"
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <img src={hero} alt="" className="-mr-14" />
      </section>
      <main className="max-w-6xl m-auto flex flex-col gap-14 mb-10">
        <h2 className="text-[32px] text-base-subtitle font-bold font-primary leading-tight">
          Nossos cafés
        </h2>
        <section className="grid grid-cols-4 gap-y-10 gap-x-8">
          {coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />;
          })}
        </section>
      </main>
      <footer className="text-xs text-center py-4">
        feito por{" "}
        <a
          href="https://www.instagram.com/gustavorezin/"
          target="_blank"
          className="font-primary hover:text-purple"
        >
          @gustavorezin
        </a>
      </footer>
    </div>
  );
}
