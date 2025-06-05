'use client'

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import SlideMenu from "@/components/SlideMenu/SlideMenu";
import { Menu, X } from "@deemlol/next-icons";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [menu, setMenu] = useState<boolean>(false)
    
      const [slidebg, setSlidebg] = useState<string>("invisible")
    
      const [slidecontent, setSlidecontent] = useState<string>("translate-x-full")
    
      function toggleMenu(){
        if(!menu){
          setSlidebg("visible")
          setSlidecontent("translate-x-0")
          setMenu(!menu)
        }else{
          setSlidebg("invisible")
          setSlidecontent("translate-x-full")
          setMenu(!menu)
        }
  }

  return (
    <div className="flex flex-col items-center justify-between w-full lg:h-screen bg-[#0A1128]">
      <img
        className="max-3xl:hidden 3xl:h-screen absolute right-0 "
        src="images/SShapeRiver.svg"
        style={{ objectFit: 'cover' }}
      />
      <img
        className="h-[60rem] max-xl:hidden 3xl:hidden max-3xl:h-screen absolute right-0"
        src="images/SShapeSmallRiver.svg"
        style={{ objectFit: 'cover' }}
      />
      <img
        className="h-[60rem] max-lg:hidden xl:hidden max-xl:h-screen absolute right-0"
        src="images/SShapeMiniRiver.svg"
        style={{ objectFit: 'cover' }}
      />
      
      <div className="w-full lg:hidden h-screen absolute flex items-center justify-center top-0 z-0 bg-[url(/images/River.jpg)] bg-cover bg-center">
        <div className="w-full flex justify-center items-center z-30 gap-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-12 lg:ml-10">
          <div className="justify-start text-neutral-50 max-sm:text-4xl max-lg:text-6xl text-7xl font-bold font-['Inter']">Corrente Azul</div>
          <div className="w-5/12 max-lg:text-center text-neutral-50/75 max-xs:text-sm max-sm:text-base max-lg:text-lg text-xl font-normal font-['Inter'] leading-relaxed">Venha conosco em busca de conhecer as melhores e mais atualizadas informações sobre os rios da cidade de São Paulo</div>
        </div>
        <Link href="/rivers">
          <div className="lg:px-7 lg:py-5 px-5 py-3 lg:ml-10 bg-cyan-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-start items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-120">
            <div className="justify-center text-slate-900 text-xl sm:text-2xl font-medium font-['Inter'] leading-9">Ver Rios</div>
          </div>
        </Link>
          </div>
        </div>
      </div>
      <NavBar toggleMenu={() => toggleMenu()}/>
      <SlideMenu toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
      <div className="w-full h-screen max-lg:h-screen max-lg:-m-5 max-lg:invisible flex flex-col items-center justify-center lg:justify-start lg:items-start gap-12 lg:mt-10 z-30">
        <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-12 lg:ml-10">
          <div className="justify-start text-neutral-50 max-sm:text-4xl max-lg:text-6xl text-7xl font-bold font-['Inter']">Corrente Azul</div>
          <div className="w-5/12 max-lg:text-center text-neutral-50/75 max-xs:text-sm max-sm:text-base max-lg:text-lg text-xl font-normal font-['Inter'] leading-relaxed">Venha conosco em busca de conhecer as melhores e mais atualizadas informações sobre os rios da cidade de São Paulo</div>
        </div>
        <Link href="/rivers">
          <div className="lg:px-7 lg:py-5 px-5 py-3 lg:ml-10 bg-cyan-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-start items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-120">
            <div className="justify-center text-slate-900 text-xl sm:text-2xl font-medium font-['Inter'] leading-9">Ver Rios</div>
          </div>
        </Link>
      </div>
      <div className="flex justify-start items-center w-full max-lg:h-[10rem] max-lg:mb-20 z-50">
        <div className="lg:w-4/7 text-neutral-50/75 max-sm:text-lg text-xl font-normal font-['Inter'] leading-relaxed mx-15">Criado por: <br/>Henrique, Higor, João, Julio e Vinicius.</div>
      </div>
    </div>
	);
}
