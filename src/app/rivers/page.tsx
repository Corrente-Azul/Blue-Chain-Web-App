'use client'

import NavBar from "@/components/NavBar/NavBar"
import SlideMenu from "@/components/SlideMenu/SlideMenu"
import { useEffect, useState } from "react"
import { rivers } from "@/util/riverProps"
import Link from "next/link"

type RiverApiData = {
  ph: number | undefined,
  oxigen: number | undefined,
  conductivity: number | undefined,
  turbidity: number | undefined,
  temperature: number | undefined,
  pluviometrics: number | undefined,
  index: number
}

export default function Rivers() {
  const [menu, setMenu] = useState<boolean>(false)
  const [slidebg, setSlidebg] = useState<string>("invisible")
  const [slidecontent, setSlidecontent] = useState<string>("translate-x-full")
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

  useEffect(() => {
    async function fetchAllRivers() {
      const now = new Date();
      const start = `01/${String(now.getMonth()+1).padStart(2, "0")}/${now.getFullYear()}T00:00`;
      const end = `${String(new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()).padStart(2, "0")}/${String(now.getMonth()+1).padStart(2, "0")}/${now.getFullYear()}T23:59`;

      const results: Record<number, RiverApiData> = {};
      await Promise.all(
        rivers.map(async (river) => {
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

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#0A1128]">
      <NavBar isInfo toggleMenu={() => toggleMenu()}/>
      <SlideMenu isInfo toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
      <div className="w-full flex justify-center px-2 sm:px-10 xl:px-20 mt-10 z-30">
        <div
          className="
            grid
            gap-6
            w-full
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-4
          "
          style={{ minHeight: "calc(100vh - 10rem)" }}
        >
          {rivers.map((x) => {
            const api = riverData[x.id];

            // Definição dos textos e cores para os 5 graus do índice
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

            const index = api?.index ?? undefined;
            const label = index !== undefined && index >= 0 && index <= 4 ? indiceLabels[index] : "??";
            const color = index !== undefined && index >= 0 && index <= 4 ? indiceColors[index] : "invisible";
            const number = index !== undefined && index >= 0 && index <= 4 ? (index + 1).toString() : "";

            return (
              <div
                className="
                  flex flex-col border-solid border-2 border-[#034078] rounded-2xl p-4
                  bg-[#112244]/80
                  w-full
                  h-[calc(100vh-16rem)]
                  min-h-[20rem]
                  max-h-[65vh]
                  shadow-lg
                  transition hover:scale-[1.02]
                "
                key={x.id}
                style={{ height: "calc(200vh - 16rem)" }}
              >
                <div className="w-full flex-1 rounded-2xl overflow-hidden mb-3 flex">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={`${x.image}`}
                    alt={x.name}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="text-neutral-50 text-lg md:text-xl font-bold font-['Inter'] mb-2">{x.name}</div>
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <div className="text-neutral-50/75 text-base font-normal font-['Inter']">
                        Indice: {api ? label : "Carregando..."}
                      </div>
                      <div className={`w-6 h-6 ${api ? color : "invisible"} flex justify-center items-center text-white rounded-full font-bold`}>
                        {api ? number : ""}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <Link href={x.id != undefined ? `/inforivers/${x.id}` : "/map"}>
                      <div className="w-full h-12 bg-white flex justify-center items-center rounded-2xl hover:bg-gray-200 transition">
                        <div className="text-slate-900 text-sm font-medium font-['Inter'] leading-9">Ver Detalhes</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-start items-center w-full max-xl:h-40 mt-10 mb-8">
        <div className="w-4/7 text-neutral-50/75 max-sm:text-lg text-xl font-normal font-['Inter'] leading-relaxed ml-15">
          Criado por: <br/>Henrique, Higor, João, Julio e Vinicius.
        </div>
      </div>
    </div>
  );
}