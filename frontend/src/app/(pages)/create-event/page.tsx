import { Input } from "@/app/components/Form/Input";
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
        <div className="mb-4 ml-4">
          <p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
          <p className="text-blue text-base font-light">
            Crie o seu próprio evento da maneira que você preferir!
          </p>
        </div>
      </div>
    </div>
  );
}
