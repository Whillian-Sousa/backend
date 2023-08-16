import { AiOutlineHome } from "react-icons/ai";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { MdOutlineAddBox, MdOutlinePrivacyTip } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="sidebar fixed z-10 top-16 bottom-o text-xs text-blue h-screen right-0 p-2 w-[90] overflow-y-auto text-center bg-gray-200 shadow">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <Link href={"/"}>
          <div className="flex flex-col cursor-poiter justify-center items-center mb-9">
            <AiOutlineHome size={30} />
            <span>Home</span>
          </div>
        </Link>
        <Link href={"/maps"}>
          <div className="flex flex-col cursor-poiter justify-center items-center mb-9">
            <LiaMapMarkerSolid size={30} />
            <span>Mapa</span>
          </div>
        </Link>
        <Link href={"/create-event"}>
          <div className="flex flex-col cursor-poiter justify-center items-center mb-9">
            <MdOutlineAddBox size={30} />
            <span>Adicionar Evento</span>
          </div>
        </Link>
        <Link href={"/filter-events"}>
          <div className="flex flex-col cursor-poiter justify-center items-center mb-9">
            <FiFilter size={30} />
            <span>Filtro</span>
          </div>
        </Link>
        <div className="flex flex-col cursor-poiter justify-center items-center mb-9">
          <BsQuestionCircle size={30} />
          <span>SAC</span>
        </div>
        <div className="flex flex-col cursor-poiter justify-center items-center mb-9">
          <MdOutlinePrivacyTip size={30} />
          <span>Privacidade</span>
        </div>
      </div>
    </aside>
  );
};
