"use client" 

import{
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    } from "@/components/ui/card";
    import {Label} from "@/components/ui/label";
    import {Input} from "@/components/ui/input";
    import {Button} from "@/components/ui/button";

    export default function ContactForm(){
        return(
            <Card className="w-full max-w-md  font-sans">
                <CardHeader>
                    <CardTitle className="text-3x1 text-center font-bold" >
                        ENTRE EM CONTATO
                    </CardTitle>
                    <CardDescription className="text-center">
                        Preencha o formulário. Entraremos em contato em breve.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Label htmlFor="name" className="mt-4">NOME:</Label>
                    <Input type="text" id="name" placeholder="DIGITE SEU NOME..." className="mt-2" />
                    <Label htmlFor="email" className="mt-2 font-bold">EMAIL:</Label>
                    <Input type="email" id="email" placeholder="taina@email.com"className="mt-2"/>
                    <Label htmlFor="message" className="mt-2 font-bold"> MENSAGEM:</Label>
                    <Input type="text" id="message" placeholder="DIGITE UMA MENSAGEM PARA NOSSA EQUIPE" className="mt-2"/>
                    <Label htmlFor="phone" className="mt-2 font-bold">TELEFONE:</Label>
                    <Input type="tel" id="phone" placeholder="(88)91234-1234)" className="mt-2"/>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button className="bg-green-700 font-bold cursur-pointer hover:bg-yellow-500" onClick={()=>{
                        alert ("MENSAGEM ENVIADA COM SUCESSO!!")
                    }}>
                        ENVIAR
                    </Button>
                </CardFooter>
            </Card>

        )
    }