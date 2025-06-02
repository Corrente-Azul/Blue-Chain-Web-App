'use client'

import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import SlideMenu from "@/components/SlideMenu/SlideMenu"
import { useState } from "react"

export default function About() {

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
      <div className="w-full xl:h-[40rem] flex max-xl:flex-col-reverse justify-center items-center z-30 gap-10 px-30">
        <div className="flex flex-col xl:w-1/2 xl:h-full w-full h-1/2 justify-center xl:items-start items-center gap-10">
          <div className="max-xl:text-center text-neutral-50 max-lg:text-6xl text-7xl font-bold font-['Inter']">Quem Somos?</div>
          <div className="max-xl:text-center text-neutral-50/75 max-lg:text-lg text-2xl font-normal font-['Inter'] leading-relaxed">Nós somos um grupo de estudantes universitarios da Universidade de São Paulo com intenção de facilitar a visualisação  e compreendimento da qualidade da agua dos rios da cidade de São Paulo.</div>
        </div>
        <div className="flex flex-col xl:w-1/2 xl:h-full w-full h-1/2 justify-center items-center">
          <img src="images/EachUsp.jpg" className=" xl:h-[30rem] xl:w-[30rem] md:w-[20rem] md:h-[20rem] sm:h-[15rem] sm:w-[15rem] h-[10rem] w-[10rem] rounded-full" style={{ objectFit: 'cover' }}/>
        </div>
      </div>
      <div className="w-full h-[80rem] flex justify-center items-center bg-[url(/images/BlueRectangle.svg)] bg-cover bg-center">
        <div className="w-full xl:h-[40rem] flex flex-row-reverse max-xl:flex-col-reverse justify-center items-center z-30 gap-10 px-30">
          <div className="flex flex-col xl:w-1/2 xl:h-full w-full h-1/2 justify-center xl:items-start items-center gap-10">
            <div className="max-xl:text-center text-neutral-50 max-lg:text-6xl text-7xl font-bold font-['Inter']">Quais são Nossos Objetivos?</div>
            <div className="max-xl:text-center text-neutral-50/75 max-lg:text-lg text-2xl font-normal font-['Inter'] leading-relaxed">Nosso objetivo se baseia em tornar a população mais informada de maneira simples e eficaz sobre como anda a poluição dos rios , tomando indicies e mostrando como cada caracteristica analizada contribui ou não com a poluição</div>
          </div>
          <div className="flex flex-col xl:w-1/2 xl:h-full w-full h-1/2 justify-center items-center">
            <div className="xl:h-[30rem] xl:w-[30rem] md:h-[20rem] md:w-[20rem] sm:h-[15rem] sm:w-[15rem] h-[10rem] w-[10rem] rounded-full bg-[#1282A2]">
              <img src="images/Computer.svg" className="h-full w-full p-10 rounded-full" style={{ objectFit: 'cover' }}/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:h-[40rem]  flex max-xl:flex-col-reverse justify-center items-center z-30 gap-10 px-30">
        <div className="flex flex-col xl:w-1/2 xl:h-full w-full h-1/2 justify-center xl:items-start items-center gap-10">
          <div className="max-xl:text-center text-neutral-50 max-lg:text-6xl text-7xl font-bold font-['Inter']">Porque Fazemos Isso?</div>
          <div className="max-xl:text-center text-neutral-50/75 max-lg:text-lg text-2xl font-normal font-['Inter'] leading-relaxed">De acordo com pesquisas da Agencia Nacional de Aguas e Saneamento Basico Brasileiro, 60% da população não tem conhecimento sobre a qualidade da agua em sua região, conhecimento esse indispensavel que afeta a saúde pública, o acesso à água potável e a economia local, afetando agricultura, turismo além de ampliar desigualdades sociais e comprometer o bem-estar das comunidades.</div>
        </div>
        <div className="flex flex-col xl:w-1/2 xl:h-full w-full h-1/2 justify-center items-center">
          <img src="images/poluicao.webp" className=" xl:h-[30rem] xl:w-[30rem] md:w-[20rem] md:h-[20rem] sm:h-[15rem] sm:w-[15rem] h-[10rem] w-[10rem] rounded-full" style={{ objectFit: 'cover' }}/>
        </div>
      </div>
      <div className="flex justify-start items-center w-full h-40">
        <div className="w-4/7 text-neutral-50/75 max-sm:text-lg text-xl font-normal font-['Inter'] leading-relaxed ml-15">Criado por: <br/>Henrique, Higor, João, Julio e Vinicius.</div>
    </div>
  </div>
  );
}