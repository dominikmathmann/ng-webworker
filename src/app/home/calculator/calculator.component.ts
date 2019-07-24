import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'GED-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      initValue: [],
      multiplier: [],
      times: [],
      result: [{ value: 0, disabled: true }]
    });
  }

  ngOnInit() {
  }


  calculate() {
    const formValues = this.form.value;
    this.form.get('result').setValue(formValues.initValue);
    for (let i = 0; i < this.form.get('times').value; i++) {
      this.form.get('result').setValue(this.form.get('result').value * formValues.multiplier);
    }
  }
}

