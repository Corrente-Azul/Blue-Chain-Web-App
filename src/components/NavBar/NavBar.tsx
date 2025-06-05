import { Menu, X } from "@deemlol/next-icons";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";

type TNavBar = {
    toggleMenu: MouseEventHandler<SVGElement>,
    isInfo?: boolean
}

export default function NavBar({toggleMenu, isInfo = false}:TNavBar){
    return(
        <div className="w-full h-20 sm:h-40 relative bg-slate-900/30 flex justify-between items-center z-50">
            <div className="ml-5 sm:ml-10 flex flex-row justify-center items-center sm:gap-5">
                <Link className="sm:max-md:w-full sm:max-md:h-max" href="/">
                    <img className="w-17 h-17 xs:w-20 xs:h-20 sm:w-40 sm:h-40 cursor-pointer transition-all duration-200 hover:scale-120" src={isInfo ? `../images/Logo.png` : `images/Logo.png`} />
                </Link>
                <p className="text-neutral-50 text-sm sm:text-xl font-medium font-['Inter'] max-lg:invisible max-sm:visible">Corrente Azul SP</p>
            </div>
            <div className="w-3/5 md:w-2/5 lg:w-3/10 h-14 flex justify-around items-center mr-10 max-sm:hidden">
                <Link href="/about">
                    <p className="justify-center text-neutral-50 text-xl font-medium font-['Inter'] cursor-pointer transition-all duration-200 hover:scale-120">Sobre</p>
                </Link>
                <Link href="/contacts">
                    <p className="justify-center text-neutral-50 text-xl font-medium font-['Inter'] cursor-pointer transition-all duration-200 hover:scale-120">Contato</p>
                </Link>
                <Link href="/map" className="h-full">
                    <div className="w-28 h-full bg-neutral-50 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-120">
                        <p className="justify-center text-slate-900 text-xl font-medium font-['Inter'] cursor-pointer">Mapa</p>
                    </div>
                </Link>
            </div>
            <div className="flex justify-around items-center sm:hidden mr-5">
                <Menu size={32} color="#FFFFFF" onClick={toggleMenu}/>
            </div>
        </div>
    );
}