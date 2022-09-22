import Image from 'next/image'
import github from '../public/github.png'
import linkedin from '../public/linkedin.png'
import mail from '../public/mail.jpg'
import tweeter from '../public/tweeter.png'

export default function Footer(){
    return(
        <div className={"bg-gray-200"}>
            <div className={"flex"}>

                {/**avis des utilisateur */}
                <div className={"flex-1 flex-wrap text-justify justify-content-center max-w-30rem px-5 m-2 border-round bg-pink-50"}>
                    <h2 className={"justify-content-center font-bold text-center text-blue-700"}>Avis des utilisateurs</h2>
                    <p>Cette plateforme est vraiment géniale.</p>
                    <p>Grâce à cette plateforme je prends moins de temps pour définir mes objectifs spécifique.</p>
                    <p>Cette plateformem'est d'une grande aide.</p>
                    <p>Géniale cette application, désormais je vais vite dans la péparation de mes leçons.</p>
                    <p>Un objectif bien défini garantie un apprentissage reussi.</p>
                </div>

                {/** barre de navigation */}
                <div className={"flex-1 flex-wrap justify-content-center max-w-30rem px-5 m-2 border-round bg-pink-50"}>
                    <h2 className={"justify-content-center font-bold text-center text-blue-700"}>Naviguer sur le site </h2>
                    <div className={"flex flex-column font-bold align-items-center text-gray-800"}>
                        <h3>Services</h3>
                        <h3> A Propos</h3>
                    </div>
                </div>

                {/**reseaux sociaux */}
                <div className={"flex-1 flex-wrap flex-row text-center max-w-30rem justify-content-center  px-5 m-2 border-round bg-pink-50"}>
                    <h2 className={"justify-content-center font-bold text-center text-blue-700"}>Contact</h2>
                    <div className={"flex-auto "}>
                        <Image src={mail} width={30}  height={30} />
                        <Image src={linkedin} width={30}  height={30} />
                        <Image src={tweeter} width={30}  height={30} />
                        <Image src={github} width={30}  height={30} />
                    </div>
                </div>
            </div>

            <div className={"flex font-bold size-large align-items-center justify-content-center text-gray-800"}> 
                <h3>copyright 2022</h3>
            </div>
        </div>
    )
}