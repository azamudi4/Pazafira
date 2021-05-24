import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
const swal = require ("sweetalert")
 
/**
 * FormBuilder: Contruye el formulario
 * Validator: Valida que los campos esten llenos
 * FormGroup: Trabaja como grupo el formulario, todo el formulario se debe comportar como grupo
 */
 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 
  createFormulario: FormGroup
  createFormoptions: FormGroup
 
  constructor(
    private formBuilder: FormBuilder
  ) { this.validator()
    //En el contructor valido lo que está dentro de la clase
   }
 
  ngOnInit(): void {
    //Cuando necesito hacer cosultas externas, lo valido en ngOnInit
  }
 
  validator(){
    this.createFormulario = this.formBuilder.group({
      Nombre:["",[Validators.required]],
      Email:["", [Validators.required, Validators.email]],
    Celular:["",[Validators.required]],
    EscogerProducto:["",[ Validators.required]],
    })
    this.createFormoptions = this.formBuilder.group({
      EscogerFrase:["",[ ]],
      FrasePersonalizada:["",[ ]]
    })

  } sendData(){

    console.log(this.createFormoptions.get("EscogerFrase").value)
    console.log(this.createFormoptions.get("FrasePersonalizada").value)
    
    if (this.createFormulario.valid){
      swal("¡Muy bien!", "Se envío la información !", "success");
    }else{
      swal("Error", "No se envío la información !", "error");
    }
    if (this.createFormoptions.valid) {
      
    } else{
       swal("¡Alerta!", "Debes escoger o escribir una frase !", "info");
    }

    
  }
 
}