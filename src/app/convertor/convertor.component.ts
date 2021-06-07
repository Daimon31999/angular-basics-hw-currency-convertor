import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConvertService } from '../convert.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css'],
})
export class ConvertorComponent implements OnInit {
  title = 'angular-currency-convertor-hw';

  constructor(
    public convertService: ConvertService,
    @Inject(DOCUMENT) document: any
  ) {}
  input = new FormControl('');
  currencyArr = ['Rupee', 'MDL'];

  ngOnInit() {
    this.input.valueChanges.subscribe((value: any) => {
      let inputValue = Number(this.input.value);
      let toRupee: boolean = this.currencyArr[0] === 'Rupee' ? false : true;
      this.convertService.onInputChange(inputValue, toRupee);
    });
  }

  reset() {
    this.input.reset();
  }

  private addActiveClassToHtmlElement(id: string) {
    let activeElement, disabledElement;
    switch (id) {
      case 'mdlButton':
        activeElement = document.getElementById('mdlButton');
        disabledElement = document.getElementById('rupeeButton');

        break;
      case 'rupeeButton':
        activeElement = document.getElementById('rupeeButton');
        disabledElement = document.getElementById('mdlButton');
        break;
    }
    activeElement?.classList.add('active');
    disabledElement?.classList.remove('active');
  }
  swap(id: string) {
    this.addActiveClassToHtmlElement(id);
    this.currencyArr = this.currencyArr.reverse();
    this.input.reset();
  }
}
