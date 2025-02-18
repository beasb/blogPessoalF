import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'


interface CardTemasProps{
    tema: Tema   //Indicamos que a pro tema é um Objetp (to tipo da Model) Tema
}

function CardTemas({ tema }: CardTemasProps) {      //Passamos a props temas para o card
  
    return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between '>

        <header className='py-2 px-6 bg-[#7d7370] text-white font-bold text-2xl'>Tema</header>

        <p className='p-8 text-3xl bg-[#EDE4F5] h-full'>{tema.descricao}</p>  
                                                 {/*injetando logica no html  */}
        <div className='flex'>
            
            <Link to={`/editartema/${tema.id}`} className='w-full text-slate-100 bg-[#7d7370] hover:bg-[#645A57] flex items-center justify-center py-2 font-bold'>
            <button>Editar</button>
            </Link>

            <Link to={`/deletartema/${tema.id}`} className='text-slate-100 bg-red-900 hover:bg-red-700 w-full flex items-center justify-center font-bold'>
            <button>Deletar</button>
            </Link>

        </div>
    </div>
  )
}

export default CardTemas