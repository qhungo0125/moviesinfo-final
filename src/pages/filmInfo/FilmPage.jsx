
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import product from "../../api/product";
import { AppConText } from "../../context/contextProvider";
import Film from "../../components/InfoFilm/Film"
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NavBar from "../../components/navbar/NavBar";
import SubSlider from "../../components/subslider/SubSlider";

function FilmPage(){
    const [info, setInfo]= useState({})
    const appValue = useContext(AppConText)

useEffect(()=>{
    const fetchFilmInfo = async ()=>{
        let id = appValue.status.payload
        console.log("id get from: ", id);
        let res = await product.getFilmById()
        setInfo(res) 
        console.log(res);
    }
    fetchFilmInfo()
},[])


return(
    <>
    <Header/>
    <NavBar/>
    <Film/>
    <SubSlider header={"Most Popular"} slideSize={5} id={4} options={"MostPopular"}/>
    <Footer/>    
    </>
)
}

export default FilmPage

