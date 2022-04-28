import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  public searchTerm: string = '';
  public errorFound: boolean = false;
  public countryList: Country[] = [];
  public suggestedCountries: Country[] = [];

  public constructor(private countryService: CountryService) {}

  public search(searchTerm: string): void {
    this.searchTerm = '';
    this.suggestedCountries = [];
    this.errorFound = false;

    this.countryService.searchCountry(searchTerm)
      .subscribe(
        (countryList) => {
          this.countryList = countryList;
        },
        (error) => {
          this.errorFound = true;
          this.countryList = [];
        }
      );
  }

  public suggestions(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.countryService.searchCountry(searchTerm)
      .subscribe(
        countriesList => this.suggestedCountries = countriesList.splice(0, 5),
        error => this.suggestedCountries = []
      );
  }
}
