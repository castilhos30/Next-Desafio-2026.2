"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Item } from "@/components/item";
import { Pagamento } from "@/components/pagamento";

const initialItems = [
  { id: 1, title: "Título teste teste teste", price: 79.99, quantity: 1 },
  { id: 2, title: "Título teste teste teste", price: 70.00, quantity: 1 },
  { id: 3, title: "Título teste teste teste", price: 79.99, quantity: 1 },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);

  const handleIncrease = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  };

  const handleDecrease = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i));
  };

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D28189] via-[#E29896] to-[#EFAFA3] p-4 md:p-8 pt-24">
      <div className="lg:p-24 p-6">
        
        <h1 className="text-center font-belleza text-6xl mb-12">
          <span className="text-white">Seu </span>
          <span className="text-[#B1D0A3]">Carrinho</span>
        </h1>

        <div className="flex flex-col lg:flex-row w-full lg:justify-between gap-6 justify-center items-start">
          
          <div className="bg-[#F5F5F5]/20 backdrop-blur-md rounded-[2rem] p-8 w-full lg:flex-1 max-w-[600px]">
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#B57A82] flex items-center justify-center text-white">
                <ShoppingCart size={20} />
              </div>
              <h2 className="text-white font-montserrat text-xl font-bold">
                Seu carrinho
              </h2>
            </div>


            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <Item 
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  onIncrease={() => handleIncrease(item.id)}
                  onDecrease={() => handleDecrease(item.id)}
                />
              ))}
            </div>
            
          </div>

          <Pagamento items={items} total={total} />

        </div>
      </div>
    </div>
  );
}