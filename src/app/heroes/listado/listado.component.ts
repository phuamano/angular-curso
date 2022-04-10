import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
  ];
  
  delHeroe: string ='';
  estado: boolean = false;
  borrarHeroe() {
    this.delHeroe = this.heroes.shift() || '';
    this.estado=true;
  }
}
