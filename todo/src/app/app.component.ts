import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list = [
    {
      "id": 1,
      "active": true,
      "name": "Tomato"
    },
    {
      "id": 2,
      "active": false,
      "name": "Burger"
    }
  ];
  activeItems = [];
  inActiveItems = [];

  ngOnInit() {
    this.activeItems = this.filterList(true);
    this.inActiveItems = this.filterList(false);
  }

  filterList(activeState) {
    return this.list.filter(items => {
      return items.active === activeState;
    });
  }
}
