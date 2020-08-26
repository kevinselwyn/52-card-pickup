import { Deck, Card, CardSuit, CardColor, CardRank } from '../src/js/deck';

test('smoke test', () => {
    const _ = new Deck();
});

test('create standard deck', () => {
    const deck = new Deck({
        seed: 1337,
    });

    expect(deck.cards).toStrictEqual([
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(CardRank.ACE),
            '02dc3e36-4ebe-45a3-b7ae-bd7500387935',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(2),
            '534a9f5d-2d36-45fd-9280-f449307d190e',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(3),
            'e57524d8-d551-4474-8aaa-323c142e7ed9',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(4),
            '9c7accb9-e68c-469e-b82a-9bf8848b488b',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(5),
            '2371d44f-2999-4198-b4c5-45f517f524c2',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(6),
            'c99c3676-d7b2-44df-8605-c78c4e3e5113',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(7),
            'f2191361-5f9a-406c-854d-d0318e775077',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(8),
            '7ae96bcd-9b72-4061-a61f-02e8ee07f7c1',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(9),
            'da8ce7cc-fef4-4463-a740-1188f8619014',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(10),
            'ad849c44-1724-48fa-8013-d55469b91fb4',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(CardRank.JACK),
            '5cfc82be-ef89-49e0-8996-651c3cdb0374',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(CardRank.QUEEN),
            '56a313be-50b8-4ea5-bfc8-9c3a6af71376',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(CardRank.KING),
            'b9148f05-f9f7-429e-aad8-cf0d25d089cb',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(CardRank.ACE),
            '4a8d11f6-54ab-44cf-8fa2-ab869fe77529',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(2),
            'd7b6afe5-cd89-4ef3-821a-1dc62a542219',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(3),
            '91e8167d-37cc-405e-b50f-ca2cf771bc7e',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(4),
            '7ee86e4a-d2fa-4848-b8bc-ea8260da09dd',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(5),
            '3bef6dc0-aa07-433d-9521-77954cf87051',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(6),
            '8c7c82e2-ded4-42e2-999d-8f9adfad26e4',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(7),
            '75cf8134-ad03-4e6c-9324-c2e4402ce01f',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(8),
            '557c097f-efaa-4450-ac0b-12fd76754587',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(9),
            '69a2577d-2c20-4126-a922-f2feec996b3b',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(10),
            '3fbcf313-eaae-43fd-b0fc-9da92f297501',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(CardRank.JACK),
            'e064e756-7686-4a30-9cc8-b109ad1fb4e9',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(CardRank.QUEEN),
            'dcafbcd8-0ab5-4b4f-bf7a-db34605b128e',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(CardRank.KING),
            'c51c275b-30be-453e-91b1-7ec685590ee7',
        ),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(CardRank.ACE),
            '6f48ab1e-a7d2-4939-b3f6-4da1117cb6c7',
        ),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(2), 'd7752d37-ba3f-48a9-97fb-44fc94c960b8'),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(3), 'b515605e-2d88-458a-924d-4a550b8203f1'),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(4), '051f75c6-da2f-4b4d-a046-57754f12c902'),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(5), '4d5c9e6e-cdbc-4b74-9b4d-70bf5562cc9e'),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(6), '465e328d-68a5-4e71-93d7-dd97b0150d05'),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(7), '59560dfc-9124-4dc9-b622-1661027c5ef1'),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(8), '35c18a22-0f69-41df-8995-b5072ca12fc3'),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(9), 'bd800226-b4c5-479e-ac6a-b01a516e0f77'),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(10),
            '15a5916a-574e-4c2f-b6b0-e45c83d44db3',
        ),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(CardRank.JACK),
            '5762ec50-ccaf-4ac8-aa35-0fdbd4394d98',
        ),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(CardRank.QUEEN),
            '07692482-4073-42aa-9e60-fa90884e45d3',
        ),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(CardRank.KING),
            '7ffa7c89-51fe-4edf-82fe-0fb7679052c7',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(CardRank.ACE),
            '484cfdf3-34a4-4956-bb95-0dc128dc9d65',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(2),
            'c90ad0f7-8f32-48d6-9ecb-1fc9e9681812',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(3),
            '98f3b3a4-1bd6-49d6-bbad-1d6da021885a',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(4),
            '3680b137-0940-4561-9265-01817a630463',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(5),
            'c45a38d0-10ea-4584-b7d7-44a88d11fa34',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(6),
            '57092d8a-d452-42fe-b2df-c04c07ca690d',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(7),
            '6d3414b0-38e1-4fea-b7de-39df9a7f6743',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(8),
            '71bbd6d2-de60-47e9-a6de-1aa826136f58',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(9),
            '252bec66-9d61-4334-960b-5f84f7b22cef',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(10),
            '95395858-d2b7-4db3-ba96-342adc5b2c8c',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(CardRank.JACK),
            'd9de8210-2cc7-4b68-9f2a-5bec8c5a5afb',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(CardRank.QUEEN),
            'f733fc9c-82a1-4280-919b-96469a9b046c',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(CardRank.KING),
            '8e31706c-6b4d-4d22-8b41-eb10350b24a1',
        ),
    ]);
});

