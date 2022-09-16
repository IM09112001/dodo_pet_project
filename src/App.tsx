import {
	Banner,
	NavigationBar,
	Container,
	ProductCard,
	Footer,
	ProductsWrapper,
} from 'components'
import React from 'react'

// import { PIZZAS } from 'constants/dataBase/products/pizzas'
import {PRODUCTS_DATA} from './constants';

const App: React.FC = () => {
	return (
		<>
			<Container>
				<Banner />
				<NavigationBar />
				{
					PRODUCTS_DATA.map(sections=>(
						<ProductsWrapper
							sections={sections}
						>
							{(sections.products).map(product=>(
								<ProductCard
									product={product}
									productType={sections.type}
								/>
							))}
						</ProductsWrapper>
					))
				}
			</Container>
			<Footer />
		</>
	)
}

export default App
