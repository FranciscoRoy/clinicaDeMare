import { Component, Input } from '@angular/core';
import { GeneralComponent } from "../general/general.component";
import { InicioComponent } from "../inicio/inicio.component";
import { IngresoComponent } from '../ingreso/ingreso.component';
import { RegistroComponent } from '../registro/registro.component';
import { ErrorComponent } from '../error/error.component';
import { NavegacionService } from '../servicios/navegacion.service';
import { ColoresComponent } from '../colores/colores.component';

@Component({
    selector: 'app-ventanaprincipal',
    standalone: true,
    templateUrl: './ventanaprincipal.component.html',
    styleUrl: './ventanaprincipal.component.css',
    imports: [GeneralComponent, InicioComponent, IngresoComponent, RegistroComponent, ErrorComponent, ColoresComponent]
})

export class VentanaprincipalComponent{
  @Input() usuarioEstado: boolean = false;
  ventanaEstado: number = 0;
  
  constructor(private navegacionService: NavegacionService) { }
  ngOnInit(): void {
    this.navegacionService.estadoVentana$.subscribe(estado => {
      this.ventanaEstado = estado;
    });
  }

  titulo: string = "TITULO DE PRUEBA";
  cambiarTitulo(nuevoTitulo: string){
    this.titulo = nuevoTitulo;
  }


}
