import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regla',
  templateUrl: './regla.component.html',
  styleUrls: ['./regla.component.css']
})
export class ReglaComponent implements OnInit {

  formulario!: FormGroup;
  listado: any = [];

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formulario = new FormGroup({
      limiteInferior: new FormControl(null),
      limiteSuperior: new FormControl(null),
      equivalencia: new FormControl(null),
      cantidad: new FormControl({value: 1, disabled: true}),
    })
  }

  get getLimiteInferior(): any {
    return this.formulario.get('limiteInferior');
  }

  get getLimiteSuperior(): any {
    return this.formulario.get('limiteSuperior');
  }

  get getEquivalencia(): any {
    return this.formulario.get('equivalencia');
  }

  get getCantidad(): any {
    return this.formulario.get('cantidad');
  }

  get validar(): boolean {
    if (this.listado && this.listado.length > 0) return false;
    return true;
  }

  get comprobarDatos(): boolean {
    if (!this.getLimiteInferior.value) return false;
    if (!this.getLimiteSuperior.value) return false;
    if (!this.getEquivalencia.value) return false;
    if (!this.getCantidad.value) return false;
    return true;
  }

  agregar() {
    if (this.comprobarDatos) {
      let obj:any = {};
      obj.limiteInferior = this.getLimiteInferior.value;
      obj.limiteSuperior = this.getLimiteSuperior.value;
      obj.equivalencia = this.getEquivalencia.value;
      obj.cantidad = this.getCantidad.value;
      this.listado.push(obj);
      this.limpiarVista();
    }
  }

  limpiarVista() {
    this.initForm();
  }

}
