'use client'

// Update the path and import style to match your project structure
import { rivers } from "@/util/riverProps"
import NavBar from "@/components/NavBar/NavBar"
import SlideMenu from "@/components/SlideMenu/SlideMenu"
import { use, useEffect, useState } from "react"

const PARAMS_INFO = {
  ph: {
    label: "pH",
    description: "O pH afeta o metabolismo de várias espécies aquáticas. Para proteção da vida aquática, o pH deve estar entre 6 e 9. Para IQA, o ideal é entre 7 e 8.",
    ideal: "7,0 - 8,0"
  },
  oxigen: {
    label: "Oxigênio Dissolvido (mg/L)",
    description: "O oxigênio dissolvido é vital para a vida aquática. Para IQA, valores acima de 7 mg/L são considerados ótimos, entre 5 e 7 são bons.",
    ideal: "> 7 mg/L (ótimo), 5-7 mg/L (bom)"
  },
  conductivity: {
    label: "Condutividade Elétrica (µS/cm)",
    description: "A condutividade indica a quantidade de sais dissolvidos na água. Não faz parte do IQA oficial, mas valores até 100 µS/cm são considerados naturais para rios limpos.",
    ideal: "< 100 µS/cm (ótimo), < 500 µS/cm (bom)"
  },
  turbidity: {
    label: "Turbidez",
    description: "A turbidez mede a quantidade de partículas em suspensão na água. Para IQA, o ideal é menor que 5 NTU.",
    ideal: "< 10 NTU (ótimo), < 50 NTU (bom)"
  },
  temperature: {
    label: "Temperatura (ºC)",
    description: "Temperaturas elevadas podem prejudicar a fauna aquática. Para IQA, o ideal é entre 20ºC e 28ºC.",
    ideal: "20ºC - 28ºC"
  },
  pluviometrics: {
    label: "Precipitação (mm)",
    description: "A precipitação não faz parte do IQA oficial, mas o ideal para a região da Grande São Paulo é entre 50 e 200 mm/mês.",
    ideal: "50 - 200 mm/mês"
  }
};

