import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/Class/lead';
import { LeadOperationService } from '../../Service/lead-operation.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent {

  isLinear=true;
  lead: Lead =new Lead(0,'','',0,'','',0,'','','','',0,'','',0,0,'','');
  AddForm!: FormGroup;

  constructor(private builder:FormBuilder, private leadService:LeadOperationService){
  
  this.AddForm=this.builder.group({
    personal:this.builder.group({
      firstName:this.builder.control('',Validators.required),
      lastName:this.builder.control('',Validators.required),
      phoneNumber:this.builder.control('',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      emailAddress: this.builder.control('', Validators.email),
      dateOfBirth:this.builder.control('',Validators.required),
      pincode:this.builder.control(0,[Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
      gender:this.builder.control('',Validators.required),
      doYouSmoke:this.builder.control('',Validators.required),
      doYouConsumeAlcohol:this.builder.control('',Validators.required),
      address:this.builder.control('',Validators.required),
      birthday:this.builder.control(0,Validators.required),
      addDependents: this.builder.control('', Validators.required)
    }),

    income:this.builder.group({
      annualIncome:this.builder.control('',Validators.required),
      money1:this.builder.control(0,[Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      money2:this.builder.control(0,[Validators.required, Validators.pattern(/^[0-9]{10}$/)])
    }),

    documents:this.builder.group({
      identityName:this.builder.control('',Validators.required),
      financialName:this.builder.control('',Validators.required)
    }),

    quotation:this.builder.group({

    })
  });
}


  // submit(){
  //   if(this.lead.valid){
  //     console.log(this.Lead.value);
  //     const formData = this.Lead.value;
  //     console.log(formData);
  //     this.leadService.addLead(formData).subscribe(
  //       data=>{
  //         console.log('Data: '+data);
  //       },
  //       err=>{
  //         console.error('Error saving Data '+err);
  //       }
  //     );
  
  //   }else {
  //     // Handle form validation errors
  //     Object.keys(this.Lead.controls).forEach(field => {
  //       const control = this.Lead.get(field);
  //       if (control) {
  //         control.markAsTouched({ onlySelf: true });
  //       }
  //     });
  //   }
  // }
  
}
