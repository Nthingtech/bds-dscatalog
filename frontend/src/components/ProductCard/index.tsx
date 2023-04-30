import ProductPrice from 'components/ProductPrice';
import './styles.css'
import ComputerImg from 'assets/images/computer.png';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ComputerImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Nome do Produto</h6>
                <ProductPrice />
            </div>
        </div>
    );
}

export default ProductCard;