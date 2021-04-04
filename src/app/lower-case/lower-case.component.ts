import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-case',
  templateUrl: './lower-case.component.html',
  styleUrls: ['./lower-case.component.css'],

  
})
export class LowerCaseComponent implements OnInit {

  message : string | undefined;
	address = {
	    village : 'Bharti',
	    district: 'Pune',
      
	}
	setMsg(data:string) {
	   this.message = data;
	}

  constructor() { }

  ngOnInit(): void {
  }

}
