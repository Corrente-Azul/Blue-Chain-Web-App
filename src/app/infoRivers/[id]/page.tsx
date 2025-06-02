'use client'

import NavBar from "@/components/NavBar/NavBar"
import SlideMenu from "@/components/SlideMenu/SlideMenu"
import { rivers } from "@/utils/rivers"
import Link from "next/link"
import { use, useState } from "react"

export default function InfoRivers({params}:{ params: Promise<{ id: number }>}) {

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
  
  const paramsUnwraped = use(params)
  const id = paramsUnwraped.id

  return (
    <div className="flex flex-col items-center w-full xl:h-screen h-full bg-[#0A1128]">
        <NavBar isInfo toggleMenu={() => toggleMenu()}/>
        <SlideMenu isInfo toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
        <div className="w-full xl:h-7/12 h-auto flex max-xl:flex-col-reverse justify-center rounded-2xl items-center gap-12 xl:gap-20 2xl:gap-30 m-20 mt-10 z-30">
            <div className="md:w-[40rem] sm:w-[30rem] w-[18rem] flex flex-col h-[18rem] sm:h-[30rem] md:h-[40rem] gap-2">
              <div className="w-full h-1/3 flex  rounded-2xl gap-2">
                <div className="w-1/3 h-full rounded-2xl bg-[#1282A2] flex justify-center items-center">
                  <p className=" text-neutral-50 text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-sm">pH: {rivers[id].props.ph ?? "??"}</p>
                </div>
                <div className="w-2/3 h-full rounded-2xl bg-[#FEFCFB] flex justify-center items-center">
                  <p className=" text-[#0A1128] text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-sm">Oxigenio Dissolvido(mg/L): {rivers[id].props.oxigen ?? "??"}</p>
                </div>
              </div>
              <div className="w-full h-1/3 flex rounded-2xl gap-2 justify-center items-center">
                <div className="w-2/3 h-full rounded-2xl bg-[#FEFCFB] flex justify-center items-center max-sm:text-base">
                  <p className=" text-[#0A1128] text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-sm">Condutvidade Eletrica(µS/cm): {rivers[id].props.conductivity ?? "??"}</p>
                </div>
                <div className="w-1/3 h-full rounded-2xl bg-[#1282A2] flex justify-center items-center">
                  <p className=" text-neutral-50 text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-sm">Turbidez: {rivers[id].props.turbidity ?? "??"}</p>
                </div>
              </div>
              <div className="w-full h-1/3 flex rounded-2xl gap-2">
                <div className="w-1/3 h-full rounded-2xl bg-[#1282A2] flex justify-center items-center">
                    <p className=" text-neutral-50 text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-sm">Temperatura: {rivers[id].props.temperature ?? "??"}ºC</p>
                </div>
                <div className="w-2/3 h-full rounded-2xl bg-[#FEFCFB] flex justify-center items-center">
                    <p className=" text-[#0A1128] text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-sm">Precipitação(mm): {rivers[id].props.pluviometrics ?? "??"}</p>
                </div>
              </div>
            </div>
            <div className="xl:w-[30rem] xl:h-[40rem] md:w-[40rem] md:h-[50rem] sm:w-[30rem] sm:h-[40rem] w-[18rem] h-[30rem] flex flex-col border-solid border-2 border-[#034078] rounded-2xl p-5">
              <div className=" w-full h-5/7 rounded-2xl">
                <img className="w-full h-full rounded-2xl" src={`../${rivers[id].image}`} style={{ objectFit: 'cover' }} />
              </div>
              <div className="h-2/7 w-full flex">
                <div className="flex flex-col w-full justify-center items-start pl-5 gap-5">
                  <div className=" text-neutral-50 max-lg:text-xl text-2xl font-bold font-['Inter']">{rivers[id].name}</div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className=" text-neutral-50/75 text-lg font-normal font-['Inter']">Indice: { 
                      rivers[id].index == 0 ? "Pessimo" : rivers[id].index == 1 ? "Medio" : rivers[id].index == 2 ? "Otimo" : "??" 
                    }</div>
                    <div className={`w-6 h-6 ${rivers[id].index == 0 ? "bg-red-500" : rivers[id].index == 1 ? "bg-yellow-500" : rivers[id].index == 2 ? "bg-green-500" : "invisible" } flex justify-center items-center text-white rounded-full`}>
                    {rivers[id].index  == 0 ? "1" : rivers[id].index  == 1 ? "2" : rivers[id].index  == 2 ? "3" : "" }
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="flex justify-start items-center w-full max-xl:h-40">
            <div className="w-4/7 text-neutral-50/75 max-sm:text-lg text-xl font-normal font-['Inter'] leading-relaxed ml-15 max-xs:text-base">Criado por: <br/>Henrique, Higor, João, Julio e Vinicius.</div>
        </div>
    </div>
  );
}