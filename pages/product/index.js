import Link from "next/link"

function ProductList() {
    return (
        <>
        <Link href="/">Home</Link>
        <div>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </div>
        </>
    )
}

export default ProductList