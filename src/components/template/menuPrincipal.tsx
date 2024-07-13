import { IconHexagonNumber1, IconLayout, IconLayout2, IconRotate2 } from "@tabler/icons-react";
import MenuItem from "./menuItem";

export default function MenuPrincipal() {
    return (
        <aside className="w-80 bg-zinc-900">
            <nav className="flex flex-col p-5">
                <MenuItem link="/primeiro">
                    <IconHexagonNumber1 />
                    <span>COMPONENTE</span>
                </MenuItem>
                <MenuItem link="/flexbox">
                    <IconLayout2 />
                    <span>FLEXBOX</span>
                </MenuItem>
                <MenuItem link="/pagina">
                    <IconLayout />
                    <span>PÁGINA</span>
                </MenuItem>
                <MenuItem link="/estado">
                    <IconRotate2 />
                    <span>ESTADO</span>
                </MenuItem>
            </nav>
        </aside>
    )
}