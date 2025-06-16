export type TRiver = {
    id: number,
    name: string,
    image: string,
    index: number | undefined,
    cetesbStationId: number,
    props: {
        ph: number | undefined,
        oxigen: number | undefined,
        conductivity: number | undefined,
        turbidity: number | undefined,
        temperature: number | undefined,
        pluviometrics: number | undefined
    }
};

export type RiverParams = {
    ph: number | undefined,
    oxigen: number | undefined,
    conductivity: number | undefined,
    turbidity: number | undefined,
    temperature: number | undefined,
    pluviometrics: number | undefined
};

const tiete = {
    id: 0,
    name: "Rio Tietê",
    image: "images/Tiete.jpg",
    index: undefined,
    cetesbStationId: 25,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};
const pinheiros = {
    id: 1,
    name: "Rio Pinheiros",
    image: "images/Pinheiros.jpg",
    index: undefined,
    cetesbStationId: 13,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};
const billings = {
    id: 2,
    name: "Reserv. Billings",
    image: "images/Billings.jpg",
    index: undefined,
    cetesbStationId: 8,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};
const guarap = {
    id: 3,
    name: "Reserv. Guarapiranga",
    image: "images/Guarapiranga.jpg",
    index: undefined,
    cetesbStationId: 7,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

const claras = {
    id: 4,
    name: "Reserv. Águas Claras",
    image: "images/AguasClaras.jpg",
    index: undefined,
    cetesbStationId: 9,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

const taiacup = {
    id: 5,
    name: "Reserv. Taiaçupeba",
    image: "images/Taiacup.jpg",
    index: undefined,
    cetesbStationId: 18,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

const itupeva = {
    id: 6,
    name: "Rio Jundiaí",
    image: "images/Itupeva.jpg",
    index: undefined,
    cetesbStationId: 24,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

const branca = {
    id: 7,
    name: "Rio Paraíba do Sul",
    image: "images/Brancas.jpg",
    index: undefined,
    cetesbStationId: 22,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

const sorocaba = {
    id: 8,
    name: "Rio Sorocaba",
    image: "images/Sorocaba.jpg",
    index: undefined,
    cetesbStationId: 12,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

const jaguari = {
    id: 9,
    name: "Rio Jaguari",
    image: "images/Jaguari.jpg",
    index: undefined,
    cetesbStationId: 28,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

const atibaia = {
    id: 10,
    name: "Rio Atibaia",
    image: "images/Atibaia.jpg",
    index: undefined,
    cetesbStationId: 27,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

const piracicaba = {
    id: 11,
    name: "Rio Piracicaba",
    image: "images/Piracicaba.jpg",
    index: undefined,
    cetesbStationId: 29,
    props: { ph: undefined, oxigen: undefined, conductivity: undefined, turbidity: undefined, temperature: undefined, pluviometrics: undefined }
};

export const rivers: TRiver[] = [tiete, pinheiros, billings, guarap, claras, taiacup, itupeva, branca, sorocaba, jaguari, atibaia, piracicaba];

export async function fetchRiverParamsFromSIMQUA(
    stationId: number,
    start: string,
    end: string
): Promise<RiverParams> {
    const url = `https://simqua.cetesb.sp.gov.br/dados/?e=${stationId}&p=&ini=${start}&fim=${end}&tipo=hor&hora=all&classif=1`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error("Erro no fetch SIMQUA:", res.status, res.statusText);
            return {
                ph: undefined,
                oxigen: undefined,
                conductivity: undefined,
                turbidity: undefined,
                temperature: undefined,
                pluviometrics: undefined
            };
        }
        const data = await res.json();

        const params = {
            ph: data?.ph?.estatisticas
                ? Number((data.ph.estatisticas.match(/média:\s*([\d.,]+)/)?.[1] || '').replace(',', '.'))
                : undefined,
            oxigen: data?.oxigenio?.estatisticas
                ? Number((data.oxigenio.estatisticas.match(/média:\s*([\d.,]+)/)?.[1] || '').replace(',', '.'))
                : undefined,
            conductivity: data?.condutividade?.estatisticas
                ? Number((data.condutividade.estatisticas.match(/média:\s*([\d.,]+)/)?.[1] || '').replace(',', '.'))
                : undefined,
            turbidity: data?.turbidez?.estatisticas
                ? Number((data.turbidez.estatisticas.match(/média:\s*([\d.,]+)/)?.[1] || '').replace(',', '.'))
                : undefined,
            temperature: data?.temperatura?.estatisticas
                ? Number((data.temperatura.estatisticas.match(/média:\s*([\d.,]+)/)?.[1] || '').replace(',', '.'))
                : undefined,
            pluviometrics: data?.precipitacao?.estatisticas
                ? Number((data.precipitacao.estatisticas.match(/média:\s*([\d.,]+)/)?.[1] || '').replace(',', '.'))
                : undefined,
        };
        return params;
    } catch (error) {
        console.error("Erro ao buscar/parsing dados do SIMQUA:", error);
        return {
            ph: undefined,
            oxigen: undefined,
            conductivity: undefined,
            turbidity: undefined,
            temperature: undefined,
            pluviometrics: undefined
        };
    }
}

// ...código anterior...

// Função para calcular o índice de qualidade do rio
function calcularQI(param: number | undefined, faixas: [number, number, number, number], valores: [number, number, number, number, number]) {
    if (param === undefined) return 20;
    if (param >= faixas[0] && param <= faixas[1]) return valores[0];
    if (param >= faixas[2] && param <= faixas[3]) return valores[1];
    if (param > faixas[3]) return valores[2];
    return valores[3];
}

function qiOxigenio(oxigen: number | undefined) {
    if (oxigen === undefined) return 20;
    if (oxigen > 7) return 100;
    if (oxigen > 5) return 80;
    if (oxigen > 3) return 50;
    return 20;
}

function qiPH(ph: number | undefined) {
    if (ph === undefined) return 20;
    if (ph >= 7 && ph <= 8) return 100;
    if ((ph >= 6.5 && ph < 7) || (ph > 8 && ph <= 8.5)) return 80;
    if ((ph >= 6 && ph < 6.5) || (ph > 8.5 && ph <= 9)) return 50;
    return 20;
}

function qiTurbidez(turb: number | undefined) {
    if (turb === undefined) return 20;
    if (turb < 5) return 100;
    if (turb < 10) return 80;
    if (turb < 50) return 50;
    return 20;
}

function qiTemperatura(temp: number | undefined) {
    if (temp === undefined) return 20;
    if (temp >= 20 && temp <= 28) return 100;
    if ((temp >= 18 && temp < 20) || (temp > 28 && temp <= 30)) return 80;
    if ((temp >= 16 && temp < 18) || (temp > 30 && temp <= 32)) return 50;
    return 20;
}

function qiCondutividade(cond: number | undefined) {
    if (cond === undefined) return 20;
    if (cond < 100) return 100;
    if (cond < 200) return 80;
    if (cond < 500) return 50;
    return 20;
}

// Pesos oficiais dos parâmetros usados
const pesosOriginais = {
    oxigen: 0.17,
    ph: 0.12,
    turbidity: 0.08,
    temperature: 0.10,
    conductivity: 0.08 // usando como substituto de resíduo total
};
const somaPesos = 0.17 + 0.12 + 0.08 + 0.10 + 0.08;
const pesos = {
    oxigen: 0.17 / somaPesos,
    ph: 0.12 / somaPesos,
    turbidity: 0.08 / somaPesos,
    temperature: 0.10 / somaPesos,
    conductivity: 0.08 / somaPesos
};

export function calcularIndiceCETESB(params: RiverParams): number {
    // Calcula qi para cada parâmetro
    const qOxigen = qiOxigenio(params.oxigen);
    const qPH = qiPH(params.ph);
    const qTurb = qiTurbidez(params.turbidity);
    const qTemp = qiTemperatura(params.temperature);
    const qCond = qiCondutividade(params.conductivity);

    // IQA = Π(qi^wi)
    const iqa =
        Math.pow(qOxigen, pesos.oxigen) *
        Math.pow(qPH, pesos.ph) *
        Math.pow(qTurb, pesos.turbidity) *
        Math.pow(qTemp, pesos.temperature) *
        Math.pow(qCond, pesos.conductivity);

    if (iqa >= 80) return 4;
    if (iqa >= 52) return 3;
    if (iqa >= 37) return 2;
    if (iqa >= 20) return 1;
    return 0;
}