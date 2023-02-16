import "./SearchInfo.css"
import product from "../../api/product";
import { useContext, useEffect, useState } from "react";
import { AppConText } from "../../context/contextProvider";
import ProfileCard from "../profileCard/ProfileCard";
import ItemCarousel from "../itemCarousel/itemCarousel";

const SearchInfo = () => {

    const [films, setFilms] = useState()
    const [profiles, setProfiles] = useState()


    const appValue = useContext(AppConText)
    useEffect(()=>{
        let content = appValue.status.payload
        console.log("content search: ", content);

        let fetchSearch = async()=>{
            let seachFilm = await product.getSearchFilm(content)
            let searchProfile = await product.getSearchActors(content)

            console.log("search 1: ", seachFilm.results);
            console.log("search 2: ", searchProfile.results);
            setFilms(seachFilm.results)
            setProfiles(searchProfile.results)
        }

        fetchSearch()

    },[])

    return ( 
        <div className="row mx-0 gx-0 justify-content-center">
            {profiles&& profiles.map(item=>{
                return (
                <ProfileCard profile={ item}/>
                )
            })}
            {films && films.map(item=>{
                return(
                    <ItemCarousel zoom={true} item={item}/>
                )
            })
            }
        </div>
     );
}
 
export default SearchInfo;