import './cover_style.css'
import Image from 'next/image'
import CatImage from '@/app/images/Cat.png'

export const Cover = () => {


    return (
        <div className="coverContainer">
            <div className='border border_top'>

            </div>
            <div className='border border_bottom'>

            </div>
            <div className='imageContainer'>
                <Image className='catImage' src={CatImage} alt='cat'/>
            </div>
            <h1 className='coverTitle'>Oferecemos os <b>Melhores</b> produtos para os seu <b>Pets</b></h1>

        </div>
    )
}