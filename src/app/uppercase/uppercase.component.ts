import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css'],
 
})
export class UppercaseComponent implements OnInit {
  inputData : string | undefined;
	address = {
	    village : 'Bharti',
	    district: 'pune',
      
	}
	setData(data:string) {
	   this.inputData = data;
	}

  constructor() { }

  ngOnInit(): void {
  }

}
function input(input: any) {
  throw new Error('Function not implemented.');
}

