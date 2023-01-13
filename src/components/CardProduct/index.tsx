import ButtonCard from '../ButtonCard'
import './styles.css'

function CardProduct() {
  return (
    <div className="card-container">
      <div className="card-image">
      </div>
      <div className="card-info">
        <h1>Sofá Margot II - Rosé</h1>
        <h4>R$ 4.000</h4>
        <ButtonCard />
      </div>
    </div>
  )
}

export default CardProduct