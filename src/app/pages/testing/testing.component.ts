import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {


  tabs: string = 'saturday'

  switchTab(tab: string) {
    this.tabs = tab;
  }
}
