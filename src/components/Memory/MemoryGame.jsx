import React, { useState, useEffect } from 'react';
import Card from './Card';

import "./style.scss";

function generateCards(verses) {

    const reference = verses.reduce((accumulator, v) => {
        accumulator.push(v.reference);
        return accumulator;
    }, []);
    const titles = verses.reduce((accumulator, v) => {
        accumulator.push(v.title);
        return accumulator;
    }, []);


    const cards = [...reference, ...titles]
        .map((value, index) => ({
            id: index,
            value,
            isFlipped: false,
            isMatched: false,
        }))
        .sort(() => Math.random() - 0.5); // Shuffle cards

    return cards;
}

function MemoryGame({ verses }) {
    const [cards, setCards] = useState(generateCards(verses));
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState(0);

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) {
            return;
        }

        const newFlippedCards = [...flippedCards, index];
        const newCards = cards.map((card, i) =>
            i === index ? { ...card, isFlipped: true } : card
        );
        setCards(newCards);
        setFlippedCards(newFlippedCards);
    };

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstIndex, secondIndex] = flippedCards;
            //TODO: This match logic is flawed, the values will not be the same. The title should match the "verse". 
            // Object should store the title as well...
            if (cards[firstIndex].value === cards[secondIndex].value) {
                const newCards = cards.map((card, i) =>
                    i === firstIndex || i === secondIndex ? { ...card, isMatched: true } : card
                );
                setCards(newCards);
                setMatchedPairs(matchedPairs + 1);
            } else {
                setTimeout(() => {
                    const newCards = cards.map((card, i) =>
                        i === firstIndex || i === secondIndex ? { ...card, isFlipped: false } : card
                    );
                    setCards(newCards);
                }, 1000);
            }
            setFlippedCards([]);
        }
    }, [flippedCards, cards, matchedPairs]);

    const resetGame = () => {
        setCards(generateCards());
        setFlippedCards([]);
        setMatchedPairs(0);
    };

    return (
        <div className="game">
            <div className="game-grid">
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        value={card.value}
                        isFlipped={card.isFlipped}
                        isMatched={card.isMatched}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
            {matchedPairs === cards.length / 2 && (
                <div className="win-message">
                    <h2>You Won!</h2>
                    <button onClick={resetGame}>Play Again</button>
                </div>
            )}
        </div>
    );
}

export default MemoryGame;