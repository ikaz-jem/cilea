// import ProductCard from '../ProductCard/ProductCard'

import ProductCard from '../.../../CardCategories/ProductCard/ProductCard'
import { Toaster } from 'react-hot-toast'


async function getData() {
    const res = await fetch('http://localhost:3000/api/products', {cache:'no-store'})
    if (!res.ok) {
        console.log('Failed to fetch data')
    }
    return res.json()
}


export default async function HomeProducts (){
    const products = await getData()


return (

    <>
            <Toaster />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols- xl:grid-cols-5">

    {
        
        products.map((product, idx) => {
            
            return (
                <ProductCard  product={product} key={idx} />
                
            )
            
        })
        
    }

    </div>
</>
)

}