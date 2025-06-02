'use client'

import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import SlideMenu from "@/components/SlideMenu/SlideMenu"
import { useState } from "react"
import copy from 'clipboard-copy';

async function copyText(text: string) {
  try{
    await copy(text)
  } catch (error) {
    console.error('Failed to copy text to clipboard', error);
  }
}

export default function Contacts() {

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
    <div className="w-full h-full bg-[#0A1128]">
      <NavBar toggleMenu={() => toggleMenu()}/>
      <SlideMenu toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
      <div
        className="w-full h-[45rem] absolute flex items-center justify-center top-0 z-0 bg-[url(/images/River.jpg)] bg-cover bg-center"
      >
        <div className="w-full flex justify-center items-center z-30 gap-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="text-center text-neutral-50 max-lg:text-6xl text-7xl font-bold font-['Inter'] max-sm:text-4xl">CONTATE-NOS</div>
            <div className="text-center text-neutral-50 max-lg:text-6xl text-7xl font-bold font-['Inter'] max-sm:text-xl">...</div>
            <div className="text-center text-neutral-50/75 max-lg:text-lg text-2xl font-normal font-['Inter'] leading-relaxed max-sm:text-base">Precisa de ajuda? Tem alguma recomendação? Use um dos meios de comunicação abaixo para nos informar.</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[41rem] flex max-xl:flex-col-reverse justify-center items-center z-30 gap-10 px-30">
      </div>
      <div className="w-full xl:h-[40rem]  flex max-xl:flex-col justify-center items-center z-30 gap-20 px-30">
        <div className="xl:w-1/4 xl:h-[30rem] md:w-[40rem] md:h-[45rem] sm:w-[30rem] sm:h-[40rem] w-[25rem] h-[30rem] max-sm:w-[15rem] max-sm:h-[30rem] flex flex-col items-center bg-[#121A35] rounded-4xl xl:gap-6 sm:gap-12 gap-6 p-10">
          <img src="images/chat.svg" className="max-md:w-48 max-xl:w-56 max-sm:w-32"  />
          <div className="text-center text-neutral-50 max-sm:text-2xl max-md:text-3xl max-xl:text-4xl text-xl font-bold font-['Inter']">ENVIE SUA MENSAGEM</div>
          <div className="flex flex-col w-full gap-10 ">
            <input type="text" className="border-b-2 w-full text-white max-sm:text-lg text-2xl font-normal font-['Inter'] leading-relaxed placeholder-white/80 text-left focus:outline-0"  placeholder="Nome" />
            <input type="text" className="border-b-2 w-full text-white max-sm:text-lg text-2xl font-normal font-['Inter'] leading-relaxed placeholder-white/80 text-left focus:outline-0"  placeholder="Mensagem" />
          </div>
          <div className="w-32 h-14 bg-white flex justify-center items-center  rounded-2xl cursor-pointer transition-all duration-200 hover:scale-120">
            <div className="justify-center text-slate-900 text-lg font-medium font-['Inter'] leading-9">Enviar</div>
          </div>
        </div>
        <div className="xl:w-1/4 xl:h-[30rem] md:w-[40rem] md:h-[45rem] sm:w-[30rem] sm:h-[40rem] max-sm:w-[15rem] max-sm:h-[30rem] flex flex-col items-center bg-[#121A35] rounded-4xl xl:gap-6 sm:gap-12 gap-6 p-10">
          <img src="images/letter.svg" className="max-md:w-48 max-xl:w-56 max-sm:w-32"  />
          <div className="text-center text-neutral-50 max-sm:text-2xl max-md:text-3xl max-xl:text-4xl text-xl font-bold font-['Inter']">ENVIE SUA MENSAGEM</div>
          <div className="flex flex-col w-full gap-10 justify-center items-center">
            <div className="w-full text-white max-sm:text-lg text-2xl font-normal font-['Inter'] leading-relaxed placeholder-white/80 text-center focus:outline-0">Para nos contatar envie uma mensagem para o seguinte e-mail:</div>
          </div>
          <div className="w-32 h-14 bg-white flex justify-center items-center  rounded-2xl cursor-pointer transition-all duration-200 hover:scale-120" onClick={() => copyText('jdnn2006@gmail.com')}>
            <div className="justify-center text-slate-900 text-lg font-medium font-['Inter'] leading-9">Copiar</div>
          </div>
        </div>
        <div className="xl:w-1/4 xl:h-[30rem] md:w-[40rem] md:h-[45rem] sm:w-[30rem] sm:h-[40rem] max-sm:w-[15rem] max-sm:h-[30rem] flex flex-col items-center bg-[#121A35] rounded-4xl xl:gap-6 sm:gap-12 gap-6 p-10">
          <img src="images/call.svg" className="max-md:w-48 max-xl:w-56 max-sm:w-32"  />
          <div className="text-center text-neutral-50 max-sm:text-2xl max-md:text-3xl max-xl:text-4xl text-xl font-bold font-['Inter']">ENVIE SUA MENSAGEM</div>
          <div className="flex flex-col w-full gap-10 justify-center items-center">
            <div className="w-full text-white max-sm:text-lg text-2xl font-normal font-['Inter'] leading-relaxed placeholder-white/80 text-center focus:outline-0">Para conversar com a gente ligue para o seguinte número:</div>
          </div>
          <div className="w-48 h-14 bg-white flex justify-center items-center  rounded-2xl cursor-pointer transition-all duration-200 hover:scale-120" onClick={() => copyText('(13) 98119-1913')}>
            <div className="justify-center text-slate-900 text-lg font-medium font-['Inter'] leading-9">(13) 98119-1913</div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center w-full h-40">
        <div className="w-4/7 text-neutral-50/75 max-sm:text-lg text-xl font-normal font-['Inter'] leading-relaxed ml-15">Criado por: <br/>Henrique, Higor, João, Julio e Vinicius.</div>
      </div>
    </div>
  );
}