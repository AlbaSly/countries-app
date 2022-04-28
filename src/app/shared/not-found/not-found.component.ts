import { Component } from "@angular/core";

@Component({
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html',
  styles: [
    `#container {
      cursor: default;
      transition: all .3s ease-in;

      &:hover {
        background-color: white;

        & h1 {
          color: #E04555;
        }
      }
    }`
  ]
})
export class NotFoundComponent {}
