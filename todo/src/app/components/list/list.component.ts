import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list = [];

  onClickHandler(id) {
    console.log(id);
  }
}

