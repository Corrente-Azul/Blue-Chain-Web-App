const tiete = {id: 0, name: "Rio Tietê", image: "images/rioTiete.webp", index: 0, props:{ ph: 6.95, oxigen: 0.16, conductivity: 583.07, turbidity: 49.53, temperature: 22, pluviometrics: undefined }}

const pinheiros = {id: 1, name: "Rio Pinheiros", image: "images/rioPinheiros.jpg", index: 1, props:{ ph: 6.89, oxigen: 4.45, conductivity: 202.29, turbidity: 25.28, temperature: 21.95, pluviometrics: 27.20 }}

const billings = {id: 2, name: "Reserv. Billings", image: "images/reservBillings.jpg", index: 2, props:{ ph: 9.08, oxigen: 10.97, conductivity: 161.78, turbidity: 16.15, temperature: 22.25, pluviometrics: 17.40 }}

const guarap = {id: 3, name: "Reserv. Guarapiranga", image: "images/reservGuarapiranga.jpg", index: 2, props:{ ph: 7.43, oxigen: 7.48, conductivity: 133.61, turbidity: 7.99, temperature: 20.91, pluviometrics: 0.00 }}

type TRiver = {
    id: number,
    name: string,
    image: string,
    index: number,
    props: {
        ph: number,
        oxigen: number,
        conductivity: number
        turbidity: number,
        temperature: number,
        pluviometrics: number | undefined
    }
}

export const rivers:TRiver[] = [tiete, pinheiros, billings, guarap]