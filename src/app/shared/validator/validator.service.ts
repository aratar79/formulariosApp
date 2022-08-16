import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ValidatorService {

  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public passwordPattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';   //  8 character with one uppercase, one lowercase and one number

  constructor() { }

  noPuedeSeraratar79(control: FormControl): ValidationErrors | null {

    const valor = control.value?.trim();
    if (valor === 'aratar79') {
      return {
        errorArtart: true
      };
    }

    return null;
  }

  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {
      // como pasamos el nombre de las propiedades en los campos por string 
      // los buscamos con el método get dentro del formGroup
      //return formGroup.get(campo1)?.value !== formGroup.get(campo2)?.value ? { noSonIguales: true} :  null;
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noiguales: true };
      }

      formGroup.get(campo2)?.setErrors(null); // Ojo que esto quitará todas las validaciones de este campo
      return null;

    };
  }

}
