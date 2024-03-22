import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";

interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CardProps {
  coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <div className="flex flex-col items-center w-64 px-6 pb-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
      <img src={coffee.image} alt="" className="-mt-5 mb-3" />
      <div className="flex items-center gap-1 mb-4">
        {coffee.tags.map((tag) => {
          return (
            <span className="px-2 py-1 rounded-[100px] bg-yellow-light text-yellow-dark text-[10px] font-bold uppercase">
              {tag}
            </span>
          );
        })}
      </div>
      <h3 className="font-primary text-base-subtitle text-xl mb-1">
        {coffee.title}
      </h3>
      <span className="text-base-label text-sm text-center mb-8 min-h-[60px] max-h-[60px] line-clamp-3">
        {coffee.description}
      </span>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1 items-baseline">
          <span className="text-sm">R$</span>
          <span className="text-2xl font-primary font-extrabold">
            {coffee.price.toFixed(2)}
          </span>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
            <button onClick={decrementQuantity}>
              <Minus size={14} weight="bold" className="text-purple" />
            </button>
            <span className="text-base-title">{quantity}</span>
            <button onClick={incrementQuantity}>
              <Plus size={14} weight="bold" className="text-purple" />
            </button>
          </div>
          <button className="bg-purple-dark p-2 rounded-md">
            <ShoppingCart size={22} weight="fill" className="text-base-card" />
          </button>
        </div>
      </div>
    </div>
  );
}
