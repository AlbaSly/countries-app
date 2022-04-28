import { Component, Output, EventEmitter, OnInit, Input } from "@angular/core";
import { debounceTime, Subject } from "rxjs";

@Component({
  selector: 'app-searcher',
  templateUrl: 'searcher.component.html'
})
export class SearcherComponent implements OnInit{
  private debouncer: Subject<string> = new Subject();

  @Output()
  public onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @Input('placeholder')
  public placeholder: string = '';

  public searchTerm: string = '';

  ngOnInit(): void {
    //Subscribirse a los eventos
    this.debouncer
      //No hacer el subscribe hasta que haya pasado el debounceTime una vez finalizado el contador
      .pipe(debounceTime(400))
      .subscribe(value => {
        this.onDebounce.emit(value); //value equivale a this.searchTerm
      }
    );
  }

  public search(): void {
    this.onEnter.emit(this.searchTerm);
  }

  public keyPressed() {
    this.debouncer.next(this.searchTerm);
  }
}
