import ItemCarousel from "../itemCarousel/itemCarousel"
const ListItem = (props) => {
    const {arr, movies, slideSize} = props
    return ( 
        <div
        className="carousel-inner col-md-10">
                {arr.map((item, index) => {
                    return (
                    <div
                        key={index}
                        className={item == 0 ? "carousel-item active" : "carousel-item"}
                    >
                        <div className="row mx-0 gx-0 justify-content-center">
                        {movies
                            .slice(slideSize * item, slideSize * (item + 1))
                            .map((item, index) => {
                            return <ItemCarousel item={item} slideSize={slideSize}/>
                            })}
                        </div>
                    </div>
                    );
                })}

        </div>
     );
}
 
export default ListItem;