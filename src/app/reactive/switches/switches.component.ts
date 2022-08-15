import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });

    // this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {console.log(newValue)}); // subscribimos a un propiedad
    // this.miFormulario.valueChanges.subscribe // quitamos una propiedad para que el objeto sea igual al form
    //   (
    //     form => {
    //       delete form.condiciones;
    //       this.persona = form;
    //     });
    
    this.miFormulario.valueChanges.subscribe // desestructuramos el objeto y nos quedamos con el resto
    (
      ({ condiciones, ...rest}) => {
        this.persona = rest;
      });
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    const nuevaPersona = { ...this.miFormulario.value };
    delete nuevaPersona.condiciones;
    this.persona = nuevaPersona;
    console.log('DESDE GUARDAR:', nuevaPersona);
  }

}
