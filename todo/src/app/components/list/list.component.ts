import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() active;
  list = [];
  listFiltered = [];

  constructor(
    private stateService: StateService
  ) {}

  ngOnInit() {
    console.log(this.stateService.name);
    this.stateService.globalList.subscribe(data => {
      console.log(data);
      this.list = data;
      this.listFiltered = this.filterList(this.active);
    });
  }

  filterList(state) {
    return this.list.filter(item => {
      return item.active === state;
    });
  }

  onClickHandler(item) {
    console.log(item);
    item.active = !item.active;
    this.stateService.globalList.next(this.list);
  }
}

