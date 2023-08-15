import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { categories } from "@/app/utils/categories";

export default function CreateEvent() {
  return (
    <div className="container m-auto">
      <div className="grid sm:grid-cols-2 gap-1 grid-cols-1 p-8">
        <div className="mb-4 pr-6 border-r-2 border-[#61d9de]">
          <div className="mb-4">
            <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
            <p className="text-blue text-base font-light">
              Crie o seu próprio evento da maneira que você preferir!
            </p>
          </div>
          <Input
            title="Título"
            placeholder="Insira o nome do seu evento"
            type="text"
          />
          <Input
            title="Endereço"
            placeholder="Insira o endereço do seu evento"
            type="text"
          />
          <Input
            title="Cupom"
            placeholder="Insira o cupom do seu evento"
            type="text"
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              title="Data"
              placeholder="Insira a data do seu evento"
              type="date"
            />
            <Input
              title="Horário"
              placeholder="Insira o nome do seu evento"
              type="number"
            />
          </div>
          <p className="text-blue text-base font-medium mo-4">
            Crie seu proprio evento de maneira que...
          </p>
          <div className="grid grid-cols-5 gap-2">
            {categories.map((category) => (
              <>
                <div className="text-blue">
                  <input type="checkbox" className="mr-2" />
                  <label htmlFor="">{category.name}</label>
                </div>
              </>
            ))}
          </div>
          <div className="mt4">
            <p className="text-base font-medium text-blue">Valor</p>
            <p className="text-neutral-500 text-sm font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nostrum, in quis inventore laboriosam quam? Soluta nihil, asperiores culpa expedita repudiandae laudantium molestias error ad rerum architecto alias quidem aliquam!
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2">
          <Input
                title="Preço"
                placeholder="R$00,00"
                type="text"
                className="col-span-2"
          />
          <Input
                title="Setor"
                placeholder="Insira o nome do setor"
                type="text"
                className="col-span-3"
          />    
          </div>
          <Input
                title="Descrição"
                placeholder="Insira o nome do setor"
                type="textarea"
                className="col-span-3"
          />
        </div>
        <div className="mb-4 ml-4">
          <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
          <p className="text-blue text-base font-light">
            Crie o seu próprio evento da maneira que você preferir!
          </p>
          <div className="mb-4">
            <p className="text-blue text-base font-medium">Banner</p>
            <p className="text-neutral-500 text-sm font-light">
              Insira um banner no fomato de 336x280
            </p>
            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
              <InputFile />  
            </div>            
          </div>

          <div className="mb-4">
            <p className="text-blue text-base font-medium">Flyers</p>
            <p className="text-neutral-500 text-sm font-light">
              Insira até três flyers
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />  
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />  
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />  
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-blue text-base font-medium">Mapa do Evento</p>
            <p className="text-neutral-500 text-sm font-light">
              Insira o Mapa do evento indicando os setores
            </p>
            <div className="w-full h-56 bg-zinc-300 rounded-3xl shadow">
              <InputFile />  
            </div>            
          </div>

        </div>
      </div>
    </div>
  );
}
