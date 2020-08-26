// libs
import { EventEmitter } from 'events';
import { v4 as uuidv4 } from 'uuid';
import { PRNG } from './utils';

enum CardColor {
    BLACK = 1,
    RED,
    BLUE,
    GREEN,
}

class CardSuit {
    static CLUBS = '♣';
    static DIAMONDS = '♦';
    static HEARTS = '♥';
    static SPADES = '♠';

    symbol: string;
    color: CardColor;

    constructor(symbol: string, color?: CardColor) {
        this.symbol = symbol;
        this.color = color || CardColor.BLACK;
    }
}

class CardRank {
    static ACE = 1;
    static JACK = 11;
    static QUEEN = 12;
    static KING = 13;

    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

class Card {
    suit: CardSuit;
    rank: CardRank;
    id: string;

    constructor(suit: CardSuit, rank: CardRank, id: string) {
        this.suit = suit;
        this.rank = rank;
        this.id = id;
    }
}

interface DeckConfig {
    seed?: number;
    suits?: CardSuit[];
    ranks?: CardRank[];
}

const DeckConfigDefault: DeckConfig = {
    suits: [
        new CardSuit(CardSuit.CLUBS),
        new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
        new CardSuit(CardSuit.HEARTS, CardColor.RED),
        new CardSuit(CardSuit.SPADES),
    ],
    ranks: [
        new CardRank(CardRank.ACE),
        new CardRank(2),
        new CardRank(3),
        new CardRank(4),
        new CardRank(5),
        new CardRank(6),
        new CardRank(7),
        new CardRank(8),
        new CardRank(9),
        new CardRank(10),
        new CardRank(CardRank.JACK),
        new CardRank(CardRank.QUEEN),
        new CardRank(CardRank.KING),
    ],
};

class Deck extends EventEmitter {
    config: DeckConfig;
    cards: Card[];
    discarded: string[];
    prng: PRNG;

    constructor(config?: DeckConfig) {
        super();

        this.config = {
            ...config,
            ...DeckConfigDefault,
        };

        this.reset();
    }

    reset(): void {
        this.prng = new PRNG(this.config.seed);

        this.cards = this.config.suits
            .map((suit) => {
                return this.config.ranks.map((rank) => {
                    const id = uuidv4({
                        random: [...new Array(16)].map(() => {
                            return Math.floor(this.prng.random() * 255);
                        }),
                    });

                    return new Card(suit, rank, id);
                });
            })
            .reduce((a, b) => {
                return a.concat(b);
            }, []);

        this.discarded = [];

        this.emit('reset', this.cards);
    }

    shuffle(): void {
        this.cards = this.cards.sort(() => {
            return 0.5 - this.prng.random();
        });

        this.emit('shuffle', this.cards);
    }

    discard(card_id: string): void {
        if (this.discarded.indexOf(card_id) !== -1) {
            return;
        }

        this.discarded = this.discarded.concat([card_id]);

        this.emit('discard', this.discarded);
    }
}

export { Deck, Card, CardRank, CardSuit, CardColor };
