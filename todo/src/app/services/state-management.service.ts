import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {
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
