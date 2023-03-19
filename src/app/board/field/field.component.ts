import { Component, OnInit, Input } from '@angular/core';
import { TileData } from '../tile-data';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() public data! :TileData;

  //constructor() { }

  ngOnInit(): void {
  }

}
