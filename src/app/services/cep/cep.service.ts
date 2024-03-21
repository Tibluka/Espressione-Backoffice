import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { Cep, Uf } from 'src/app/models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {


  private addressData: Cep = new Cep();
  private ufsData: Array<any> = [];
  private countriesData: Array<any> = [];

  get address() {
    return this.addressData;
  }

  get ufs() {
    return this.ufsData;
  }

  get countries() {
    return this.countriesData;
  }

  constructor(private http: HttpClient,
    private toastService: ToastService) { }


  async getCountries() {
    this.toastService.clear();
    try {
      const countries = await this.http.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/paises`).toPromise();
      this.countriesData = countries;
      return countries;
    } catch (error) {
      this.toastService.show('Ops! Ocorreu um erro. Tente novamente.', {
        classname: 'toast-danger toast not-logged-user'
      });
      return null;
    }
  }


  async getCep(cep: string) {
    this.toastService.clear();
    try {
      const address = await this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
      this.addressData = address;
      return address;
    } catch (error) {
      this.toastService.show('Ops! Ocorreu um erro. Tente novamente.', {
        classname: 'toast-danger toast not-logged-user'
      });
      return null;
    }
  }

  async getUfs() {
    this.toastService.clear();
    try {
      const ufs = await this.http.get<Array<Uf>>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').toPromise();
      let arr = ufs.sort((a, b) => {
        if (a.sigla > b.sigla) {
          return 1;
        }
        if (a.sigla < b.sigla) {
          return -1;
        }
        return 0;
      });
      this.ufsData = arr;
      return ufs;
    } catch (error) {
      this.toastService.show('Ops! Ocorreu um erro. Tente novamente.', {
        classname: 'toast-danger toast not-logged-user'
      });
      return null;
    }
  }

}
