import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CharacterList = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(()=>{
        const fetchHeroes = async () => {
            try{
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=e300cc048336e0bd6aa3b1c1108fd34a&hash=8d4ee9b0c555dcfb579b1beeeb147d5f')
                console.log(response.data.data.results);
                setHeroes(response.data.data.results);
            } catch (error){
                console.error("error fetching heroes", error);
            }
        }

        fetchHeroes();
    }, [])


    return (
        <div>
            <h3>Hero Characters... Please wait a few and the Hero Characters will populate. </h3>
            {heroes.map(hero => (
                <div key={hero.id} className="character">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        width="200" alt={hero.name}/>
                    <br/>
                    <Link to={`/characters/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}
        </div>
    )
}



export default CharacterList;