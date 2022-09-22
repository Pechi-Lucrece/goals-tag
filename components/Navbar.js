import Image from 'next/image'
import logo from '../public/logo.png'

export default function Navbar(){
    return(
        <div className={"flex bg-pink-100 p-2 font-bold border-round"}>

            <Image src={logo} width={80}  height={80}/>

            <div className={"flex m-2 justify-content-between "}>

                <h1 className={"text-red-400"}>Goals Tag</h1>

                {/**navigation */}
                <div className={"flex flex-row justify-content-between"}>
                    <h2 className={"flex align-items-center justify-content-center w-8rem text-blue-700 border-round mr-2"}>Accueil</h2>
                    <h2 className={"flex align-items-center justify-content-center w-8rem text-blue-700 border-round mr-2"}>Services</h2>
                    <h2 className={"flex align-items-center justify-content-center w-8rem text-blue-700 border-round mr-2"}>A Propos</h2>
                </div>

            </div>
        </div>
    )
}