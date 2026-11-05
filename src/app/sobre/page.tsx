import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SOBRE",
};

export default function Contato() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Sobre Nós
            </h1>
        </main>
    )
}