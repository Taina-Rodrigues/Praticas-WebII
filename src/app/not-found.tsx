import Link from "next/link"

export default function NotFound(){
    return(
        <main>
            <h1 className="bg-red-500 text-center">404</h1>
            <h2 className="text-center">PÁGINA NÃO ENCONTRADA</h2>

           <Link href="/" className="bg-yellow-400">VOLTAR</Link> 
        </main>
    )
}