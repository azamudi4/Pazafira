import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { FormService } from '../../Services/form.service';
import { Router } from '@angular/router'
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
 
  createUserForm: FormGroup
 
  constructor(
    private formBuilder: FormBuilder,
    private forrmService: FormService,
    private router: Router
  ) { this.validator()
    //En el contructor valido lo que está dentro de la clase
   }
 
  ngOnInit(): void {
    //Cuando necesito hacer cosultas externas, lo valido en ngOnInit
  }
 
  validator(){
    this.createUserForm = this.formBuilder.group({
      CompleteName:["",[Validators.required]],
      Email:["", [Validators.required, Validators.email]],
      PhoneNumber:["",[Validators.required]],
      ProductName:["",[ Validators.required]],
      chooseQuote:["",[ ]],
      writeQuote:["",[ ]]
    })

  } sendData(){

    // console.log(this.createFormoptions.get("EscogerFrase").value)
    // console.log(this.createFormoptions.get("FrasePersonalizada").value)
    
    if (this.createUserForm.valid){
      console.log(this.createUserForm.value)
      this.forrmService.create(this.createUserForm.value).subscribe(
        (FormCreated)=>{
          console.log(FormCreated)
          swal("¡Muy bien!", "Se ha envíado la información", "success");
        }
      ),  
     (error)=>{
      swal("¡Error!", "No se ha podido enviar la información", "error");
    }

    }else{
      swal("¡Alerta!", "Debes llenar todos los campos", "info");
    } 

  this.router.navigateByUrl('/', {skipLocationChange: true}).then(
    ()=>
    this.router.navigate(['/formulario'])
  )
  }
}