import { Component } from "@angular/core";
import { Country, RegionalBlock } from "../../interfaces/country.interfaces";
import { CountryService } from "../../services/country.service";

@Component({
  selector: 'app-by-regional-block',
  templateUrl: 'by-regional-bloc.component.html'
})
export class ByRegionalBlocComponent {
  public regionalBlocs: RegionalBlock[] = [
    {
      code: 'EU',
      fullName: 'European Union'
    },
    {
      code: 'EFTA' ,
      fullName: 'European Free Trade Association'
    },
    {
      code: 'CARICOM',
      fullName: 'Caribbean Community'
    },
    {
      code: 'PA',
      fullName: 'Pacific Alliance'
    },
    {
      code: 'AU',
      fullName: 'African Union'
    },
    {
      code: 'USAN',
      fullName: 'Union of South American Nations'
    },
    {
      code: 'EEU',
      fullName: 'Eurasian Economic Union'
    },
    {
      code: 'AL',
      fullName: 'Arab League'
    },
    {
      code: 'ASEAN',
      fullName: 'Association of Southeast Asian Nations'
    },
    {
      code: 'CAIS',
      fullName: 'Central American Integration System'
    },
    {
      code: 'CEFTA',
      fullName: 'Central European Free Trade Agreement'
    },
    {
      code: 'NAFTA',
      fullName: 'North American Free Trade Agreement'
    },
    {
      code: 'SAARC',
      fullName: 'South Asian Association for Regional Cooperation'
    }
  ];

  public regionalBlocSelected: RegionalBlock = {
    code: '',
    fullName: ''
  };

  public countriesList: Country[] = [];

  constructor(private countryService: CountryService) {}

  public showRegion(): void {
    this.countryService.searchRegionalBlock(this.regionalBlocSelected.code)
      .subscribe(
        countriesList => {
          this.countriesList = countriesList;
          console.log(this.countriesList);
        },
        error => {
          this.countriesList = [];
        }
      );
  }

  public getCssButtonClasses(regionalBlocCode: string): string {
    return regionalBlocCode === this.regionalBlocSelected.code ? 'bg-red-500' : 'bg-blue-500 hover:bg-blue-600';
  }
}
