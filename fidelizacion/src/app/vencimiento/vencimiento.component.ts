import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vencimiento',
  templateUrl: './vencimiento.component.html',
  styleUrls: ['./vencimiento.component.css']
})
export class VencimientoComponent implements OnInit {

  formulario!: FormGroup;
  listado: any = [];

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formulario = new FormGroup({
      nombre: new FormControl(null),
      apellido: new FormControl(null),
      documento: new FormControl(null),
      tipo: new FormControl(null),
      nacionalidad: new FormControl(null),
      email: new FormControl(null),
      telefono: new FormControl(null),
      fecha: new FormControl(null),
    })
  }

  get getNombre(): any {
    return this.formulario.get('nombre');
  }

  get getApellido(): any {
    return this.formulario.get('apellido');
  }

  get getDocumento(): any {
    return this.formulario.get('documento');
  }

  get getTipo(): any {
    return this.formulario.get('tipo');
  }

  get getNacionalidad(): any {
    return this.formulario.get('nacionalidad');
  }

  get getEmail(): any {
    return this.formulario.get('email');
  }

  get getTelefono(): any {
    return this.formulario.get('telefono');
  }

  get getFecha(): any {
    return this.formulario.get('fecha');
  }

  get validar(): boolean {
    if (this.listado && this.listado.length > 0) return false;
    return true;
  }

  get comprobarDatos(): boolean {
    if (!this.getNombre.value) return false;
    if (!this.getApellido.value) return false;
    if (!this.getDocumento.value) return false;
    if (!this.getTipo.value) return false;
    if (!this.getNacionalidad.value) return false;
    if (!this.getEmail.value) return false;
    if (!this.getTelefono.value) return false;
    if (!this.getFecha.value) return false;
    return true;
  }

  agregarCliente() {
    if (this.comprobarDatos) {
      let obj:any = {};
      obj.nombre = this.getNombre.value;
      obj.apellido = this.getApellido.value;
      obj.documento = this.getDocumento.value;
      obj.tipo = this.getTipo.value;
      obj.nacionalidad = this.getNacionalidad.value;
      obj.email = this.getEmail.value;
      obj.telefono = this.getTelefono.value;
      obj.fecha = this.getFecha.value;
      this.listado.push(obj);
      this.formulario.reset();
    }
  }

  limpiarVista() {
    this.formulario.reset();
  }

}
