import { Component, ViewChild } from '@angular/core';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoComunicacion';
  @ViewChild(BodyComponent, {static: false}) componenteHijo;

  recuperarBusqueda(data) {
    console.log(data);
    this.componenteHijo.filtrar(data);
  }
}