function ParamModal({ open, onClose, paramKey, value }: { open: boolean, onClose: () => void, paramKey: keyof typeof PARAMS_INFO, value: string | number }) {
  if (!open) return null;
  const info = PARAMS_INFO[paramKey];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div
        className="
          relative bg-white rounded-2xl shadow-xl p-8
          flex flex-col items-center z-10
          max-w-md w-full
          sm:max-w-md
          xs:max-w-xs xs:p-4
          max-xs:w-11/12 max-xs:p-2
        "
      >
        <div className="text-2xl font-bold mb-2 text-[#1282A2] max-xs:text-lg">{info.label}</div>
        <div className="text-lg text-gray-700 mb-4 text-center max-xs:text-sm">{info.description}</div>
        <div className="mb-2 text-[#0A1128] font-semibold max-xs:text-base">
          Valor atual: <span className="font-bold">{value ?? "??"}</span>
        </div>
        <div className="text-[#1282A2] max-xs:text-base">
          Valor ideal: <span className="font-semibold">{info.ideal}</span>
        </div>
        <button
          className="mt-6 px-6 py-2 bg-[#1282A2] text-white rounded-lg hover:bg-[#0A1128] transition max-xs:px-4 max-xs:py-1 max-xs:text-sm"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

type RiverApiData = {
  ph: number | undefined,
  oxigen: number | undefined,
  conductivity: number | undefined,
  turbidity: number | undefined,
  temperature: number | undefined,
  pluviometrics: number | undefined,
  index: number
}

export default function InfoRivers({params}:{ params: Promise<{ id: number }>}) {

  const [menu, setMenu] = useState<boolean>(false)
  const [slidebg, setSlidebg] = useState<string>("invisible")
  const [slidecontent, setSlidecontent] = useState<string>("translate-x-full")
  const [modal, setModal] = useState<{key: keyof typeof PARAMS_INFO, value: string | number} | null>(null);

  // Estado local para os parâmetros dinâmicos e índice
  const [riverParams, setRiverParams] = useState<RiverApiData>({
    ph: undefined,
    oxigen: undefined,
    conductivity: undefined,
    turbidity: undefined,
    temperature: undefined,
    pluviometrics: undefined,
    index: 0
  });

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

  // TODO: Import or define the rivers array/object with river data above this line
  // Example import (uncomment and adjust the path as needed):
  // import rivers from "@/data/rivers";
  
    const river = rivers[id];

  // Busca os dados atuais da estação ao carregar a página usando a rota local da API Next.js
  useEffect(() => {
    async function fetchParams() {
      const now = new Date();
      const start = `01/${String(now.getMonth()+1).padStart(2, "0")}/${now.getFullYear()}T00:00`;
      const end = `${String(new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()).padStart(2, "0")}/${String(now.getMonth()+1).padStart(2, "0")}/${now.getFullYear()}T23:59`;

      const res = await fetch(
        `/api/rivers?stationId=${river.cetesbStationId}&start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`
      );
      const params = await res.json();
      setRiverParams(params);
    }
    fetchParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [river.cetesbStationId]);

  return (
    <div className="flex flex-col items-center w-full h-full bg-[#0A1128]">
        <NavBar isInfo toggleMenu={() => toggleMenu()}/>
        <SlideMenu isInfo toggleMenu={() => toggleMenu()} slidebg={slidebg} slidecontent={slidecontent}/>
        <ParamModal
          open={!!modal}
          onClose={() => setModal(null)}
          paramKey={modal?.key || "ph"}
          value={modal?.value ?? ""}
        />
        <div className="w-full xl:[50rem] h-auto flex max-xl:flex-col-reverse justify-center rounded-2xl items-center gap-12 xl:gap-20 2xl:gap-30 m-20 mt-10 z-30">
            <div className="md:w-[40rem] sm:w-[30rem] w-[18rem] flex flex-col h-[18rem] sm:h-[30rem] md:h-[40rem] gap-2">
              <div className="w-full h-1/3 flex  rounded-2xl gap-2">
                <div
                  className="w-1/3 h-full rounded-2xl bg-[#1282A2] flex justify-center items-center cursor-pointer hover:brightness-90 transition"
                  onClick={() => setModal({key: "ph", value: riverParams.ph ?? "??"})}
                >
                  <p className=" text-neutral-50 text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-xs">pH: {riverParams.ph ?? "??"}</p>
                </div>
                <div
                  className="w-2/3 h-full rounded-2xl bg-[#FEFCFB] flex justify-center items-center cursor-pointer hover:brightness-95 transition"
                  onClick={() => setModal({key: "oxigen", value: riverParams.oxigen ?? "??"})}
                >
                  <p className=" text-[#0A1128] text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-xs">Oxigenio Dissolvido(mg/L): {riverParams.oxigen ?? "??"}</p>
                </div>
              </div>
              <div className="w-full h-1/3 flex rounded-2xl gap-2 justify-center items-center">
                <div
                  className="w-2/3 h-full rounded-2xl bg-[#FEFCFB] flex justify-center items-center max-sm:text-base cursor-pointer hover:brightness-95 transition"
                  onClick={() => setModal({key: "conductivity", value: riverParams.conductivity ?? "??"})}
                >
                  <p className=" text-[#0A1128] text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-xs">Condutvidade Eletrica(µS/cm): {riverParams.conductivity ?? "??"}</p>
                </div>
                <div
                  className="w-1/3 h-full rounded-2xl bg-[#1282A2] flex justify-center items-center cursor-pointer hover:brightness-90 transition"
                  onClick={() => setModal({key: "turbidity", value: riverParams.turbidity ?? "??"})}
                >
                  <p className=" text-neutral-50 text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-xs">Turbidez: {riverParams.turbidity ?? "??"}</p>
                </div>
              </div>
              <div className="w-full h-1/3 flex rounded-2xl gap-2">
                <div
                  className="w-1/3 h-full rounded-2xl bg-[#1282A2] flex justify-center items-center cursor-pointer hover:brightness-90 transition"
                  onClick={() => setModal({key: "temperature", value: riverParams.temperature ?? "??"})}
                >
                    <p className=" text-neutral-50 text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-xs">Temperatura: {riverParams.temperature ?? "??"}ºC</p>
                </div>
                <div
                  className="w-2/3 h-full rounded-2xl bg-[#FEFCFB] flex justify-center items-center cursor-pointer hover:brightness-95 transition"
                  onClick={() => setModal({key: "pluviometrics", value: riverParams.pluviometrics ?? "??"})}
                >
                    <p className=" text-[#0A1128] text-center max-lg:text-xl text-2xl font-semibold font-['Inter'] max-sm:text-xs">Precipitação(mm): {riverParams.pluviometrics ?? "??"}</p>
                </div>
              </div>
            </div>
            <div className="xl:w-[30rem] xl:h-[40rem] md:w-[40rem] md:h-[50rem] sm:w-[30rem] sm:h-[40rem] w-[18rem] h-[30rem] flex flex-col border-solid border-2 border-[#034078] rounded-2xl p-5">
              <div className=" w-full h-5/7 rounded-2xl">
                <img className="w-full h-full rounded-2xl" src={`../${river.image}`} style={{ objectFit: 'cover' }} />
              </div>
              <div className="h-2/7 w-full flex">
                <div className="flex flex-col w-full justify-center items-start pl-5 gap-5">
                  <div className=" text-neutral-50 max-lg:text-xl text-2xl font-bold font-['Inter']">{river.name}</div>
                  <div className="flex flex-row justify-between items-center w-full">
                    {(() => {
                      const indiceLabels = [
                        "Péssimo",
                        "Ruim",
                        "Razoável",
                        "Bom",
                        "Ótimo"
                      ];
                      const indiceColors = [
                        "bg-red-500",     
                        "bg-orange-500",    
                        "bg-yellow-400",     
                        "bg-green-500",     
                        "bg-blue-900"  
                      ];
                      const idx = typeof riverParams.index === "number" && riverParams.index >= 0 && riverParams.index <= 4 ? riverParams.index : undefined;
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
              </div>
            </div>
        </div>
        <div className="flex justify-start items-center w-full h-40">
            <div className="w-4/7 text-neutral-50/75 max-sm:text-lg text-xl font-normal font-['Inter'] leading-relaxed ml-15 max-xs:text-base">Criado por: <br/>Henrique, Higor, João, Julio e Vinicius.</div>
        </div>
    </div>
  );
}