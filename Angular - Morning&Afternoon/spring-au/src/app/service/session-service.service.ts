import {Injectable} from '@angular/core';
import {SessionModel} from '../session.model';
 
@Injectable({
    providedIn: 'root'

})
export class SessionServiceService {
    constructor() { }
    getSessionList() {
        return this.sessions;
    }
    sessions: SessionModel[] = [
        {
          name: 'VCS/Git',
          trainer: 'Devansh Sharma',
          date: '06/01/2021'
        },
        {
          name: 'Javascript-1',
          trainer: 'Anushree',
          date: '11/01/2021'
        },
        {
          name: 'RDBMS/SQL Fundamentals',
          trainer: 'Sivagami S',
          date: '07/01/2021'
        },
        {
          name: 'HTML5/CSS3',
          trainer: 'Vigneshwar K',
          date: '08/01/2021'
        }
      ];    
}