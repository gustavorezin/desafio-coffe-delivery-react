import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { TextInput } from "../components/form/text-input";
import { RadioInput } from "../components/form/radio-input";

export function Cart() {
  return (
    <div className="flex justify-between max-w-6xl m-auto mt-28">
      <div>
        <h1 className="font-primary text-base-subtitle text-xl mb-4">
          Complete seu pedido
        </h1>
        <div className="flex flex-col bg-base-card rounded-md p-10 gap-8 mb-3">
          <div className="flex gap-2">
            <MapPinLine size={22} className="text-yellow-dark" />
            <div>
              <h2 className="text-base-subtitle">Endereço de entrega</h2>
              <p className="text-base-text text-sm">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4 w-[560px]">
            <TextInput placeholder="CEP" />
            <TextInput placeholder="Rua" />
            <TextInput placeholder="Número" />
            <TextInput placeholder="Complemento" optional />
            <TextInput placeholder="Bairro" />
            <TextInput placeholder="Cidade" />
            <TextInput placeholder="UF" />
          </div>
        </div>
        <div className="flex flex-col bg-base-card rounded-md p-10 gap-8">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-purple" />
            <div>
              <h2 className="text-base-subtitle">Pagamento</h2>
              <p className="text-base-text text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <RadioInput isSelected value="credit">
              <CreditCard size={16} className="text-purple" />
              <span>Cartão de crédito</span>
            </RadioInput>
            <RadioInput isSelected={false} value="debit">
              <Bank size={16} className="text-purple" />
              <span>Cartão de crédito</span>
            </RadioInput>
            <RadioInput isSelected={false} value="cash">
              <Money size={16} className="text-purple" />
              <span>Cartão de crédito</span>
            </RadioInput>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-primary text-base-subtitle text-xl mb-4">
          Cafés selecionados
        </h1>
      </div>
    </div>
  );
}
