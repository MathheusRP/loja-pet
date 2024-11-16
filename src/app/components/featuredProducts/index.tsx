import './featuredProductsStyle.css'
import Dog from '@/app/images/Dog.png'
import Image from 'next/image'

export const FeaturedProducts = () => {

    return (
        <section className='listContainer'>
            <div className='bar'> <p>Roupas para Cachorro</p> </div>

            <div className='container'>
                <ul className='products'>
                    <li className='product'>
                        <div className='imageContainer'>
                            <Image className='productImage' src={Dog} alt='Produto'/>
                        </div>
                        <div className='detail'>
                            <p className='name'>Exemplo de Roupa</p>
                            <p className='price'> R$ 29,50</p>
                        </div>
                        <div className='discount'>
                            <p>20% off</p>
                        </div>
                    </li>
                    <li className='product'>
                        <div className='imageContainer'>
                            <Image className='productImage' src={Dog} alt='Produto'/>
                        </div>
                        <div className='detail'>
                            <p className='name'>Exemplo de Roupa</p>
                            <p className='price'> R$ 29,50</p>
                        </div>
                    </li>
                    <li className='product'>
                        <div className='imageContainer'>
                            <Image className='productImage' src={Dog} alt='Produto'/>
                        </div>
                        <div className='detail'>
                            <p className='name'>Exemplo de Roupa</p>
                            <p className='price'> R$ 29,50</p>
                        </div>
                    </li>
                    <li className='product'>
                        <div className='imageContainer'>
                            <Image className='productImage' src={Dog} alt='Produto'/>
                        </div>
                        <div className='detail'>
                            <p className='name'>Exemplo de Roupa</p>
                            <p className='price'> R$ 29,50</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}