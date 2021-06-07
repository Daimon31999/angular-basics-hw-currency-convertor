import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css'],
})
export class ConvertorComponent implements OnInit {
  title = 'angular-currency-convertor-hw';
  constructor(public convertService: ConvertService) {}
  myInput = new FormControl('');

  ngOnInit() {
    this.myInput.valueChanges.subscribe((value: any) =>
      this.convertService.onInputChange(Number(this.myInput.value))
    );
  }
  reset() {
    this.myInput.reset();
  }
}
