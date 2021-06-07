import { Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  indianRupeeToMdl = 0.24;
  mdl = 0;

  convert(value: number) {
    this.mdl = this.indianRupeeToMdl * value;
  }
  onInputChange(value: number) {
    this.convert(value);
  }
}
