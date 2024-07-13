import { IconDeviceImac } from "@tabler/icons-react"

export default function Rodape() {
    return(
        <footer className="flex justify-end items-center bg-zinc-700 p-4 text-white gap-2 text-xs">
            <IconDeviceImac size={18} className="text-blue-500" />
            <p className="text-zinc-400">Desenvolvido por <a href="https://www.marciodavid.com" target="_blank" className="text-green-500">Marcio David </a>- {new Date().getFullYear()}</p>
        </footer>
    )
}