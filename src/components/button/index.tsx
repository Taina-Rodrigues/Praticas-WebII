"use client"

export default function MyButton(){
    return(
        <main>
            <button className="font-bold bg-yellow-500 text-black mt-3 cursor-pointer" onClick={()=>{
                alert("VOCÊ GANHOU UM PIX PREMIADO")
            }}>
                CLIQUE AQUI
            </button>
        </main>
    )
}