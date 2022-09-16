// @ts-ignore
import {ComboProducts, Product} from 'constants/dataBase/products'
// @ts-ignore
import styles from './ProductCard.module.css'
// import {style} from "postcss-minify-font-values/types/lib/keywords";
// import {INGREDIENTS} from '../../constants/dataBase/ingredients';


export interface IProductCardProps {
	product: ComboProducts|Product
	productType:string
}


export const ProductCard: React.FC<IProductCardProps> = ({product, productType}: IProductCardProps) => {
	// // console.log(INGREDIENTS, product.ingredients)
	// console.log(product.title)
	// (product.ingredients).map((ingredient, index)=>{
	// 	console.log(ingredient, index)
	// 	INGREDIENTS.map(check=>{
	// 		if (ingredient[0]===check.id){
	// 			return check.title
	// 		}
	// 		return 0
	// 	})
	// 	return 1
	// })

	return (
		<div className={styles.card}>
			<div className={styles.card_header}>
				<img
					src={product.img}
					alt='Маргарита'
					className={styles.card_img}
					width='221'
				/>
			</div>
			<div className={styles.card_body}>
				<h3 className={styles.card_title}>{product.title}</h3>
				<p className={styles.card_text}>
					{product.description?product.description:''}
				</p>
				{
					(product.description!=='')?null:null
				//	? <p className={styles.card_text}>
				//		{product.description}
				//	</p>
				//	:<br/>
				}
			</div>
			<div className={styles.card_footer}>
				<p className={styles.card_price}>{productType!=='combo'
					?
						`${productType==='pizzas'?'от ':''}${product.price / 1000} 000 сум`
					:
						<>
							<p>{product.price / 1000} 000 сум</p>
							<p>{product.realPrice / 1000} 000 сум</p>
						</>
				}</p>
				<div className={styles.card_button_wrapper}>
					<button
						className={
							`${styles.card_button} ${product.buttonType
								? styles.card_button_collect
								: styles.card_button_default}`
						}
							type='button'
					>
						{
							product.buttonType
							?`${product.buttonType.title}`
							:'Выбрать'
						}
					</button>
				</div>
			</div>
		</div>
	)
}
