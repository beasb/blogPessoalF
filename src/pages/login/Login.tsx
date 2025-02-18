import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

    const navigate = useNavigate();
//desestruturação p colocar variaveis e funções     Acessa o Context      - como se fosse um select
    const { usuario, handleLogin, isLoading } = useContext(AuthContext)
 
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin   // está dizendo que objeto = Usuariologin, sem preciar colocar todos os campos
    )

// UserEffect obseva a variavel para ver se ela foi atualizada ou não, vai ver se a var está vazia ou não
//No caso esta observando o token, para ver se a pessoa foi logada ou não, se sim a envia para a /home
    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    //Se conecta aos inputs do form, sempre que uma letra for digitada, essa função é chamada e salva as info na var de estatdo setUsuarioLogin
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({   // atualiza o estado, recebe apenas 1 parametro, por isso coloca a {} para colocar os 2
            ...usuarioLogin,       //spread operator, pega os atributos e os espalha
            [e.target.name]: e.target.value   // atraves do aparmetro 'e' está acessando o input, acessa o name e o valor do 
            //é uma estruturra dinamica, que pode mudar, por isso usa []
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin) // handleLogin para enviar os dados para o back
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 
                    h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4"
                    onSubmit={login}>
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            //Onchange é disparado quando algo é digitado
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}   //uma função chama a outra, 
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
                        />
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-[#b191cd] flex justify-center
                                   hover:bg-[#dec3f6] text-white w-1/2 py-2">
                                    
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>
                        }
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-[#b191cd] hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;

// tudo isso é para enviar uma req para a service e o axios fazer a tradução para json para o back e trazer as informações