"use client"

import './header_style.css'
import Image from 'next/image'
import Logo from '@/app/images/Logo.svg'
import { useState } from 'react';
import { Menu } from '../menu';

export const Header = () => {

    const [buttonMenuStatus, setButtomMenuStatus] = useState('buttonOff')
    const [barMenuStatus, setBarMenuStatus] = useState('barMenuOff')
    const [hiddenBarMenu, setHiddenMenu] = useState<string>('menuHidden')

    const setMenuStatusFunction = () => {
        if (buttonMenuStatus == 'buttonOff'){
            setButtomMenuStatus('buttomOn')
            setBarMenuStatus('barMenuOn')
            setHiddenMenu('menuShow')
        } else {
            setButtomMenuStatus('buttonOff')
            setBarMenuStatus('barMenuOff')
            setTimeout(() => [
                setHiddenMenu('menuHidden')
            ], 1500)
        }
    }

    return (
        <header>
            <div className='logo-nav'>
                <div className='logoContainer'>
                    <Image className='logo' src={Logo} alt='Logo'/>
                    <p className='title'>Moda <span className='titleColor'>Pet</span></p>
                </div>
                <nav>
                    <a href=""> HOME </a>
                    <a href=""> SOBRE NÓS </a>
                    <a href=""> CONTATOS </a>
                </nav>
            </div>
            <Menu status={'menuRigth'}/>
          
            <button onClick={() => setMenuStatusFunction()} className={`openMenu ${buttonMenuStatus}`}>
                <div className='line lineOne'></div>
                <div className='line lineTwo'></div>
                <div className='line lineThree'></div>
            </button>
            <section className={`menuBar ${barMenuStatus}  ${hiddenBarMenu}`}>
                <nav>
                    <a href=""> HOME </a>
                    <a href=""> SOBRE NÓS </a>
                    <a href=""> CONTATOS </a>
                </nav>
                <Menu status={'menuDown'}/>
            </section>
        </header>
    )
}