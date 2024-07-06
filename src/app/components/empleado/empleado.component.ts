import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit{

titulo : string = 'Listado de Empleados';
empleados : Empleado[];
constructor(private empleadoService : EmpleadoService){}
ngOnInit(): void {
  this.listarEmpleado();
}

public listarEmpleado() : void {
  this.empleadoService.listarEmpleado().subscribe(empleados => {
    this.empleados = empleados;
  })
}

public eliminar(empleado: Empleado): void{

  Swal.fire({
    title: 'Cuidado:',
    text: `¿Seguro que desea eliminar a ${empleado.nombre} ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.value) {
      this.empleadoService.eliminarEmpleado(empleado.id).subscribe(() => {
        this.empleados = this.empleados.filter(a => a !== empleado);
        Swal.fire('Eliminado:', `Empleado ${empleado.nombre} eliminado con éxito`, 'success');
      });
    }
  });

}
}
