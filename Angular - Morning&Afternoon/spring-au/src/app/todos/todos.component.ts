import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../service/todo-service.service';
import { TodosModel } from '../todos.model';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: TodosModel[] = [];

  constructor(private api: TodoServiceService) {  }
  
  ngOnInit(): void {
    this.api.apiCall().subscribe(response=>{
      this.todos = response;
    });
  }
  
  selectedTodo : any;

  onSelect(todo: any){
    this.selectedTodo = todo;
  };

}
