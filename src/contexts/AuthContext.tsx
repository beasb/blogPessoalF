import { createContext, ReactNode, use, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps) {
    
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    }) 

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin (usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            alert("O usuário foi autenticado com sucesso!")
        }catch (error) {
            alert("Os Dados do usuário estão inconsistentes!")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading}}>
            {/* se refere a aplicação a ser renderizada (no app.tsx) */}
        {children}     
        </AuthContext.Provider>
    )
}

// AuthContext - armazenando variaveis e informações sensiveis, como o token, para poder se compartilhado por varios componentes diferentes
// handleLogin - chama a service para fazer o tratamento, vai ver se a req foi bem sucedida e armazenar os dados, como o token, no AuthContex para os outros componentes