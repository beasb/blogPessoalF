import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"
import Ola from "../../assets/blogpessoalimg.svg"
import BemVinde from "../../assets/bemvinde2.svg"

function Home() {        
  
   return (
      <>
      
      <div className="bg-[#eee6e3] flex justify-center">
         
         <div className="items-center justify-center flex flex-col w-1/2 text-black">
           
            <div className="flex flex-col gap-4 items-center justify-center py-4">
               {/* <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2> */}

               <div className="flex justify-center items-center">
                  <img src={BemVinde} alt="Imagem Página Home" className='w-full'/>
               </div>
            
               <p className="text-2xl font-bold">Expresse Aqui Seus Pensamentos e Opniões!</p>
             
            <div className="flex justify-around gap-4">
               <div className="flex justify-around gap-4">
               <ModalPostagem />
               </div>
            </div>
            </div>

         </div>
      </div>
               <ListaPostagens />
      </>
  )
}

export default Home