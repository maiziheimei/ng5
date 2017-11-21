import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  //constructor() {}

  changeGoal(goal) {
    this.goals.next(goal)
  }

  public apiHost: string = 'assets/files/pets.json';

  testdata: Object;
  constructor(private http: Http) {
  this.http.get('assets/files/pets.json')
      .map(res => res.json())
      .subscribe(data => this.testdata = data,
        err => console.log(err),
        () => console.log('Completed'));
  }

}
