import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css']
})
export class ConceptoComponent implements OnInit {

  formulario!: FormGroup;
  listado: any = [];

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formulario = new FormGroup({
      descripcion: new FormControl(null),
      puntos: new FormControl(null)
    })
  }

  get getDescripcion(): any {
    return this.formulario.get('descripcion');
  }

  get getPuntos(): any {
    return this.formulario.get('puntos');
  }

  get validar(): boolean {
    if (this.listado && this.listado.length > 0) return false;
    return true;
  }

  get comprobarDatos(): boolean {
    if (!this.getDescripcion.value) return false;
    if (!this.getPuntos.value) return false;
    return true;
  }

  agregar() {
    if (this.comprobarDatos) {
      let obj:any = {};
      obj.descripcion = this.getDescripcion.value;
      obj.puntos = this.getPuntos.value;
      this.listado.push(obj);
      this.formulario.reset();
    }
  }

  limpiarVista() {
    this.formulario.reset();
  }

}
