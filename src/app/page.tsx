import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#0A1128] relative">
      <img
        className="w-max h-screen absolute right-1 top-[0px]"
        src="images/SShapedRiver.svg"
        style={{ objectFit: 'cover' }}
      />
      <div className="h-[264px] absolute bottom-[0px] left-[0px] right-[0px]">
        <div className="w-[184px] h-[40px] flex justify-start items-start flex-row gap-2 absolute left-[80px] top-[176px]">
          <div className="w-[40px] h-[40px] flex justify-center items-center flex-row p-2 rounded">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.03998C17.4998 2.03998 21.9997 6.52972 22 12.0595C22.0054 14.4451 21.158 16.7548 19.6104 18.5703C18.0626 20.3857 15.916 21.5877 13.5596 21.9599V14.9599H15.8896L16.3398 12.0595H13.5596V10.1796C13.5597 9.38975 13.9506 8.62006 15.1904 8.62006H16.4502V6.15033C16.4502 6.15033 15.3097 5.9599 14.2197 5.9599C11.93 5.96001 10.4406 7.33992 10.4404 9.84955V12.0595H7.90039V14.9599H10.4404V21.9599C5.66043 21.2099 2 17.0595 2 12.0595C2.00025 6.52972 6.50016 2.03998 12 2.03998Z"
                  fill="#989898"
                />
              </svg>
            </div>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center flex-row p-2 rounded">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 3C19.5304 3 20.039 3.21086 20.4141 3.58594C20.7891 3.96101 21 4.46957 21 5V19C21 19.5304 20.7891 20.039 20.4141 20.4141C20.039 20.7891 19.5304 21 19 21H5C4.46957 21 3.96101 20.7891 3.58594 20.4141C3.21086 20.039 3 19.5304 3 19V5C3 4.46957 3.21086 3.96101 3.58594 3.58594C3.96101 3.21086 4.46957 3 5 3H19ZM5.5 18.5H8.26953V10.1299H5.5V18.5ZM15.2402 9.94043C14.3902 9.94043 13.3999 10.4602 12.9199 11.2402V10.1299H10.1299V18.5H12.9199V13.5703C12.9199 12.8005 13.5398 12.1702 14.3096 12.1699C14.6808 12.1699 15.0373 12.3176 15.2998 12.5801C15.5624 12.8426 15.71 13.199 15.71 13.5703V18.5H18.5V13.2002C18.5 12.3356 18.1563 11.5059 17.5449 10.8945C16.9336 10.2834 16.1046 9.94049 15.2402 9.94043ZM6.87988 5.19043C6.43171 5.19046 6.00148 5.36766 5.68457 5.68457C5.36766 6.00148 5.19046 6.43171 5.19043 6.87988C5.19043 7.80984 5.94994 8.55951 6.87988 8.55957C7.32545 8.55957 7.7533 8.38342 8.06836 8.06836C8.38342 7.7533 8.55957 7.32545 8.55957 6.87988C8.55951 5.94994 7.80984 5.19043 6.87988 5.19043Z"
                  fill="#989898"
                />
              </svg>
            </div>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center flex-row p-2 rounded">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5C16.19 5 18.8001 5.16043 19.8301 5.44043C20.7299 5.69044 21.3096 6.27009 21.5596 7.16992C21.6896 7.63992 21.7798 8.27031 21.8398 9.07031C21.9098 9.87019 21.9404 10.5602 21.9404 11.1602L22 12C22 14.19 21.8396 15.8001 21.5596 16.8301C21.3096 17.7299 20.7299 18.3096 19.8301 18.5596C19.3601 18.6896 18.4997 18.7798 17.1797 18.8398C15.8798 18.9098 14.6898 18.9404 13.5898 18.9404L12 19C7.81 19 5.19992 18.8396 4.16992 18.5596C3.27009 18.3096 2.69044 17.7299 2.44043 16.8301C2.31043 16.3601 2.22016 15.7297 2.16016 14.9297C2.09017 14.1298 2.05957 13.4398 2.05957 12.8398L2 12C2 9.81 2.16043 8.19992 2.44043 7.16992C2.69044 6.27009 3.27009 5.69044 4.16992 5.44043C4.63992 5.31043 5.50031 5.22016 6.82031 5.16016C8.12019 5.09017 9.31024 5.05957 10.4102 5.05957L12 5ZM10 15L15.1904 12L10 9V15Z"
                  fill="#989898"
                />
              </svg>
            </div>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center flex-row p-2 rounded">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.2002 2C19.4 2.00011 21.9999 4.59996 22 7.7998V16.2002C21.9999 17.7384 21.3884 19.2131 20.3008 20.3008C19.2131 21.3884 17.7384 21.9999 16.2002 22H7.7998C4.59996 21.9999 2.00011 19.4 2 16.2002V7.7998C2.00005 6.26162 2.61155 4.78688 3.69922 3.69922C4.78688 2.61155 6.26162 2.00005 7.7998 2H16.2002ZM7.59961 4C6.64497 4.0001 5.72973 4.37965 5.05469 5.05469C4.37965 5.72973 4.0001 6.64497 4 7.59961V16.4004C4.00021 18.3901 5.60992 19.9998 7.59961 20H16.4004C17.355 19.9999 18.2703 19.6204 18.9453 18.9453C19.6204 18.2703 19.9999 17.355 20 16.4004V7.59961C19.9998 5.60992 18.3901 4.00021 16.4004 4H7.59961ZM12 7C13.3261 7 14.5975 7.52716 15.5352 8.46484C16.4728 9.40253 17 10.6739 17 12C17 13.3261 16.4728 14.5975 15.5352 15.5352C14.5975 16.4728 13.3261 17 12 17C10.6739 17 9.40253 16.4728 8.46484 15.5352C7.52716 14.5975 7 13.3261 7 12C7 10.6739 7.52716 9.40253 8.46484 8.46484C9.40253 7.52716 10.6739 7 12 7ZM12 9C11.2044 9 10.4415 9.3163 9.87891 9.87891C9.3163 10.4415 9 11.2044 9 12C9 12.7956 9.3163 13.5585 9.87891 14.1211C10.4415 14.6837 11.2044 15 12 15C12.7956 15 13.5585 14.6837 14.1211 14.1211C14.6837 13.5585 15 12.7956 15 12C15 11.2044 14.6837 10.4415 14.1211 9.87891C13.5585 9.3163 12.7956 9 12 9ZM17.25 5.5C17.5815 5.5 17.8994 5.63179 18.1338 5.86621C18.3682 6.10063 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3682 7.39937 18.1338 7.63379C17.8994 7.86821 17.5815 8 17.25 8C16.9185 8 16.6006 7.86821 16.3662 7.63379C16.1318 7.39937 16 7.08152 16 6.75C16 6.41848 16.1318 6.10063 16.3662 5.86621C16.6006 5.63179 16.9185 5.5 17.25 5.5Z"
                  fill="#989898"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-[#FFFFFF] font-['Inter'] font-medium absolute left-[88px] top-[78px]">
          Criado por: Henrique, Higor, João, Julio e Vinicius. 
        </div>
      </div>
      <div className="w-[554px] h-[325px] flex justify-start items-start flex-col gap-10 absolute left-[80px] top-[223px]">
        <div className="flex self-stretch justify-start items-start flex-col gap-6">
          <p className="self-stretch text-[#FEFCFB] text-[64px] font-['Inter'] font-bold tracking-[-1.28px]">
            Corrente Azul
          </p>
          <p className="text-[rgba(254,252,251,0.75)] text-2xl font-['Inter']">
            Venha conosco em busca de conhecer as melhores e mais atualizadas
            informações sobre os rios da cidade de São Paulo
          </p>
        </div>
        <div className="flex justify-start items-center flex-row gap-2 py-[20px] px-[32px] bg-[#1282A2] rounded-lg shadow-[_0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <span className="text-[#0A1128] text-2xl font-['Inter'] font-medium leading-normal">
            Ver Rios
          </span>
        </div>
      </div>
      <div className="h-[164px] bg-[rgba(10,17,40,0.3)] absolute top-[0px] left-[0px] right-[0px]">
        <div className="w-[398px] h-[52px] flex justify-end items-center flex-row gap-[48px] absolute right-[92px] top-[56px]">
          <span className="text-[#FEFCFB] text-xl font-['Inter'] font-medium">
            Sobre
          </span>
          <span className="text-[#FEFCFB] text-xl font-['Inter'] font-medium">
            Contato
          </span>
          <div className="w-[100px] flex justify-center items-center flex-row gap-2 py-3.5 px-[24px] bg-[#FEFCFB] rounded-lg shadow-[_0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <span className="text-[#0A1128] font-['Inter'] font-medium">
              Mapa
            </span>
          </div>
        </div>
        <img
          className="w-[150px] h-[150px] absolute left-[56px]"
          style={{ top: 'calc(100% - 164px + 7px)', objectFit: 'cover' }}
          src="images/Logo.png"
        />
        <span
          className="text-[#FEFCFB] text-xl font-['Inter'] font-medium absolute left-[221px]"
          style={{ top: 'calc(100% - 164px + 67px)' }}>
          Corrente Azul SP
        </span>
      </div>
    </div>
	);
}
