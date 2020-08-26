// libs
import * as React from 'react';
const { useEffect, useRef, useState } = React;
import classNames from 'classnames';
import Card from './Card';
import { Deck, Card as CardType, CardRank, CardColor } from './deck';

// app
const App: React.FC = () => {
    const deck = useRef(new Deck());
    const tm = useRef(null);
    const [start, setStart] = useState<boolean>(false);
    const [gameWin, setGameWin] = useState<boolean>(false);
    const [gameLose, setGameLose] = useState<boolean>(false);
    const [time, setTime] = useState<number>(10 * 60);
    const [cards, setCards] = useState<CardType[]>([]);
    const [findCard, setFindCard] = useState<CardType>(null);
    const _onStart = () => {
        setStart(true);
    };
    const _onDiscard = (card_id: string) => {
        return () => {
            if (findCard.id !== card_id) {
                return;
            }

            deck.current.discard(card_id);
        };
    };

    useEffect(() => {
        deck.current
            .on('shuffle', (cards) => {
                setCards(cards);
                setFindCard(cards.slice().shift());
            })
            .on('discard', (discarded) => {
                const _cards = deck.current.cards.filter((card) => {
                    return discarded.indexOf(card.id) === -1;
                });

                setCards(_cards);

                if (!_cards.length) {
                    setGameWin(true);
                } else {
                    setFindCard(_cards.slice().shift());
                }
            });

        return () => {
            tm.current = clearInterval(tm.current);
        };
    }, []);

    useEffect(() => {
        if (!start) {
            return;
        }

        deck.current.reset();
        deck.current.shuffle();

        tm.current = setInterval(() => {
            setTime((_time) => {
                return _time - 1;
            });
        }, 1000);
    }, [start]);

    useEffect(() => {
        if (time !== 0) {
            return;
        }

        setStart(false);
        setGameLose(true);
    }, [time]);

    return (
        <div
            className={classNames(['game'], {
                'game--started': start,
                'game--ended': gameWin || gameLose,
            })}
        >
            <div className="message">
                <p>
                    {!gameWin ? null : 'You Win! :)'}
                    {!gameLose ? null : 'You Lose :('}
                </p>
            </div>
            <div className="start">
                <div className="card card--big card--back" onClick={_onStart}>
                    <p>{'Play 52 Card Pickup'}</p>
                </div>
            </div>
            <div className="status">
                <p className="status__remaining">
                    <span>{'Cards remaining: '}</span>
                    <b>{cards.length}</b>
                </p>
                <p className="status__find">
                    <span>{'Find the '}</span>
                    {!findCard ? null : (
                        <b
                            className={classNames({
                                'color--red': findCard.suit.color === CardColor.RED,
                            })}
                        >
                            {(() => {
                                switch (findCard.rank.value) {
                                    case CardRank.ACE:
                                        return 'Ace';
                                    case CardRank.JACK:
                                        return 'Jack';
                                    case CardRank.QUEEN:
                                        return 'Queen';
                                    case CardRank.KING:
                                        return 'King';
                                    default:
                                        break;
                                }

                                return findCard.rank.value;
                            })()}
                            {' of '}
                            {findCard.suit.symbol}
                        </b>
                    )}
                </p>
                <p className="status__time">
                    {(() => {
                        const minutes = Math.floor(time / 60);
                        const seconds = time - minutes * 60;

                        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    })()}
                </p>
            </div>
            <div className="cards">
                {cards.map((card) => {
                    return <Card key={card.id} data={card} onClick={_onDiscard(card.id)} />;
                })}
            </div>
        </div>
    );
};

export default App;
