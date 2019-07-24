import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'GED-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  form: FormGroup;

  @Input()
  byWebWorker = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      initValue: [],
      multiplier: [],
      times: [],
      result: [{ value: 0, disabled: true }]
    });
  }


  calculate() {
    const formValues = this.form.value;
    this.form.get('result').setValue(formValues.initValue);
    for (let i = 0; i < this.form.get('times').value; i++) {
      this.form.get('result').setValue(this.form.get('result').value * formValues.multiplier);
    }
  }

  calculateWW() {
    const worker = new Worker('./multiplier.worker.ts', { type: 'module' });
    worker.onmessage = ({ data }) => {
      this.form.get('result').setValue(data);
    };

    this.form.get('result').setValue(this.form.get('initValue').value);
    for (let i = 0; i < this.form.get('times').value; i++) {
      worker.postMessage(this.form.value);
    }
  }
}

