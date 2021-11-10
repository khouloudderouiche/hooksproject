import React from 'react'
import "../MovieCard.css"
import StarRatingcomponent from "react-rating-stars-component";

const MovieCard = ({movie}) => {
    return (
        <div>
            < div className="Wrapper">
                <div className="main-card">
                    <div className=" card-left">
                        <div className ="card-datails">
                            <h1> {movie.title}</h1>
                            <div className="card-cat">
                                < StarRatingcomponent editing={false} value={movie.rating}/>
                                </div>
                                <p className="disc"> {movie.description}   </p>
                                <a href="https://www.imdb.com/title/tt4912910/"> Read More</a>
                                <div className="social-btn">
                                    {/* WATCH TRAILER */ }
                                    <button> <i className ="fas fa-play" />   SEE THRAILER    </button>
                                     {/* GET */ }
                                     <button> <i className ="fas fa-download" />   DOWNLOAD    </button>
                                     <button> <i className ="fas fa-thumb-up" />   97%   </button>
                                     <button> <i className ="fas fa-star" />   DOWNLOAD    </button>
  </div>
        </div>
        </div>
        <div className="card-right">
            <div className="img-container">
                <img src={movie.posterUrl} alt={movie.title}/>
                </div>
                <div className="play-btn">
                    <a href="http://www.imdb.com/title/tt4912910/">
                        <i className="fas-fa-play-circle" />
                    </a>
                </div>
                </div>
                </div>
                </div>
                </div>







    )
}

export default MovieCard
