// variables
const MAX_SEED = 2147483647;

/**
 * Pseudo-random number generator
 */
class PRNG {
    /**
     * Random seed
     */
    seed: number;

    /**
     * PRNG constructor
     */
    constructor(seed?: number) {
        this.seed = seed === undefined ? Math.floor(Math.random() * (MAX_SEED - 1)) : seed % MAX_SEED;
    }

    /**
     * Returns next random value (float)
     */
    random(): number {
        this.seed = (this.seed * 16807) % MAX_SEED;

        return (this.seed - 1) / (MAX_SEED - 1);
    }
}

export { PRNG };
