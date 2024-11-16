import './productImageStyle.css'
import Image from 'next/image'
import DogImage from '@/app/images/Dog.png'

export const ProductImage = () => {

    return (
        <figure className='figureContainer'>
            <div className='borderTop border'></div>
            <Image className='productImage' src={DogImage} alt='Roupa de cachorro'/>
            <div className='borderBottom border'></div>
            <span className='circlesContainer'>
                <div className='circle'></div>
                <div className='circle focus'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </span>
        </figure>
    )
}