import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }
  numOfCertainType(satellites:Satellite [], typeOfType:string){
    let num=0;
    for(let i=0;i<satellites.length; i++){
      if(satellites[i].type.toLowerCase()===typeOfType){
        num++;
      }
    }
    return num;
  }

}
