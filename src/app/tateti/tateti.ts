import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tateti',
  imports: [CommonModule, FormsModule],
  templateUrl: './tateti.html',
  styleUrl: './tateti.css',
})
export class Tateti {
  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;

  winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  play(index: number) {
    if (this.board[index] === '' && !this.winner) {
      this.board[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner() {
    for (let condition of this.winConditions) {
      const [a, b, c] = condition;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.winner = this.board[a];
        return;
      }
    }

    if (!this.board.includes('')) {
      this.winner = 'Empate';
    }
  }

  reset() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
