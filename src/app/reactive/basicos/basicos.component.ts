import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[ Validators.required, Validators.minLength(3)]],
    precio: [,[Validators.required, Validators.min(0)]],
    stock: [,[Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder) { }

  validarCampo(campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  ngOnInit(): void {
    this.miFormulario.reset(
      {nombre: 'Jordi Zurita'}
    )
  }

}
