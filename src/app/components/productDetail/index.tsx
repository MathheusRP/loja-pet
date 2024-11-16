import './productDetailStyle.css'
import { Select } from '../select'
import { MdFavorite } from "react-icons/md";

export const ProductDetail = ({id}: any) => {

    return (
        <div className='productDetail'>
            <span className='titleContainer'>
                <h1>Roupa de Inverno para Cachorro</h1>
                <p>Código: {id} | Em estoque</p>
            </span>
            <Select/>
            <div className='priceContainer'>
                <p  className='price'>R$ 40,00</p>
                <p className='price'>R$ 30,00</p>
                <p className='discount'>25% OFF</p>
                <MdFavorite className='icon' />
            </div>
            <div className='textDetail'>
                <p>Indicada para cães;</p>
                <p>Regata básica, estilo fantasia;</p>
                <p>Peça que tem durabilidade, qualidade e muito conforto;</p>
            </div>
            <div className='buttonContainer'>
                <div className='value'>
                    <button className='button'>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <button className='buttonAdd'>Adicionar à sacola</button>
            </div>
            <div className='detail'>
                <p className='title'>ESPECIFICAÇÕES</p>
                <ul>
                    <li>
                        <p>Idade</p>
                        <p>Filhote, Adulto e Senior</p>
                    </li>
                    <li>
                        <p>Pet</p>
                        <p>Cachorro</p>
                    </li>
                    <li>
                        <p>Material</p>
                        <p>Soft</p>
                    </li>
                    <li>
                        <p>Cor</p>
                        <p>Preto e Branco</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}