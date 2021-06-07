import { Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  indianRupeeToMdl = 0.24;
  indianRupee = 0;
  mdl = 0;

  convert(value: number, toRupee: boolean) {
    if (toRupee) this.indianRupee = value / this.indianRupeeToMdl;
    else this.mdl = this.indianRupeeToMdl * value;
  }
  onInputChange(value: number, toRupee: boolean) {
    this.convert(value, toRupee);
  }
}
