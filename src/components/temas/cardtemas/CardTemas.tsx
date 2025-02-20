import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'


interface CardTemasProps{
    tema: Tema   //Indicamos que a pro tema é um Objetp (to tipo da Model) Tema
}

function CardTemas({ tema }: CardTemasProps) {      //Passamos a props temas para o card
  
    return (
    <div className='border-2 border-[#eee6e3] flex flex-col rounded-2xl overflow-hidden justify-between '>

        <header className='py-2 px-6 bg-white font-bold text-2xl'>Tema</header>

        <p className='p-8 text-3xl bg-[#eee6e3] h-full'>{tema.descricao}</p>  
                                                 {/*injetando logica no html  */}
        <div className='flex'>
            
            <Link to={`/editartema/${tema.id}`} className='w-full  bg-white hover:bg-[#eee6e3] flex items-center justify-center py-2 font-bold'>
            <button>Editar</button>
            </Link>

            <Link to={`/deletartema/${tema.id}`} className=' bg-white hover:bg-red-700 w-full flex items-center justify-center font-bold'>
            <button>Deletar</button>
            </Link>

        </div>
    </div>
  )
}

export default CardTemas