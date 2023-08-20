"use client";

import { CardFilter } from "@/app/components/CardFilter";
import { Button } from "@/app/components/Form/Button";
import { Input } from "@/app/components/Form/Input";
import { InputRange } from "@/app/components/Form/InputRange";
import { categories } from "@/app/utils/categories";
import { fetchWrapper } from "@/app/utils/fetchWrapper";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterEvents() {
  const searchParams = useSearchParams();
  const [events, setEvents] = useState([])

  const getEvents = async (data: any) => {
    const response = await fetchWrapper(
      `/events/filter?` +
        new URLSearchParams({
          name: data.name,
        }),
      { method: "GET" }
    )
    setEvents(response)
  }

  useEffect(() => {
    if (searchParams.get("q")) {
      getEvents({ name: searchParams.get("q") });
    }
  }, [searchParams.get("q")]);
  return (
    <div className="container m-auto">
      <div className="grid sm:grid-cols-2 gap-1 grid-cols-1 p-8">
        <div className="mb-4 pr-6 border-r-2 border-[#61d9de]">
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">Filtrar Eventos</p>
            <p className="text-blue text-base font-light">
              Busque o evento que é a sua cara de maneira mais detalhada!
            </p>
          </div>
          <Input
            title="Nome"
            placeholder="Insira o nome do seu evento"
            type="text"
          />
          <Input
            title="Localização"
            placeholder="Insira o endereço do seu evento"
            type="text"
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              title="Data"
              placeholder="Insira a data do seu evento"
              type="date"
            />
            <div className="text-blue">
              <label htmlFor="" className="text-blue">
                {" "}
                Categoria
              </label>
              <select
                name=""
                id=""
                className="w-full px-6 py-[5] bg-white rounded-lg border border-teal-400"
              >
                <option value="">Selecione</option>
                {categories.map((category, index) => (
                  <>
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  </>
                ))}
              </select>
            </div>
          </div>

          <InputRange title="Distância" />
          <InputRange title="Valor" />
          <div className="grid grid-cols-2 gap-7 w-2/3 m-auto">
            <Button
              title="Limpar"
              className="text-blue bg-white border border-1"
            />
            <Button title="Buscar" />
          </div>
        </div>
        <div className="mb-4 ml-4">
          <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
          <p className="text-blue text-base font-light">
            Crie o seu próprio evento da maneira que você preferir!
          </p>
          {events.map((event, index) => {

            return <CardFilter event={event} key={index}/>
          })}
          <CardFilter />
          <CardFilter />
          <CardFilter />
        </div>
      </div>
    </div>
  );
}
