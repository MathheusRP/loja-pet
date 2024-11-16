import './footerStyle.css'
import Image from 'next/image'
import Logo from '@/app/images/Logo.svg'

export const Footer = () => {

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='info social'>
                    <span className='logo'><Image className='logoImage' src={Logo} alt='logo'/> <p>Moda <b>Pet</b></p></span>
                    <p>Instragram: <b className='textWhite'>@LojaPet</b></p>
                    <p>WhatsApp: <a className='textWhite'>11 91234-5678</a></p>
                    <p>Email: <a className='textWhite'>lojapet@gmail.com</a></p>
                </div>
                <div className='info'>
                    <b className='infoTitle'>INFORMAÇÕES</b>
                    <a className='textWhite'>- Sobre nós</a>
                    <a className='textWhite'>- Politica de Privacidade</a>
                    <a className='textWhite'>- Politica de Cookie</a>
                    <a className='textWhite'>- Termos e Condições</a>
                </div>
            </div>
        </footer>
    )
}