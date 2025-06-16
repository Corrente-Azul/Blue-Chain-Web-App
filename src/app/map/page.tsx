'use client'

import NavBar from "@/components/NavBar/NavBar"
import SlideMenu from "@/components/SlideMenu/SlideMenu"
import MyMap from "@/components/Map"
import { useEffect, useState } from "react"
import Link from "next/link"
import { rivers } from "@/util/riverProps"

type RiverApiData = {
  ph: number | undefined,
  oxigen: number | undefined,
  conductivity: number | undefined,
  turbidity: number | undefined,
  temperature: number | undefined,
  pluviometrics: number | undefined,
  index: number
}

export default function Map() {

  const [menu, setMenu] = useState<boolean>(false)
  const [slidebg, setSlidebg] = useState<string>("invisible")
  const [slidecontent, setSlidecontent] = useState<string>("translate-x-full")
  const [riverImage, setRiverImage] = useState<string>("images/River.jpg")
  const [riverName, setRiverName] = useState<string>("Selecione um Rio")
  const [riverIndex, setRiverIndex] = useState<number>()
  const [riverId, setRiverId] = useState<number>()
  const [riverApiData, setRiverApiData] = useState<RiverApiData | undefined>(undefined)
  const [riverData, setRiverData] = useState<Record<number, RiverApiData>>({})

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

  // Carrega todos os dados dos rios ao iniciar (igual à página rivers)
  useEffect(() => {
    async function fetchAllRivers() {
      const now = new Date();
      const start = `01/${String(now.getMonth()+1).padStart(2, "0")}/${now.getFullYear()}T00:00`;
      const end = `${String(new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()).padStart(2, "0")}/${String(now.getMonth()+1).padStart(2, "0")}/${now.getFullYear()}T23:59`;

      const results: Record<number, RiverApiData> = {};
      await Promise.all(
        rivers.map(async (river: typeof rivers[number]) => {
          try {
            const res = await fetch(
              `/api/rivers?stationId=${river.cetesbStationId}&start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`
            );
            const data = await res.json();
            results[river.id] = data;
          } catch (e) {
            results[river.id] = {
              ph: undefined,
              oxigen: undefined,
              conductivity: undefined,
              turbidity: undefined,
              temperature: undefined,
              pluviometrics: undefined,
              index: 0
            };
          }
        })
      );
      setRiverData(results);
    }
    fetchAllRivers();
  }, []);

async function transformCard(river: string) {
  let riverObj;
  switch(river){
    case "tiete":
      riverObj = rivers[0];
      break;
    case "pinheiros":
      riverObj = rivers[1];
      break;
    case "bllings":
      riverObj = rivers[2];
      break;
    case "guarapiranga":
      riverObj = rivers[3];
      break;
    case "claras":
      riverObj = rivers[4];
      break;
    case "taiacup":
      riverObj = rivers[5];
      break;
    case "itupeva":
      riverObj = rivers[6];
      break;
    case "branca":
      riverObj = rivers[7];
      break;
    case "sorocaba":
      riverObj = rivers[8];
      break;
    case "jaguari":
      riverObj = rivers[9];
      break;
    case "atibaia":
      riverObj = rivers[10];
      break;
    case "piracicaba":
      riverObj = rivers[11];
      break;
    default:
      setRiverId(undefined)
      setRiverIndex(undefined)
      setRiverImage("River.jpg")
      setRiverName("Selecione um Rio")
      setRiverApiData(undefined)
      return;
  }
  setRiverId(riverObj.id);
  setRiverImage(riverObj.image);
  setRiverName(riverObj.name);

  // Usa os dados já carregados se disponíveis
  if (riverData[riverObj.id]) {
    setRiverIndex(riverData[riverObj.id].index);
    setRiverApiData(riverData[riverObj.id]);
    return;
  }

  // Busca os dados atuais da estação usando a rota local da API Next.js (fallback)
  const now = new Date();
  const start = `01/${String(now.getMonth()+1).padStart(2, "0")}/${now.getFullYear()}T00:00`;
  const end = `${String(new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()).padStart(2, "0")}/${String(now.getMonth()+1).padStart(2, "0")}/${now.getFullYear()}T23:59`;

  try {
    const res = await fetch(
      `/api/rivers?stationId=${riverObj.cetesbStationId}&start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`
    );
    const data: RiverApiData = await res.json();
    setRiverIndex(data.index);
    setRiverApiData(data);
  } catch {
    setRiverIndex(undefined);
    setRiverApiData(undefined);
  }
}

  return (
    <div className="flex flex-col items-center w-full md:h-screen h-full bg-[#0A1128]">
        <NavBar toggleMenu={() => toggleMenu()}/>
        <SlideMenu toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
        <div className="w-10/12 md:w-11/12 md:h-7/12 h-auto flex max-md:flex-col-reverse justify-center items-center md:gap-5 gap-15 m-20 mt-10 z-30">
            <div className="md:h-full 2xl:w-5/7 xl:w-2/3 lg:w-7/12 md:w-6/12 w-full h-[40rem]">
              <MyMap transformCard={transformCard}/>
            </div>
            <div className="md:h-full 2xl:w-2/7 xl:w-1/3 lg:w-5/12 md:w-7/12 w-full sm:h-[45rem] h-[40rem] flex flex-col border-solid border-2 border-[#034078] max-sm:gap-5 rounded-2xl p-5">
              <div className=" w-full h-5/7 rounded-2xl ">
                <img className="w-full h-full rounded-2xl" src={riverImage} style={{ objectFit: 'cover' }} />
              </div>
              <div className="h-3/7 w-full flex max-sm:flex-col max-sm:justify-center max-sm:gap-10">
                <div className="flex flex-col w-2/3 max-sm:w-full justify-center items-start pl-5 gap-5">
                  <div className=" text-neutral-50 max-lg:text-xl text-2xl font-bold font-['Inter']">{riverName}</div>
                  <div className="flex flex-row justify-center items-center gap-3">
                    {(() => {
                      const indiceLabels = [
                        "Péssimo",
                        "Ruim",
                        "Razoável",
                        "Bom",
                        "Ótimo"
                      ];
                      const indiceColors = [
                        "bg-red-500",        // Péssimo
                        "bg-orange-500",     // Ruim
                        "bg-yellow-400",     // Razoável
                        "bg-green-500",      // Bom
                        "bg-blue-900"        // Ótimo (azul escuro)
                      ];
                      const idx = typeof riverIndex === "number" && riverIndex >= 0 && riverIndex <= 4 ? riverIndex : undefined;
                      const label = idx !== undefined ? indiceLabels[idx] : "??";
                      const color = idx !== undefined ? indiceColors[idx] : "invisible";
                      const number = idx !== undefined ? (idx + 1).toString() : "";

                      return (
                        <>
                          <div className="text-neutral-50/75 text-lg font-normal font-['Inter']">
                            Indice: {label}
                          </div>
                          <div className={`w-6 h-6 ${color} flex justify-center items-center text-white rounded-full font-bold`}>
                            {number}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
                <div className="flex flex-col w-1/3 justify-center mr-5 max-sm:w-full max-sm:items-center ">
                  <Link href={riverId != undefined ? `/inforivers/${riverId}` : "/map"}>
                    <div className="w-24 sm:w-32 h-14 bg-white flex justify-center items-center rounded-2xl">
                      <div className="justify-center text-slate-900 text-xs sm:text-lg font-medium font-['Inter'] leading-9">Ver Detalhes</div>
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