import { useRouter } from "next/router";

function Review() {
    
    const { productId, reviewId } = useRouter().query   

    return(
        <h1>
            Review {reviewId} from product {productId}
        </h1>
    )
}

export default Review