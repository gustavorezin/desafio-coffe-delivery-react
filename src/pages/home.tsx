import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from "@phosphor-icons/react";
import hero from "../assets/images/hero.svg";
import expressoTradicional from "../assets/images/coffees/expresso.png";

export function Home() {
  return (
    <>
      <section className="flex items-center justify-between gap-28 h-[544px] mt-28">
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
      <main>
        <h2 className="text-[32px] text-base-subtitle font-bold font-primary leading-tight mb-14">
          Nossos cafés
        </h2>
        <section className="grid grid-cols-4 gap-y-10 gap-x-9">
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
            <img src={expressoTradicional} alt="" className="-mt-5 mb-3" />
            <div className="flex items-center gap-1 mb-4">
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                TRADICIONAL
              </span>
              <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold">
                QUENTE
              </span>
            </div>
            <h3 className="font-primary text-base-subtitle text-xl mb-1">
              Expresso Tradicional
            </h3>
            <span className="text-base-label text-sm text-center mb-8">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-1 items-baseline">
                <span className="text-sm">R$</span>
                <span className="text-2xl font-primary font-extrabold">
                  9,90
                </span>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
                  <button>
                    <Minus size={14} className="text-purple" />
                  </button>
                  <span className="text-base-title">1</span>
                  <button>
                    <Plus size={14} className="text-purple" />
                  </button>
                </div>
                <button className="bg-purple-dark p-2 rounded-md">
                  <ShoppingCart
                    size={22}
                    weight="fill"
                    className="text-base-card"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
      </main>
    </>
  );
}
