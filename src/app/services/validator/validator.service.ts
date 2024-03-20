import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {


  constructor() { }

  validateField(formControl: any) {
    if (formControl && formControl.invalid && formControl.touched) { return true }
    else return false;
  }

  validateEmail(email: any) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (((!regex.test(email.value) && email.value) && email.touched) || email.value == '') {
      return { 'incorrect': true };
    } else {
      return null;
    }
  }

  getCpfCnpjMask(cpfCnpj: string) {
    if (cpfCnpj.length > 11) return '00.000.000/0000-00';
    else return '000.000.000-00';
  }

  removeAcento(text) {
    if(!text) return '';
    text = text.normalize('NFD').replace(/\p{Mn}/gu, "");
    return text;
  }

}

