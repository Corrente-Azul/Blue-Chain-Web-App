'use client'

import Footer from "@/components/footer"
import NavBar from "@/components/navBar"
import SlideMenu from "@/components/slideMenu"
import { useState } from "react"

export default function Map() {

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
          className="w-full h-5/6 lg:hidden absolute top-0 z-0"
          src="images/River.jpg"
          style={{ objectFit: 'cover' }}
        />
        <NavBar toggleMenu={() => toggleMenu()}/>
        <SlideMenu toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
        <div className="w-full h-8/12 sm:h-7/12 flex flex-col fixed justify-center items-center lg:justify-start lg:items-start gap-12 lg:ml-20 lg:mt-10 z-30">
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-12">
                <div className="justify-start text-neutral-50 max-lg:text-6xl text-7xl font-bold font-['Inter']">Pagina do Mapa</div>
                <div className="w-5/12 max-lg:text-center text-neutral-50/75 max-lg:text-lg text-xl font-normal font-['Inter'] leading-relaxed">Por favor crie a pagina do mapa aqui</div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}