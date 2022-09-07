import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/future/image'

globalStyles()


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <div>
          <strong>Ignite</strong>
          <span>
            shop
          </span>
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
    
  )
}
