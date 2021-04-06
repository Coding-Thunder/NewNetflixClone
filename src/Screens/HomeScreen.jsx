import React from 'react'
import requests from '../axios/requests'
import Banner from '../Components/Banner/Banner'
import Navbar from '../Components/Navbar/Navbar'
import Row from '../Components/Row/Row'
import "./HomeScreen.css"

const HomeScreen = () => {
    

    return (
        <div className="homeScreen">
            <Navbar />

            <Banner />
            
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending }
            />
                <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
                <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
                <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
            

            {/* Row */}
        </div>
    )
}

export default HomeScreen
