'use client'

import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import SlideMenu from "@/components/SlideMenu/SlideMenu"
import MyMap from "@/components/Map"
import { useState } from "react"
import { rivers } from "@/utils/rivers"
import Link from "next/link"

export default function Map() {

  const [menu, setMenu] = useState<boolean>(false)
    
      const [slidebg, setSlidebg] = useState<string>("invisible")
    
      const [slidecontent, setSlidecontent] = useState<string>("translate-x-full")

      const [riverImage, setRiverImage] = useState<string>("images/River.jpg")

      const [riverName, setRiverName] = useState<string>("Selecione um Rio")

      const [riverIndex, setRiverIndex] = useState<number>()

      const [riverId, setRiverId] = useState<number>()
    
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

      function transformCard(river:string){
        switch(river){
          case "tiete":
              setRiverId(rivers[0].id);
              setRiverIndex(rivers[0].index);
              setRiverImage(rivers[0].image);
              setRiverName(rivers[0].name);
            break;
          case "pinheiros":
              setRiverId(rivers[1].id);
              setRiverIndex(rivers[1].index);
              setRiverImage(rivers[1].image);
              setRiverName(rivers[1].name);
            break;
          case "bllings":
              setRiverId(rivers[2].id);
              setRiverIndex(rivers[2].index);
              setRiverImage(rivers[2].image);
              setRiverName(rivers[2].name);
            break;
          case "guarapiranga":
              setRiverId(rivers[3].id);
              setRiverIndex(rivers[3].index);
              setRiverImage(rivers[3].image);
              setRiverName(rivers[3].name);
            break;
          default:
            setRiverId(undefined)
            setRiverIndex(undefined)
            setRiverImage("River.jpg")
            setRiverName("Selecione um Rio")
        }
      }

  return (
    <div className="flex flex-col items-center w-full md:h-screen h-full bg-[#0A1128]">
        <NavBar toggleMenu={() => toggleMenu()}/>
        <SlideMenu toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
        <div className="w-10/12 md:w-11/12 md:h-7/12 h-auto flex max-md:flex-col justify-center items-center md:gap-5 gap-15 m-20 mt-10 z-30">
            <div className="md:h-full 2xl:w-5/7 xl:w-2/3 lg:w-7/12 md:w-6/12 w-full h-[40rem]">
              <MyMap transformCard={transformCard}/>
            </div>
            <div className="md:h-full 2xl:w-2/7 xl:w-1/3 lg:w-5/12 md:w-7/12 w-full sm:h-[45rem] h-[40rem] flex flex-col border-solid border-2 border-[#034078] rounded-2xl p-5">
              <div className=" w-full h-5/7 rounded-2xl">
                <img className="w-full h-full rounded-2xl" src={riverImage} style={{ objectFit: 'cover' }} />
              </div>
              <div className="h-2/7 w-full flex">
                <div className="flex flex-col w-2/3 justify-center items-start pl-5 gap-5">
                  <div className=" text-neutral-50 max-lg:text-xl text-2xl font-bold font-['Inter']">{riverName}</div>
                  <div className="flex flex-row justify-center items-center gap-3">
                    <div className=" text-neutral-50/75 text-lg font-normal font-['Inter']">Indice: {
                      
                      riverIndex == 0 ? "Pessimo" : riverIndex == 1 ? "Medio" : riverIndex == 2 ? "Otimo" : "??" 
                      
                    }</div>
                    <div className={`w-5 h-5 ${riverIndex == 0 ? "bg-red-500" : riverIndex == 1 ? "bg-yellow-500" : riverIndex == 2 ? "bg-green-500" : "invisible" } rounded-full`}/>
                  </div>
                </div>
                <div className="flex flex-col w-1/3 justify-center mr-5">
                  <Link href={riverId != undefined ? `/inforivers/${riverId}` : "/map"}>
                    <div className="w-32 h-14 bg-white flex justify-center items-center rounded-2xl">
                      <div className="justify-center text-slate-900 text-lg font-medium font-['Inter'] leading-9">Ver Detalhes</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
        </div>
        <div className="flex justify-start items-center w-full max-md:h-40">
            <div className="w-4/7 text-neutral-50/75 max-sm:text-lg text-xl font-normal font-['Inter'] leading-relaxed ml-15">Criado por: <br/>Henrique, Higor, João, Julio e Vinicius.</div>
        </div>
    </div>
  );
}