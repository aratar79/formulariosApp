import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  @ViewChild('miFormularioSwitches') miFormularioSwitches!: NgForm;

  get errores(): any {
    return this.miFormularioSwitches?.controls['terminosYcondiciones']?.errors
  }
  
  persona = {
    genero: 'F',
    notificaciones: false
  }

  terminosYcondiciones: boolean = false;

}
