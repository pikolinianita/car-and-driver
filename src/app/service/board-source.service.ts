import { Injectable } from '@angular/core';
import { TileData } from '../board/tile-data';

@Injectable({
  providedIn: 'root'
})
export class BoardSourceService {

  tilesMap: Map<String, TileData>;

  fieldData: String[][];

  constructor() {
    this.tilesMap = new Map();
    this.tilesMap.set("e", new SolidTile("e", "Empty Field", "assets/img/empty64.png"));
    this.tilesMap.set("v", new SolidTile("v", "Vertical Road", "assets/img/tobo.png"));
    this.tilesMap.set("h", new SolidTile("h", "Horizontal Road", "assets/img/leri.png"));
    this.tilesMap.set("x", new SolidTile("x", "Cross Road", "assets/img/empty64.png"));

    this.fieldData = [["e", "h", "e"], ["v", "x", "v"], ["e", "h", "e"]]

  }

  getMap(): TileData[][] {

    const cols = this.fieldData.length;
    const result: TileData[][] = [];

    for (let i = 0; i < cols; i++) {
      const rows = this.fieldData[i].length;
      const row: TileData[] = [];

      for (let j = 0; j < rows; j++) {
        var field = this.tilesMap.get(this.fieldData[i][j]);
        if (field == undefined) { throw "Hell on Wheels!!! Wrong key in board-service, Translate Map! Field: " + i + " " + j + " !!!" }
        else {
          row.push(field);
        }
      }
      result.push(row);
    }
    return result;
  }

  clicked(row:number,col:number){
      console.log("clicked [" + row + "][" + col + "]")
  }

}



class SolidTile implements TileData {

  constructor(public letter: String, public displayName: String, public pictureLink: String) {
  }

}