'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handleSubmit = () => {
    const queryString = encodeURIComponent(search)
    router.push(`/filter-events?q=${queryString}`)
  }
  return (
    <nav className="bg-blue flex mx-auto px-6 absolute top-0 w-full h-16 flex items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="mr-[6rem]"
      />
      <div className="flex items-center w-[50vw]">
        <input
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
          type="text"
          placeholder="Insira o nome ou o endereço do seu evento aqui!"
          onKeyDown={(e) =>{
            if(e.key === 'Enter'){
              handleSubmit()
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};
