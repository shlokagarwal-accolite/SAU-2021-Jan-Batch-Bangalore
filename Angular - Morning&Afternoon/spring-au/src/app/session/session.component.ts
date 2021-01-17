import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../service/session-service.service';
//import { Session } from 'inspector';
import { SessionModel } from '../session.model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

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

  

  add(value: any){
    this.sessions.push({
      name:value.name,
      trainer:value.trainer,
      date:value.date
    });
  }
  
  delete(sessions: SessionModel): void{
      
    let index = this.sessions.indexOf(sessions);
    this.sessions.splice(index, 1);
  }
  editName : string = "";
  editTrainer : string = "";
  editDate : string = "";
  editId : string = "";
  edit(value: any): void{
    this.editName = value.name;
    this.editTrainer = value.trainer;
    this.editDate = value.date;
    this.editId = value.index;  
    console.log(value.date)
    this.sessions.map((session, index) => {
      if(index == (parseInt(this.editId)-1)) {
        if(this.editName != "")
        session.name = this.editName
        if(this.editTrainer != "")
        session.trainer = this.editTrainer
        if(this.editDate != "")
        session.date = this.editDate
      }
      return session;
    })
  }

  selectedSession: SessionModel = new SessionModel();
  constructor(private service: SessionServiceService) {
    this.sessions = this.service.getSessionList();
   }

  ngOnInit(): void {
  }
  onSelect(session: SessionModel){
    this.selectedSession=session;
  }
}
