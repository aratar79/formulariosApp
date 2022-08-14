import { Component } from '@angular/core';

interface Persona {
  nombre:    string;
  favoritos: Favorito[]
}

interface Favorito {
  id:     number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Jordi Zurita',
    favoritos: [
      {id: 1, nombre: 'Hola qAse'},
      {id: 2, nombre: 'Adios qAse'}      
    ]
  }

  eliminar(indice: number) {
    this.persona.favoritos.splice(indice, 1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  guardar() {
    console.log('form post');
  }

}
