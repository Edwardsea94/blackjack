import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShoeService {
  suits = ['spades', 'hearts', 'diamonds', 'clubs'];
  images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Poker-sm-211-As.png/100px-Poker-sm-211-As.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Poker-sm-21D-2s.png/100px-Poker-sm-21D-2s.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Poker-sm-21C-3s.png/100px-Poker-sm-21C-3s.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Poker-sm-21B-4s.png/100px-Poker-sm-21B-4s.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Poker-sm-21A-5s.png/50px-Poker-sm-21A-5s.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Poker-sm-219-6s.png/100px-Poker-sm-219-6s.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Poker-sm-218-7s.png/100px-Poker-sm-218-7s.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Poker-sm-217-8s.png/100px-Poker-sm-217-8s.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Poker-sm-216-9s.png/100px-Poker-sm-216-9s.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Poker-sm-215-Ts.png/100px-Poker-sm-215-Ts.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Poker-sm-214-Js.png/100px-Poker-sm-214-Js.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Poker-sm-213-Qs.png/100px-Poker-sm-213-Qs.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Poker-sm-212-Ks.png/100px-Poker-sm-212-Ks.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Poker-sm-221-Ah.png/100px-Poker-sm-221-Ah.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Poker-sm-22D-2h.png/100px-Poker-sm-22D-2h.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Poker-sm-22C-3h.png/100px-Poker-sm-22C-3h.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Poker-sm-22B-4h.png/100px-Poker-sm-22B-4h.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Poker-sm-22A-5h.png/100px-Poker-sm-22A-5h.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Poker-sm-229-6h.png/100px-Poker-sm-229-6h.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Poker-sm-228-7h.png/100px-Poker-sm-228-7h.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Poker-sm-227-8h.png/100px-Poker-sm-227-8h.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Poker-sm-226-9h.png/100px-Poker-sm-226-9h.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Poker-sm-225-Th.png/100px-Poker-sm-225-Th.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Poker-sm-224-Jh.png/100px-Poker-sm-224-Jh.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Poker-sm-223-Qh.png/100px-Poker-sm-223-Qh.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Poker-sm-222-Kh.png/100px-Poker-sm-222-Kh.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Poker-sm-231-Ad.png/100px-Poker-sm-231-Ad.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Poker-sm-23D-2d.png/100px-Poker-sm-23D-2d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Poker-sm-23C-3d.png/100px-Poker-sm-23C-3d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Poker-sm-23B-4d.png/100px-Poker-sm-23B-4d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Poker-sm-23A-5d.png/100px-Poker-sm-23A-5d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Poker-sm-239-6d.png/100px-Poker-sm-239-6d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Poker-sm-238-7d.png/100px-Poker-sm-238-7d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Poker-sm-237-8d.png/100px-Poker-sm-237-8d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Poker-sm-236-9d.png/100px-Poker-sm-236-9d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Poker-sm-235-Td.png/100px-Poker-sm-235-Td.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Poker-sm-234-Jd.png/100px-Poker-sm-234-Jd.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Poker-sm-233-Qd.png/100px-Poker-sm-233-Qd.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Poker-sm-232-Kd.png/100px-Poker-sm-232-Kd.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Poker-sm-241-Ac.png/100px-Poker-sm-241-Ac.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Poker-sm-24D-2c.png/100px-Poker-sm-24D-2c.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Poker-sm-24C-3c.png/100px-Poker-sm-24C-3c.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Poker-sm-24B-4c.png/100px-Poker-sm-24B-4c.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Poker-sm-24A-5c.png/100px-Poker-sm-24A-5c.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Poker-sm-249-6c.png/100px-Poker-sm-249-6c.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Poker-sm-248-7c.png/100px-Poker-sm-248-7c.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Poker-sm-247-8c.png/100px-Poker-sm-247-8c.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Poker-sm-246-9c.png/100px-Poker-sm-246-9c.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Poker-sm-245-Tc.png/100px-Poker-sm-245-Tc.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Poker-sm-244-Jc.png/100px-Poker-sm-244-Jc.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Poker-sm-243-Qc.png/100px-Poker-sm-243-Qc.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Poker-sm-242-Kc.png/100px-Poker-sm-242-Kc.png'
  ];
  deck = Array();
  constructor() { }

  createDeck() {
    for (let k = 0; k < 6; k++) {
      for (let i = 0; i < this.suits.length; i++) {
        for (let j = 1; j < 14; j++) {
          let cardID = this.images[(i * 13) + j - 1];
          let value = j;
          let id;
          switch (j) {
            case 1: {
              id = 'Ace';
              value = 1;
              break;
            }
            case 11: {
              id = 'Jack';
              value = 10;
              break;
            }
            case 12: {
              id = 'Queen';
              value = 10;
              break;
            }
            case 13: {
              id = 'King';
              value = 10;
              break;
            }
            default: {
              id = j.toString()
            }
          }
          // let card = {id: id, value: value, suit: this.suits[i]};
          let card = {id: id, value: value, suit: this.suits[i], image: cardID};
          this.deck.push(card)
        }
      }
    }
    return this.deck;
  }
}
