import { Component, OnInit } from '@angular/core';
import { BoardSourceService } from '../service/board-source.service';
import { TileData } from './tile-data';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public boardCopy :TileData[][];

  public width:number;

  private TILE_SIZE=64;

  constructor(private boardService: BoardSourceService) {
    this.boardCopy = boardService.getMap();
    this.width = this.boardCopy.length * this.TILE_SIZE;
   }

  ngOnInit(): void {
  }

  getBoard() :TileData[][]{
    return this.boardService.getMap();
  }

  onTileClicked(row:number, col:number):void{
    this.boardService.clicked(row,col);
  }

}
