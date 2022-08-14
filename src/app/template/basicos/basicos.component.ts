import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  initForm = {
    producto: 'holaqase',
    precio: 0,
    stock: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  validacionNombre(): boolean {
    return this.miFormulario?.controls['producto']?.invalid &&
           this.miFormulario?.controls['producto']?.touched
  }

  validacionPrecio(): boolean {
    //return !this.miFormulario?.controls['precio']?.invalid &&
    return  this.miFormulario?.controls['precio']?.touched &&
            this.miFormulario?.controls['precio']?.value < 0
  }

  guardar() {
    console.log(this.miFormulario.value)
    this.miFormulario.resetForm({
      precio: 0,
      stock: 0
    });
  }
}
