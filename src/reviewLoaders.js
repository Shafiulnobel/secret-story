const reviewLoaders=async () =>{
    const loadReviews=await fetch('reviews.json');
    const reviews=await loadReviews.json();
    return reviews;
}
export default reviewLoaders;