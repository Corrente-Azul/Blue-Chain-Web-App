'use client'

import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import SlideMenu from "@/components/slideMenu";
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
    <div className="w-full h-screen bg-[#0A1128]">
      <img
        className="h-screen max-3xl:hidden 3xl:w-2/3 absolute right-0 "
        src="images/SShapeRiver.svg"
        style={{ objectFit: 'cover' }}
      />
      <img
        className="h-screen max-xl:hidden 3xl:hidden 3xl:w-2/3 absolute right-0"
        src="images/SShapeSmallRiver.svg"
        style={{ objectFit: 'cover' }}
      />
      <img
        className="h-screen max-lg:hidden xl:hidden xl:w-2/3 absolute right-0"
        src="images/SShapeMiniRiver.svg"
        style={{ objectFit: 'cover' }}
      />
      <img
        className="w-full h-5/6 lg:hidden absolute top-0 z-0"
        src="images/River.jpg"
        style={{ objectFit: 'cover' }}
      />
      <NavBar toggleMenu={() => toggleMenu()}/>
      <SlideMenu toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
      <div className="w-full h-8/12 sm:h-7/12 flex flex-col fixed justify-center items-center lg:justify-start lg:items-start gap-12 lg:ml-20 lg:mt-10 z-30">
        <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-12">
          <div className="justify-start text-neutral-50 max-lg:text-6xl text-7xl font-bold font-['Inter']">Corrente Azul</div>
          <div className="w-5/12 max-lg:text-center text-neutral-50/75 max-lg:text-lg text-xl font-normal font-['Inter'] leading-relaxed">Venha conosco em busca de conhecer as melhores e mais atualizadas informações sobre os rios da cidade de São Paulo</div>
        </div>
        <Link href="/rivers">
          <div className="lg:px-7 lg:py-5 px-5 py-3 bg-cyan-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-start items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-120">
            <div className="justify-center text-slate-900 text-2xl lg:text-2xl font-medium font-['Inter'] leading-9">Ver Rios</div>
          </div>
        </Link>
      </div>
      <Footer/>
    </div>
	);
}
