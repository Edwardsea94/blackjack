import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service'
import {Card} from "../card";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  deck: Card[];
  dealerHand = Array();
  playerHand = Array();
  busted = false;
  gameOver = false;
  playerTotal = 0;
  dealerTotal = 0;
  winner = "";
  constructor(private shoe: ShoeService) { }

  shuffle() {
    let counter = this.deck.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = this.deck[counter];
      this.deck[counter] = this.deck[index];
      this.deck[index] = temp;
    }
  }

  updateTotals() {
    this.dealerTotal = this.dealerHand[1].value;
    this.playerTotal = this.playerHand[0].value + this.playerHand[1].value;
    if (this.playerTotal == 21) {
      this.busted = true;
      this.winner = "Player";
      this.gameOver = true;
      this.dealerTotal = 0;
      for (let i = 0; i < this.dealerHand.length; i++) {
        this.dealerTotal += this.dealerHand[i].value;
      }
    }
  }

  deal() {
    for (let i = 0; i < 2; i++) {
      this.addCard(this.dealerHand);
      this.addCard(this.playerHand);
    }
    this.updateTotals();
  }

  hit() {
    this.addCard(this.playerHand);
    this.playerTotal = 0;

    for (let i = 0; i < this.playerHand.length; i++) {
      this.playerTotal += this.playerHand[i].value;
    }

    if (this.playerTotal > 21) {
      this.busted = true;
      this.winner = "Dealer";
      this.gameOver = true;
      this.dealerTotal = 0;
      for (let i = 0; i < this.dealerHand.length; i++) {
        this.dealerTotal += this.dealerHand[i].value;
      }
    } else if (this.playerTotal == 21) {
      this.busted = true;
      this.winner = "Player";
      this.gameOver = true;
      this.dealerTotal = 0;
      for (let i = 0; i < this.dealerHand.length; i++) {
        this.dealerTotal += this.dealerHand[i].value;
      }
    }
  }

  whoWon() {
    if (this.dealerTotal > 21 || this.dealerTotal < this.playerTotal) {
      this.winner = "Player"
    } else if (this.dealerTotal == this.playerTotal) {
      this.winner = "Nobody - Push"
    } else {
      this.winner = "Dealer"
    }

    this.gameOver = true;
  }

  stay() {
    this.busted = true;
    this.dealerTotal = 0;
    for (let i = 0; i < this.dealerHand.length; i++) {
      this.dealerTotal += this.dealerHand[i].value;
    }
    while (this.dealerTotal < 17) {
      this.addCard(this.dealerHand);
      this.dealerTotal = 0;
      for (let i = 0; i < this.dealerHand.length; i++) {
        this.dealerTotal += this.dealerHand[i].value;
      }    }

    this.whoWon()
  }

  redeal() {
    this.playerHand = [];
    this.dealerHand = [];
    this.dealerTotal = 0;
    this.playerTotal = 0;
    this.busted = false;

    if (this.deck.length < 20) {
      for (let i = 0; i < this.deck.length; i++) {
        this.deck.pop();
      }
      this.ngOnInit()
    }

    this.gameOver = false;

    this.deal();
  }

  addCard(deck) {
    let card = this.deck.pop();
    let total = 0;

    for (let i = 0; i < deck.length; i++) {
      total += deck[i].value;
    }

    if (card.id == 'Ace' && total <= 10) {
      card.value = 11;
    }

    total += card.value;

    if (total > 21) {
      for (let i = 0; i < deck.length; i++) {
        if (deck[i].value == '11') {
          deck[i].value = '1';
        }
      }
    }

    deck.push(card);
  }

  ngOnInit() {
    this.deck = this.shoe.createDeck();
    this.shuffle();
    this.deck.pop();
  }

}
