import './main.css'

// components
import ProductPreview from '../ProductPreview/ProductPreview.jsx'
import ProductDetails from '../ProductDetails/ProductDetails.jsx'

function Main() {
	return (
		<main>
			<div className="container">
				<ProductPreview />
			</div>
			<div className="container">
				<ProductDetails />
			</div>
		</main>
	)
}

export default Main