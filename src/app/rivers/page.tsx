'use client'

import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import SlideMenu from "@/components/SlideMenu/SlideMenu"
import { useState } from "react"
import { rivers } from "@/utils/rivers"
import Link from "next/link"

export default function Rivers() {

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
  const id = 0; 

  return (
    <div className="flex flex-col items-center w-full xl:h-screen h-full bg-[#0A1128]">
      <NavBar isInfo toggleMenu={() => toggleMenu()}/>
      <SlideMenu isInfo toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
      <div className="w-full xl:h-7/12 h-auto flex max-xl:flex-col-reverse justify-center rounded-2xl xl:gap-5 gap-10 items-center 2xl:px-20 px-5 m-10 z-30">
          { rivers.map((x) =>{
            return(
              <div className="xl:w-1/4 xl:h-[30rem] md:w-[40rem] md:h-[50rem] sm:w-[30rem] sm:h-[40rem] xs:w-[20rem] xs:h-[30rem] w-[15rem] h-[25rem] flex flex-col border-solid border-2 border-[#034078] rounded-2xl p-5" key={x.id}>
                <div className=" w-full h-5/7 rounded-2xl">
                  <img className="w-full h-full rounded-2xl" src={`${x.image}`} style={{ objectFit: 'cover' }} />
                </div>
                <div className="h-2/7 w-full flex">
                  <div className="flex flex-col w-2/3 justify-center items-start gap-5">
                    <div className=" text-neutral-50 max-xs:text-sm text-xl font-bold font-['Inter']">{x.name}</div>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className=" text-neutral-50/75 max-xs:text-xs text-base font-normal font-['Inter']">Indice: {
                        
                        x.index  == 0 ? "Pessimo" : x.index  == 1 ? "Medio" : x.index  == 2 ? "Otimo" : "??" 
                        
                      }</div>
                      <div className={`w-6 h-6  ${x.index  == 0 ? "bg-red-500" : x.index  == 1 ? "bg-yellow-500" : x.index  == 2 ? "bg-green-500" : "invisible" } flex justify-center items-center text-white rounded-full`}>
                          {x.index  == 0 ? "1" : x.index  == 1 ? "2" : x.index  == 2 ? "3" : "" }
                        </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 justify-center">
                    <Link href={x.id != undefined ? `/inforivers/${x.id}` : "/map"}>
                      <div className="w-24 h-12 max-xs:w-20 max-xs:h-10 bg-white flex justify-center items-center rounded-2xl">
                        <div className="justify-center text-slate-900 max-xs:text-xs text-sm font-medium font-['Inter'] leading-9">Ver Detalhes</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
          }
      </div>
      <div className="flex justify-start items-center w-full max-xl:h-40">
          <div className="w-4/7 text-neutral-50/75 max-sm:text-lg text-xl font-normal font-['Inter'] leading-relaxed ml-15">Criado por: <br/>Henrique, Higor, João, Julio e Vinicius.</div>
      </div>
    </div>
  );
}