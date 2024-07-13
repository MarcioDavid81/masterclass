import Cabecalho from "./cabecalho";
import MenuPrincipal from "./menuPrincipal";
import Rodape from "./rodape";

export default function Pagina(props: any) {
    return (
        <div className="bg-gradient-to-r from-black to-zinc-800 flex flex-col h-screen">
            <Cabecalho />
            <div className="flex flex-grow">
                <MenuPrincipal />
                <div className="flex
                flex-col flex-1">
                    <main className="p-7 flex-1">
                        {props.children}
                    </main>
                    <Rodape />
                </div>
            </div>
        </div>
    );
}