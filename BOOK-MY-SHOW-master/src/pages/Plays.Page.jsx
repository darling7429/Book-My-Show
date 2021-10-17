import axios from 'axios';
import React,{useState, useEffect} from 'react';
import PlaysCarousal from '../components/plays/PlaysCarousal.component';
import PlaysFilter from '../components/PlaysFilter/PlaysFilters.component'


//component
import Poster from '../components/Poster/Poster.component';


const Plays= () => {
    const [tvPopular, setTvPopular] =useState ([]);
    const [images,setImages] = useState([]);

    useEffect( () => {
        const requestNowPlayingShows = async () =>{
             //ASYNC CALL
            const getImages = await axios.get ("/tv/popular");
            setImages(getImages.data.results);
            console.log(getImages.data.results);
        };
        requestNowPlayingShows();
    }, []);
    console.log(images);
    useEffect(() =>{

        const requestTvShows = async () => {
            const getTvPopular = await axios.get("/tv/popular");
            setTvPopular(getTvPopular.data.results);
        };
        requestTvShows(); 
    },[]);
   // console.log(tvPopular);
    return (
        <>
        <div className=" container mx-auto px-4">
        <PlaysCarousal images={images} setImages={setImages}/>
            <div className="w-full lg:flex lg:flex-row-reverse"> 
             <div className="lg:w-3/4">
                 
                <h2 className="text-2xl font-bold mb-4">Plays in Delhi</h2>
            <div className="flex flex-wrap ">
                <div className=" flex mx-4 my-3 ">
                    {tvPopular && tvPopular.map((tvPopulardata) => {
                        return <div className="flex w-40 h-40">
                            
                          <img src= {`https://image.tmdb.org/t/p/original/${tvPopulardata.poster_path}`} alt={tvPopulardata.original_name} /> 
                        
                        
                        </div>
                    
                    })}
                    
                    
                    </div>
                 </div>   
             </div>
               
                <div className="lg:w-3/12">
                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                <div>
                    <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
                    <PlaysFilter title="Language" tags={["Tamil","Telegu","English"]}/>
                    <PlaysFilter title="Categories" tags={["Theater","Storytelling"]}/>
                    <PlaysFilter title="Date" tags={["Drama","Mythological","Comdey","Historical"]}/>
                    
                </div>
                </div>
            </div>
            <div>

            </div>
        </div>   
        </>
    )
}

export default Plays;
