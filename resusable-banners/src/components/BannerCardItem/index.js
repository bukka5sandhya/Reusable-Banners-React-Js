import './index.css'
const BannerCardItem = props =>{
    const {cardDetails} = props
    const {headerText,description,className} = cardDetails
    return(
        <div className={className}>
            <h1 className="heading">{headerText}</h1>
            <p className="description">{description}</p>
            <div>
                <button className="button">Show More</button>
            </div>
        </div>
    )
}
export default BannerCardItem;