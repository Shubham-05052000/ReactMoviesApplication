import React from "react";

import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({ movie }) => {
  const { img, release, link, description, moviename, rating } = movie;
  return (
    // movie poster
    //movie name first name
    <div className="movie_card">
      <a href={link} target="_blank" className="">
        <img src={img} alt="movie poster" className="movie_poster" />

        <div className="movie_details">
          <h3 className="movie_details_heading">{moviename}</h3>
          <div className="align_center movie_date_rate">
            <p>{rating}</p>
            <p className="align_center">
              {release}
              <img src={Star} alt="rating icon" className="card_emoji" />
            </p>
          </div>

          <p className="movie_description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
