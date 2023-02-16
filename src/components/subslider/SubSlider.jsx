
import { useEffect, useState } from "react";
import product from '../../api/product'
import ListItem from "../listItemsCarousel/ListItem";

function SubSlider(props){
  const {id, sort, slideSize, options, header} = props
  const [movies, setMovies] = useState([]);
  const totalSlide = 5;
  const arr = Array.from(Array(totalSlide).keys());

  useEffect(() => {
    const fetchProductList = async ()=>{
      try{
        let res
        switch (options) {
          case "250movies":
            res = await product.get250Movies()
            break;
          case "InTheaters":
            res = await product.getInTheater()
            break;
          case "MostPopular":
            res = await product.getMostPopular()
            break;
          default:
            console.log("fail API");
            break;
        }
        let arr = res.items.slice(0, slideSize * totalSlide)
        if(sort){
          arr=arr.sort((a,b)=>{
            return parseFloat(b.imDbRating) - parseFloat(a.imDbRating)
          })
        }
        setMovies(arr)
      }catch(err){
        console.log("axios error: ",err);
      }
    }
    fetchProductList();
  }, []);

    return(
        <div className="row mx-0 my-4">
        {header&& <h5>{header}</h5>}
        <div
        id= {"carouselExampleControls"+id} 
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ListItem arr={arr} movies={movies} slideSize={slideSize}/>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#carouselExampleControls"+id} 
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-danger"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#carouselExampleControls"+id} 
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-danger"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    )
}

export default SubSlider