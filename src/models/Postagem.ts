import Tema from './Tema'
import Usuario from './Usuario'

export default interface Postagem {
    id: number
    titulo: string
    texto: string
    data: string
    tema: Tema | null
    usuario: Usuario | null
}

// Models - onde nós fazemos as tipagens dos objetos ou variavels de acordo com o que esta no back