import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, LanguageCode } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: [
    'view-country.scss'
  ]
})
export class ViewCountryComponent implements OnInit {
  public country!: Country;

  public isLoading: boolean = true;
  public countryFound: boolean = false;
  public coatIsLoading: boolean = true;
  public flagIsLoading: boolean = true;

  public Object_!: any;
  public JSON_!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {
    this.Object_ = Object;
    this.JSON_ = JSON;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        //Para mandar y recibir un Observer
        switchMap(({code}) => this.countryService.getCountry(code)),
        //Para imprimir información en consola
        tap(console.log)
      )
      .subscribe(
        country => {
          this.country = country[0];
          this.isLoading = false;
          this.countryFound = true;
        },
        error => {
          this.isLoading = false;
          this.flagIsLoading = false;
          this.coatIsLoading = false;
          this.countryFound = false;
        }
      );

    // this.activatedRoute.params.subscribe(({code}) => {
    //   this.countryCode = code;
    //   this.countryService.getCountry(this.countryCode)
    //     .subscribe(country => {
    //       console.log(country);
    //     })
    // })
  }
  public getTranscriptionsOfCountryName() {
    let transcriptionsOfCountryName: LanguageCode[] = [];
    Object.entries(this.country.name.nativeName).forEach(name => {
      let transcription: any = {
        languageCode: name[0]
      };
      Object.assign(transcription, name[1]);

      transcriptionsOfCountryName.push(transcription as LanguageCode);
    });
    return transcriptionsOfCountryName;
  }
}
