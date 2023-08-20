import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecondary } from "@/app/components/BannerSecondary";
import { categories } from "@/app/utils/categories";
import { fetchWrapper } from "@/app/utils/fetchWrapper";

export default async function Dashboard() {
  const response = await fetchWrapper("/events/main", {
    method: "GET",
  });

  const secondareResponse = response.slice(1)
  return (
    <main>
      <div className="container mx-auto">
        <BannerPrimary events={response[0]} />
        <div className="p-2 text-blue">
          <p className="text-2xl font-medium">Eventos em Destaque</p>
          <p className="text-base font-light">
            Se divirta com os principais eventos de São Luis e do Brasil!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {secondareResponse.map((event: any) => (
          <>  
          <BannerSecondary event={event} />
          </>
          ))}

        </div>

        <div className="p-2 text-blue">
          <p className="text-2xl font-medium">Navegue por tipo de evento</p>
          <p className="text-base font-light">
            Vá ao evento que é a sua cara :D
          </p>
        </div>
        <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
          {categories.map((categorie) => {
            return (
              <>
                <div className="flex flex-col items-center justify-center cursor-poiter">
                  <img src={categorie.icon} alt="" className="rounded-full" />
                  <p>{categorie.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}
