import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent {
  titulo = 'Crear Empleado';

  empleado: Empleado = new Empleado();

  error: any;

  constructor(private empleadoService: EmpleadoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.empleadoService.buscarxId(id)
        .subscribe(empleado => this.empleado = empleado)
      }
    })
  }

  public crear(): void {
    this.empleadoService.registrarEmpleado(this.empleado).subscribe(empleado => {
      Swal.fire('Nuevo:', `Empleado ${empleado.nombre} creado con éxito`, 'success');
      this.router.navigate(['/empleados']);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

  public editar(): void {
    this.empleadoService.actualizarEmpleado(this.empleado).subscribe(empleado => {
      Swal.fire('Modificado:', `Empleado ${empleado.nombre} actualizado con éxito`, 'success');
      this.router.navigate(['/empleados']);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}