test('shuffle standard deck', () => {
    const deck = new Deck({
        seed: 1337,
    });

    deck.shuffle();

    expect(deck.cards).toStrictEqual([
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(5), '4d5c9e6e-cdbc-4b74-9b4d-70bf5562cc9e'),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(9),
            'da8ce7cc-fef4-4463-a740-1188f8619014',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(CardRank.JACK),
            '5cfc82be-ef89-49e0-8996-651c3cdb0374',
        ),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(3), 'b515605e-2d88-458a-924d-4a550b8203f1'),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(10),
            '3fbcf313-eaae-43fd-b0fc-9da92f297501',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(3),
            '98f3b3a4-1bd6-49d6-bbad-1d6da021885a',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(10),
            '95395858-d2b7-4db3-ba96-342adc5b2c8c',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(8),
            '7ae96bcd-9b72-4061-a61f-02e8ee07f7c1',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(6),
            'c99c3676-d7b2-44df-8605-c78c4e3e5113',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(CardRank.JACK),
            'e064e756-7686-4a30-9cc8-b109ad1fb4e9',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(CardRank.ACE),
            '02dc3e36-4ebe-45a3-b7ae-bd7500387935',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(CardRank.KING),
            '8e31706c-6b4d-4d22-8b41-eb10350b24a1',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(10),
            'ad849c44-1724-48fa-8013-d55469b91fb4',
        ),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(8), '35c18a22-0f69-41df-8995-b5072ca12fc3'),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(7),
            '6d3414b0-38e1-4fea-b7de-39df9a7f6743',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(5),
            '2371d44f-2999-4198-b4c5-45f517f524c2',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(5),
            'c45a38d0-10ea-4584-b7d7-44a88d11fa34',
        ),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(4), '051f75c6-da2f-4b4d-a046-57754f12c902'),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(9),
            '69a2577d-2c20-4126-a922-f2feec996b3b',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(7),
            '75cf8134-ad03-4e6c-9324-c2e4402ce01f',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(CardRank.JACK),
            'd9de8210-2cc7-4b68-9f2a-5bec8c5a5afb',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(9),
            '252bec66-9d61-4334-960b-5f84f7b22cef',
        ),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(2), 'd7752d37-ba3f-48a9-97fb-44fc94c960b8'),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(CardRank.ACE),
            '4a8d11f6-54ab-44cf-8fa2-ab869fe77529',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(CardRank.QUEEN),
            'f733fc9c-82a1-4280-919b-96469a9b046c',
        ),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(CardRank.KING),
            '7ffa7c89-51fe-4edf-82fe-0fb7679052c7',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(2),
            'c90ad0f7-8f32-48d6-9ecb-1fc9e9681812',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(4),
            '7ee86e4a-d2fa-4848-b8bc-ea8260da09dd',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(7),
            'f2191361-5f9a-406c-854d-d0318e775077',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(CardRank.QUEEN),
            'dcafbcd8-0ab5-4b4f-bf7a-db34605b128e',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(3),
            '91e8167d-37cc-405e-b50f-ca2cf771bc7e',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(4),
            '3680b137-0940-4561-9265-01817a630463',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(2),
            '534a9f5d-2d36-45fd-9280-f449307d190e',
        ),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(10),
            '15a5916a-574e-4c2f-b6b0-e45c83d44db3',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(5),
            '3bef6dc0-aa07-433d-9521-77954cf87051',
        ),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(6), '465e328d-68a5-4e71-93d7-dd97b0150d05'),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(CardRank.JACK),
            '5762ec50-ccaf-4ac8-aa35-0fdbd4394d98',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(8),
            '71bbd6d2-de60-47e9-a6de-1aa826136f58',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(3),
            'e57524d8-d551-4474-8aaa-323c142e7ed9',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(CardRank.KING),
            'c51c275b-30be-453e-91b1-7ec685590ee7',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(2),
            'd7b6afe5-cd89-4ef3-821a-1dc62a542219',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(4),
            '9c7accb9-e68c-469e-b82a-9bf8848b488b',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(6),
            '57092d8a-d452-42fe-b2df-c04c07ca690d',
        ),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(9), 'bd800226-b4c5-479e-ac6a-b01a516e0f77'),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(CardRank.QUEEN),
            '56a313be-50b8-4ea5-bfc8-9c3a6af71376',
        ),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(CardRank.QUEEN),
            '07692482-4073-42aa-9e60-fa90884e45d3',
        ),
        new Card(
            new CardSuit(CardSuit.HEARTS, CardColor.RED),
            new CardRank(CardRank.ACE),
            '6f48ab1e-a7d2-4939-b3f6-4da1117cb6c7',
        ),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(6),
            '8c7c82e2-ded4-42e2-999d-8f9adfad26e4',
        ),
        new Card(
            new CardSuit(CardSuit.CLUBS, CardColor.BLACK),
            new CardRank(CardRank.KING),
            'b9148f05-f9f7-429e-aad8-cf0d25d089cb',
        ),
        new Card(
            new CardSuit(CardSuit.SPADES, CardColor.BLACK),
            new CardRank(CardRank.ACE),
            '484cfdf3-34a4-4956-bb95-0dc128dc9d65',
        ),
        new Card(new CardSuit(CardSuit.HEARTS, CardColor.RED), new CardRank(7), '59560dfc-9124-4dc9-b622-1661027c5ef1'),
        new Card(
            new CardSuit(CardSuit.DIAMONDS, CardColor.RED),
            new CardRank(8),
            '557c097f-efaa-4450-ac0b-12fd76754587',
        ),
    ]);
});
