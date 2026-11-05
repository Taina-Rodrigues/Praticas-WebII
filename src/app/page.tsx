import Link from "next/link"
import MyButton from "@/components/button"

export default function Home(){

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl cursor-pointer"
      >
        Bem Vindo Ao Meu Site
      </h1>
      <p className="mt-3 text-lg text-zinc-400">
        Este é um site de exemplo criado com Next.js e Tailwind CSS.
      </p>

      <MyButton />

    </main>
  )
}

