import axios from '../../axios/axios'
import React, { useEffect, useState } from 'react'
import requests from '../../axios/requests'
import "./Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([])
    const base_Url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchMovieData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            return request;
        }
        fetchMovieData()
    }, [])

    const truncate = (string, n) =>  {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundPosition:"center",
            backgroundImage:`url('${base_Url}${movie?.backdrop_path}')`
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.original_name || movie?.title || movie?.name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{
                    truncate(`${movie?.overview}`,150)
                }</h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
