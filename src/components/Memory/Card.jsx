import React from 'react';

import "./style.scss";

function Card({ isFlipped, onClick, value, isMatched }) {
    return (
        <div className={`card ${isFlipped || isMatched ? 'flipped' : ''}`} onClick={onClick}>
            <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">{value}</div>
            </div>
        </div>
    );
}

export default Card;