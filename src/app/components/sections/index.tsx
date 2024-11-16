import './sections_style.css'
import Image from 'next/image'
import cat from '@/app/images/Cat.png'
import dog from '@/app/images/Dog.png'

export const Sections = () => {


    return (
        <div className='sectionsContainer'>
            <section className='sectionCard'>
                <div className='cardImageContainer'>
                    <Image className='cardImage' src={cat} alt='cat'/>
                </div>
                <div className='titleContainer'>
                    <h2>Roupas para gatos</h2>
                </div>
            </section>
            <section className='sectionCard sectionCard2'>
                <div className='titleContainer'>
                    <h2>Roupas para gatos</h2>
                </div>
                <div className='cardImageContainer'>
                    <Image className='cardImage image2' src={dog} alt='cat'/>
                </div>
            </section>
        </div>
    )
}