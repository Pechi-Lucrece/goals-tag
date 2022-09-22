import React from 'react'
import { Button } from 'primereact/button'

export default function Main(){
    return(
        <div className={"bg-blue-50"}>
            {/**description de l'application */}
            <div className={"flex-1 flex-wrap text-justify justify-content-center max-w-30rem px-5 m-2 border-round"}>
                <h1 className={"justify-content-center font-bold text-blue-700"}>GoalsTag</h1>
                <p className={"flex-1 flex size-xlarge"}>
                    Une application qui vous permet de bien définir vos objectfs spécifiques/opérationnels.
                    C'est un outil qui est d'une aide pédagogique aux enseignant et permettra de choisir le matériel,
                    la méthode pédagogique et les stratégies apropries. Ainsi l'apprenant n'est pas perdue pendant le cours
                </p>
            </div>

            <Button label="Commencer" icon="pi pi-user" iconPos="right" className="p-button-success m-5"/>

        </div>
    )
}