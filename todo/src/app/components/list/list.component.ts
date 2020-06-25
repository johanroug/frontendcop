import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { StateManagementService } from '../../services/state-management.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() state;
  list = [];
  listFilter = [];

  constructor(
    private stateService: StateManagementService
  ) {}

  ngOnInit() {
    this.stateService.globalList.subscribe(data => {
      this.list = data;
      this.listFilter = this.filterList(this.state);
    });
  }

  filterList(state) {
    return this.list.filter(items => {
      return items.active === state;
    });
  }

  onClickHandler(item) {
    item.active = !item.active;
    this.stateService.globalList.next(this.list);
  }
}

