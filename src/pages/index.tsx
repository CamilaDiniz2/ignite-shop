import { GetStaticProps } from "next"
import Image from "next/future/image"
import { useKeenSlider } from 'keen-slider/react'
import { 
  HomeContainer, 
  Product,
  ProductInfo,
  AddProduct 
} from "../styles/pages/home"
import { Handbag } from "phosphor-react"
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe"
import Stripe from "stripe"

interface HomeProps{
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
  
}

export default function Home({ products } : HomeProps) {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 32,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product
            key={product.id} 
            className="keen-slider__slide"
          >
            <Image src={product.imageUrl} width={520} height={480} />
            <ProductInfo>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
              <AddProduct>
                <Handbag />
              </AddProduct>        
            </ProductInfo>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount/100,
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // atualiza a cada 2 horas
  }
}