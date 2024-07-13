import Caixa from "@/components/Caixa";
import Pagina from "@/components/template/Pagina";

export default function Page() {
    return (
            <div className="h-96 w-[500]">
                <h1>Flexbox</h1>
                <div className="
                  bg-zinc-700
                    h-96
                    flex
                    justify-around
                    items-start
                    gap-5
                    "
                >
                    <Caixa texto="#1" className="w-24 justify-center" />
                    <Caixa texto="#2" className="justify-end flex-grow" />
                    <Caixa texto="#3" className="w-20 justify-center" />
                </div>
            </div>
    )
}