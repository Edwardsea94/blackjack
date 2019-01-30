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
  dealerHand: Card[] = [];
  playerHand: Card[] = [];
  players = Array(this.playerHand);
  gameOver = false;
  playerTotal = 0;
  dealerTotal = 0;

  constructor(private shoe: ShoeService) { }

  findNext() {
    for (let i = 0; i < this.players.length - 1; i++) {
      if(this.players[i].isUp == true) {
        this.players[i].isUp = false;
        this.players[i + 1].isUp = true;
        break;
      }
    }
  }

  split(player) {
    let secondHand: Card[] = [];
    secondHand.push(player.pop());
    this.addCard(player);
    this.addCard(secondHand);
    this.players.push(secondHand);
    player.playerTotal = player[0].value + player[1].value;
    this.players[this.players.length - 1].playerTotal = secondHand[0].value + secondHand[1].value;
    this.players[this.players.length - 1].busted = false;
    this.players[this.players.length - 1].isUp = false;
  }

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
    this.players[0].playerTotal = this.players[0][0].value + this.players[0][1].value;
    this.players[0].isUp = true;
    if (this.players[0].playerTotal == 21) {
      this.players[0].busted = true;
      this.players[0].isUp = false;
      this.players[0].winner = "Player Wins";
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
      this.addCard(this.players[0]);
    }
    this.updateTotals();
  }

  hit(player) {
    this.addCard(player);
    player.playerTotal = 0;

    for (let i = 0; i < player.length; i++) {
      player.playerTotal += player[i].value;
    }

    if (player.playerTotal > 21 || player.playerTotal == 21) {
      player.busted = true;
      this.findNext();
    }

    this.whoWon();
  }

  whoWon() {
    let allBusted = true;
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i].busted) {
        allBusted = false;
      }
    }
    if (allBusted) {
      for (let i = 0; i < this.players.length; i++) {
        if (this.dealerTotal > 21 || (this.dealerTotal < this.players[i].playerTotal && this.players[i].playerTotal < 22) || this.players[i].playerTotal == 21) {
          this.players[i].winner = "Player Wins"
        } else if (this.dealerTotal == this.players[i].playerTotal) {
          this.players[i].winner = "Nobody Wins - Push"
        } else {
          this.players[i].winner = "Dealer Wins"
        }
      }

      this.gameOver = true;
    }
  }

  stay(player) {
    player.busted = true;
    this.findNext();
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
    let player: Card[] = [];
    this.players = [player];
    this.dealerHand = [];
    this.dealerTotal = 0;
    this.playerTotal = 0;
    this.players[0].busted = false;
    this.players[0].isUp = true;

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
