import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "../interfaces/country.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private API_URL_previousV: string = 'https://restcountries.com/v2';
  private API_URL: string = 'https://restcountries.com/v3.1';

  private params_previousV: HttpParams = new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flags,population');

  private params: HttpParams = new HttpParams()
    .set('fields', 'name,capital,cca2,flags,population');

  public constructor(private http: HttpClient) {}

  public searchCountry(searchTerm: string): Observable<Country[]> {
    const url: string = `${this.API_URL}/name/${searchTerm}`;

    return this.http.get<Country[]>(url, {params: this.params});
  }

  public searchCapital(searchTerm: string): Observable<Country[]> {
    const url: string = `${this.API_URL}/capital/${searchTerm}`;

    return this.http.get<Country[]>(url, {params: this.params});
  }

  public searchRegion(searchTerm: string): Observable<Country[]> {
    const url: string = `${this.API_URL}/region/${searchTerm}`;

    return this.http.get<Country[]>(url, {params: this.params});
  }
  /*This methdos calls to the previous RESTCountries API (v2) */
  public searchRegionalBlock(searchTerm: string): Observable<Country[]> {
    const url: string = `${this.API_URL_previousV}/regionalbloc/${searchTerm}`;

    return this.http.get<Country[]>(url, {params: this.params_previousV});
  }

  public getCountry(countryCode: string): Observable<Country> {
    const url: string = `${this.API_URL}/alpha/${countryCode}`;

    return this.http.get<Country>(url);
  }
}
