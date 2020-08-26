// libs
import * as React from 'react';
const { useEffect, useRef } = React;
import PropTypes from 'prop-types';
import classNames from 'classnames';
import anime from 'animejs';

// types
import { Card as CardType, CardColor, CardRank } from './deck';

interface CardProps {
    data: CardType;
    onClick(): void;
}

// component
const Card: React.FC<CardProps> = (props) => {
    const el = useRef();
    const card = props.data;
    const rank = (() => {
        switch (card.rank.value) {
            case CardRank.ACE:
                return 'A';
            case CardRank.JACK:
                return 'J';
            case CardRank.QUEEN:
                return 'Q';
            case CardRank.KING:
                return 'K';
            default:
                break;
        }

        return card.rank.value;
    })();
    const _onAnimate = () => {
        const left = 100 * Math.random();
        const top = 100 * Math.random();

        anime({
            targets: el.current,
            left: `${left}%`,
            top: `${top}%`,
            duration: 1000,
            easing: 'linear',
        });
    };

    useEffect(() => {
        _onAnimate();

        setInterval(() => {
            _onAnimate();
        }, 7000);
    }, []);

    return (
        <div
            ref={el}
            className={classNames(['card'], {
                'color--red': card.suit.color === CardColor.RED,
            })}
            onClick={props.onClick}
        >
            <div className="card__rank card__rank--top-left">
                <span>{rank}</span>
                <span>{card.suit.symbol}</span>
            </div>
            <div className="card__rank card__rank--bottom-right">
                <span>{rank}</span>
                <span>{card.suit.symbol}</span>
            </div>
            <div className={classNames(['card__pips', `card__pips--${card.rank.value}`])}>
                {[...new Array(card.rank.value)].map((_, i) => {
                    const key = `key-${i}`;

                    return (
                        <div key={key} className="card__pip">
                            {card.suit.symbol}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.instanceOf(CardType),
    onClick: PropTypes.func,
};

export default Card;
