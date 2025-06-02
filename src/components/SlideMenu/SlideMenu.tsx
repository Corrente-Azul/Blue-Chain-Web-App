import { X } from "@deemlol/next-icons";
import Link from "next/link";
import { MouseEventHandler } from "react";

type TSlideMenu = {
    toggleMenu: MouseEventHandler<SVGElement>,
    slidebg: string,
    slidecontent: string,
    isInfo ?: boolean
}

export default function SlideMenu({toggleMenu, slidebg, slidecontent, isInfo = false}:TSlideMenu){
    return(
        <div className={`fixed inset-0 w-full h-full top-0 z-50 ${slidebg}`}>
            <div className={`w-full h-screen duration-500 ease-out transition-all bg-[#0A1128] flex top-0 right-0 flex-col justify-start items-center ${slidecontent}`}>
                <div className="w-full h-1/4 relative flex flex-row justify-between items-center">
                    <div className="ml-10 flex flex-row justify-center items-center gap-5">
                        <img className="w-36 h-36" src={isInfo ? `../images/Logo.png` : `images/Logo.png`} />
                    </div>
                    <div className="lex justify-around items-center mr-10">
                        <X size={64} color="#FFFFFF" onClick={toggleMenu}/>
                    </div>
                </div>
                <div className="h-3/4 w-48 mt-36 flex flex-col items-center gap-10">
                    <Link href="/contacts">
                        <p className="justify-center text-neutral-50 text-4xl font-medium font-['Inter']">Contato</p>
                    </Link>
                    <Link href="/about">
                        <p className="justify-center text-neutral-50 text-4xl font-medium font-['Inter']">Sobre</p>
                    </Link>
                    <Link href="/map">
                        <p className="justify-center text-neutral-50 text-4xl font-medium font-['Inter']">Mapa</p>
                    </Link>               
                </div>
            </div>
        </div>
    )
}