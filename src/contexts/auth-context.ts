// import React, { createContext, useState, useEffect, useContext } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// import api from '@helpers/api'
// import * as autenticacao from '@services/autenticacao'
// import usuarioService, { UsuarioResponse } from '@services/usuario'

// import {
//   authGoogleAccount,
//   authFacebookAccount,
//   phoneNumberConfirmCode,
//   logout,
// } from '../clients/firebase-auth'

// interface AutenticacaoContextData {
//   autenticado: boolean
//   usuario: UsuarioResponse | null
//   carregando: boolean
//   entrar(login: string, senha: string): Promise<void>
//   googleAuth(): Promise<void>
//   facebookAuth(): Promise<void>
//   phoneNumberAuth(telefone: string, code: string): Promise<void>
//   actualizarToken(): Promise<void>
//   removerConta(): Promise<void>
//   sair(): Promise<void>
//   cadastrarComEmailOuTelefoneSenha(usuario: NovoUsuario): Promise<void>
// }

// interface NovoUsuario {
//   nome: string
//   emailOuTelefone: string
//   senha: string
// }

// interface ProfileGoogle {
//   aud: string
//   azp: string
//   email: string
//   email_verified: boolean
//   exp: number
//   family_name: string
//   given_name: string
//   iat: number
//   iss: string
//   locale: string
//   name: string
//   picture: string
//   sub: number
//   providerId: string
// }

// const AutenticacaoContext = createContext<AutenticacaoContextData>({} as AutenticacaoContextData)

// type Props = {
//   children?: React.ReactNode
// }

// export const AutenticacaoProvider: React.FC<Props> = ({ children }) => {
//   const [usuario, setUsuario] = useState<UsuarioResponse | null>(null)
//   const [carregando, setCarregando] = useState(true)

//   useEffect(() => {
//     async function carregarDadosArmazenados() {
//       setCarregando(true)

//       const dados = await AsyncStorage.multiGet(['@BaratoApp:usuario', '@BaratoApp:token'])

//       const usuarioStorage = dados[0][1]
//       const tokenStorage = dados[1][1]

//       if (usuarioStorage && tokenStorage) {
//         api.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`
//         setUsuario(JSON.parse(usuarioStorage))
//       }

//       setCarregando(false)
//     }

//     carregarDadosArmazenados()
//   }, [])

//   async function entrar(login: string, senha: string) {
//     const response = await autenticacao.entrarComEmailOuTelefoneESenha(login, senha)

//     setUsuario(response?.usuario)
//     api.defaults.headers.common.Authorization = `Bearer ${response.token}`

//     await AsyncStorage.multiSet([
//       ['@BaratoApp:usuario', JSON.stringify(response.usuario)],
//       ['@BaratoApp:token', response.token],
//     ])
//   }

//   async function googleAuth() {
//     const { additionalUserInfo } = await authGoogleAccount()

//     if (additionalUserInfo) {
//       const { given_name, family_name, email, picture } =
//         additionalUserInfo?.profile as ProfileGoogle

//       const nome = `${given_name} ${family_name}`

//       const response = await autenticacao.entrarComContaGoogle({ nome, email })

//       setUsuario({
//         id: response.usuario.id,
//         nome,
//         email,
//         foto_url: picture,
//         telefone: response.usuario.telefone,
//         conta_facebook: false,
//         conta_google: true,
//       })

//       api.defaults.headers.common.Authorization = `Bearer ${response.token}`

//       await AsyncStorage.multiSet([
//         ['@BaratoApp:usuario', JSON.stringify(usuario)],
//         ['@BaratoApp:token', response.token],
//       ])
//     }
//   }

//   async function facebookAuth() {
//     const { additionalUserInfo } = await authFacebookAccount()

//     if (additionalUserInfo) {
//       const { given_name, family_name, email, picture } =
//         additionalUserInfo?.profile as ProfileGoogle

//       const nome = `${given_name} ${family_name}`

//       const response = await autenticacao.entrarComContaFacebook({ nome, email })

//       setUsuario({
//         id: response.usuario.id,
//         nome,
//         email,
//         foto_url: picture,
//         telefone: response.usuario.telefone,
//         conta_facebook: false,
//         conta_google: true,
//       })

//       api.defaults.headers.common.Authorization = `Bearer ${response.token}`

//       await AsyncStorage.multiSet([
//         ['@BaratoApp:usuario', JSON.stringify(usuario)],
//         ['@BaratoApp:token', response.token],
//       ])
//     }
//   }

//   async function phoneNumberAuth(telefone: string, code: string) {
//     const confirm = await phoneNumberConfirmCode(code)

//     if (confirm?.additionalUserInfo) {
//       const response = await autenticacao.entrarComTelefone(telefone)

//       setUsuario(response.usuario)

//       api.defaults.headers.common.Authorization = `Bearer ${response.token}`

//       await AsyncStorage.multiSet([
//         ['@BaratoApp:usuario', JSON.stringify(response.usuario)],
//         ['@BaratoApp:token', response.token],
//       ])
//     }
//   }

//   async function actualizarToken() {
//     const response = await autenticacao.actualizarToken(usuario?.id || '')
//     setUsuario(response?.usuario)
//     api.defaults.headers.common.Authorization = `Bearer ${response.token}`

//     await AsyncStorage.multiSet([
//       ['@BaratoApp:usuario', JSON.stringify(response.usuario)],
//       ['@BaratoApp:token', response.token],
//     ])
//   }

//   async function removerConta() {
//     setCarregando(false)
//     await usuarioService.removerUsuario()
//     await AsyncStorage.clear()
//     await logout()
//     setUsuario(null)
//   }

//   async function sair() {
//     setCarregando(false)
//     await AsyncStorage.clear()
//     await logout()
//     setUsuario(null)
//   }

//   async function cadastrarComEmailOuTelefoneSenha({ nome, emailOuTelefone, senha }: NovoUsuario) {
//     await usuarioService.cadastrarComEmailOuTelefoneSenha({
//       nome,
//       emailOuTelefone,
//       senha,
//     })
//   }

//   return (
//     <AutenticacaoContext.Provider
//       value={{
//         autenticado: !!usuario,
//         usuario,
//         carregando,
//         entrar,
//         googleAuth,
//         facebookAuth,
//         phoneNumberAuth,
//         actualizarToken,
//         removerConta,
//         sair,
//         cadastrarComEmailOuTelefoneSenha,
//       }}
//     >
//       {children}
//     </AutenticacaoContext.Provider>
//   )
// }

// export function useAutenticacao() {
//   const context = useContext(AutenticacaoContext)

//   return context
// }
