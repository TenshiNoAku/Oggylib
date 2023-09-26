import React from "react";
import "./ComponentBook.scss";
import StarRating from "../components/widgets/StartRating/StarRating";
export const ComponentBook = ({
    id,
    img,
    title,
    author,
    score,
    description,
}) => {
    return (
        <div className="Book">
            <div className="Book__img">
                <img
                    className="Book-img
                "
                    src={img}
                    alt=""
                />
            </div>
            <div className="Book__info">
                <h5 className="Book__title">{title}</h5>
                <h5 className="Book__author">Автор: {author}</h5>
                <div className="Book__score">
                    {" "}
                    <p className="Book__score-text">общая оценка: {score}</p>
                    <StarRating />
                </div>
                <div className="Book__description">{description}</div>
            </div>
        </div>
    );
};
export default ComponentBook;
