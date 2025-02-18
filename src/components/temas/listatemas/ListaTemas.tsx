import { useContext, useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Tema from "../../../models/Tema"
import CardTemas from "../cardtemas/CardTemas"
import { buscar } from "../../../services/Service"

function ListaTemas() {

    // Hook para gerenciar a navegação do usuario
    const navigate = useNavigate()

    // Variavel de Estado que recebe os temas do back em um Array
    const [temas, setTemas] = useState<Tema[]>([])   // temas é uma array [ { id, descricao}] | temas: [] - um array vazio

    // useContext acessa o Context, buscando as infos necessarias
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    // Função que chama a service buscar() para receber e guardar os temas
    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    // Esse useEffect verifica se quando o usuario acessou esse componente, ele tem um token valido
    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado!")
            navigate('/')
        }
    }, [token])

    // Esse useEffect dispara a função de busca sempre quando o componente é renderizado
    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    return (
    
        <>
        
        {temas.length === 0 && (<DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto" />)}
          {/* injetando logica do js */}
            <div className="flex justify-center w-full my-4">
                
                <div className="conteiner flex flex-col">
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temas.map((tema) => (<CardTemas key={tema.id} tema={tema} />  ))} 
                        {/* Map(): para cada item do array, o map() passa os dados para o card */}
                        {/* Key serve como uma ferramente para alterar\deletar de um item sem ter que renderizar tudo de novo */}
                    </div>

                </div>

            </div>

        </>
 )
}

export default ListaTemas