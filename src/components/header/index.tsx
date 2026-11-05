import Link from "next/link"

export default function Menu(){
    return(
        <header className="w-full border-b border-zinc-400 bg-zinc-500">
            <nav className="flex items-center justify-center">
                <ul className="flex list-none gap-6 py-6 font-extrabold text-black">
                    <li>
                        <Link href="/">INÍCIO</Link>
                    </li>
                    <li>
                        <Link href="/sobre">SOBRE</Link>
                    </li>
                    <li>
                        <Link href="/contato">CONTATO</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}