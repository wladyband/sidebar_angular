import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slidebarUi';


  _opened: boolean = false;

  _toggleOpened(): void {
    this._opened = !this._opened;
  }

}
