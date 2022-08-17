import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username: ['', [Validators.required, this.vs.noPuedeSeraratar79]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },
    {
      validators: [this.vs.camposIguales('password', 'password2')] // Pasamos como argumento el nombre de las propiedades que queremos comparar en el método
    });

  get errorMailMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'El email es obligatorio.';
    }
    else if (errors?.['pattern']) {
      return 'escribe un email correcto.';
    }
    else if (errors?.['enUso']) {
      return 'La cuenta de correo ya esta en uso.';
    }
    return '';
  }

  constructor
    (
      private fb: FormBuilder,
      private vs: ValidatorService,
      private ev: EmailValidatorService
    ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jordi Zurita',
      email: 'test1@test.com',
      username: 'aratar',
      password: '123456',
      password2: '123456'
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
