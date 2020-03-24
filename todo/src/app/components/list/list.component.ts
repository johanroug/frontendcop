import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list = [];
  @Output() itemState = new EventEmitter();

  onClickHandler(item) {
    this.itemState.emit(item);
  }
}

