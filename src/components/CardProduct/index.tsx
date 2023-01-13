import sofa from '../../assets/image2.png'
import ButtonCard from '../ButtonCard'
import './styles.css'


function CardProduct() {
  return (
    <div className='home-container'>
      <div className="card-container">
        <div className="card-image">
          <img src={sofa} alt="sofa" />
        </div>
        <div className="card-info">
          <label>CÓDIGO: 42404</label>
          <h1>Sofá Margot II - Rosé</h1>
          <h4>R$ 4.000</h4>
          <ButtonCard />
        </div>
      </div>
    </div>
  )
}

export default CardProduct