import { Component, ViewChild ,inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc,collection } from 'firebase/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild("createPortfolioform") portfolioForm :any;
  
  resetForm():void{
   this.portfolioForm.reset({
    'name':'',
    'email':'',
    'textarea':'',
   })
  }
  submitForm():void{
    alert(this.portfolioForm.value.name);
    this.resetForm();
  }
}
