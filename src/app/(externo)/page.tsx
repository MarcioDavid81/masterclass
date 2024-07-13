import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col justify-center items-center w-full h-96">
        <IconDashboard size={100} stroke={0.5} className="text-zinc-500" />
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-black">Olá Usuário</h1>
          <p className="text-lg text-zinc-400">Seja bem vindo ao sistema!</p>
        </div>
        <div className="mt-5">
          <Link 
            href="/primeiro"
            className="
            bg-blue-500
            rounded-md
            px-4
            py-2
            "
            >
              Entrar
          </Link>
        </div>
      </div>
  );
}
