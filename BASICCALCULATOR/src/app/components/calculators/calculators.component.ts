import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.css']
})
export class CalculatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  respuesta() {
    let num1:number = this.calculadoraForm.value.number1;
    let num2:number = this.calculadoraForm.value.number2;
    //this.result = this.calculadoraForm.value.number3;
    //this.calculadoraForm.value.number1 +this.calculadoraForm.value.number2;
    this.result = `El resultado de ${num1} + ${num2} es${this.suma(num1,num2)}`;
  }

  suma(val1:number,val2:number):number{
    return val1+val2;
  }

  entre100(val:number):boolean{
    return (val>0 && val<100)?true:false;
  }
}
