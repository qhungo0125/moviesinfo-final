// import MainSlider from "./mainslider/MainSlider";
// import Film from "./filminfo/Film"
import SubSlider from "../../components/subslider/SubSlider";
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import NavBar from '../../components/navbar/NavBar'




function Home() {
  return (
    <>
    <Header/>
    <NavBar/>
    <SubSlider slideSize={1} id={1} options={"InTheaters"}/>
    <SubSlider header={"Most Popular"} slideSize={5} id={2} options={"MostPopular"}/>
    <SubSlider header={"Top Rating"} slideSize={5} id={3} options={"250movies"}/>
    <Footer/>
    </>
    
  );
}

export default Home;
