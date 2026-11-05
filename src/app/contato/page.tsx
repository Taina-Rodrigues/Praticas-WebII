import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato",
};

export default function Contato() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Contato
            </h1>
            <p className="mt-3 text-lg text-zinc-400">
                Entre em contato conosco
            </p>
        </main>
    )
}