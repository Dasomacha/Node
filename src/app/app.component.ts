import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 1';

  nombre = 'Danna Marin';
  email = 'dannas-marinc@unilibre.edu.co';
  sueldos = [5000,600,550];
  activo = true;
  esActivo(){
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador inactivo';
  }
  ultimosSueldos(){
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++) 
      suma = this.sueldos[x];
      return suma;
  }
}
