import { LinkedinLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react"
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
    
    let data = new Date().getFullYear()

    const { usuario } =useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {
        
        component = (
            <div className="flex justify-center bg-[#645A57] text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">Blog Pessoal Gen | Copyright: {data}</p>
                <p className="text-lg">Acesse nossas redes sociais</p>
                <div className="flex gap-1">
                    <LinkedinLogo size={40} weight='bold' />
                    <InstagramLogo size={40} weight='bold' />
                    <FacebookLogo size={40} weight='bold' />
                </div>
            </div>
        </div>
        )
    }

    return (

        <>      
            {component}
        </>

    )
}

export default Footer