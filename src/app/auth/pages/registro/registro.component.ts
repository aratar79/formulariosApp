import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    username: ['', [Validators.required, this.vs.noPuedeSeraratar79]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },
  {
    validators: [this.vs.camposIguales('password', 'password2')] // Pasamos como argumento el nombre de las propiedades que queremos comparar en el método
  });

  constructor
    (
      private fb: FormBuilder,
      private vs: ValidatorService
    ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jordi Zurita',
      email: 'test1@test.com',
      username: 'aratar'
    });
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
    console.log(this.miFormulario.value);
  }
}
