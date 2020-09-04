import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  name = 'Johan Roug';

  globalList = new BehaviorSubject([
    {
      id: 1,
      active: true,
      name: 'Tomato'
    },
    {
      id: 2,
      active: false,
      name: 'Burger'
    },
    {
      id: 3,
      active: false,
      name: 'milk'
    }
  ]);
}
