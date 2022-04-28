import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent implements OnInit {
  public regions: string[] = ['americas', 'asia', 'europe', 'oceania', 'africa']
  public regionSelected!: string;
  public countriesList: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  public showRegion(): void {
    this.countryService.searchRegion(this.regionSelected)
      .subscribe(
        countriesList => {
          this.countriesList = countriesList;
        },
        error => {
          this.countriesList = [];
        }
      );
  }

  public getCssButtonClasses(region: string): string {
    return region === this.regionSelected ? 'bg-red-500' : 'bg-blue-500 hover:bg-blue-600';
  }
}
