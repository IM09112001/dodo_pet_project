// @ts-ignore
import styles from './ProductsWrapper.module.scss'
// import {PRODUCTS_DATA} from '../../constants';
export const ProductsWrapper: React.FC<any> = (props: any) => {
	return (
		<>
			<section className={styles.productsSection} key={Math.random()} id={props.sections.type}>
				<h2>{props.sections.title}</h2>
				<div className={styles.productsContainer}>{props.children}</div>

			</section>
		</>
	)
}

