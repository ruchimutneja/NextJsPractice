import router, { useRouter } from 'next/router'

function ProductDetail() {
    const productId = useRouter().query.productId
    return<h1>Details about the product {productId}</h1>
}

export default ProductDetail

