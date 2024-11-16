import './selectStyle.css'


export const Select = ({}:any) => {

    return (
        <div className='selectContainer'>
            <div className='select'>
                <p>Tamanho:</p>
            </div>
            <div className='options'>
                <ul>
                    <li><p>PP</p></li>
                    <li><p>P</p></li>
                    <li><p>M</p></li>
                    <li><p>G</p></li>
                    <li><p>GG</p></li>
                </ul>
            </div>
        </div>
    )
}