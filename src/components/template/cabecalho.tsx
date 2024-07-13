import Logo from "./logo";
import MenuUsuario from "./menuUsuario";

export default function Cabecalho() {
    return <header className="
            flex
            items-center
            gap-5
            px-5
            bg-zinc-700
            h-20
            "
            >
            <Logo />
            <span className="flex-grow">Cabeçalho</span>
            <MenuUsuario />
        </header>
}