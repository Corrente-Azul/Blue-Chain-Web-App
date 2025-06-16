import { NextRequest } from "next/server";
import { fetchRiverParamsFromSIMQUA, calcularIndiceCETESB } from "@/util/riverProps";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const stationId = Number(searchParams.get("stationId"));
    const start = searchParams.get("start") || "";
    const end = searchParams.get("end") || "";

    if (!stationId || !start || !end) {
        return new Response(JSON.stringify({ error: "Parâmetros stationId, start e end são obrigatórios." }), { status: 400 });
    }

    const params = await fetchRiverParamsFromSIMQUA(stationId, start, end);
    const index = calcularIndiceCETESB(params);

    // Retorna os parâmetros junto com o índice calculado
    return new Response(JSON.stringify({ ...params, index }), { status: 200 });
}