import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Satisfaction Score' }
  ];

  items = [
    { image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' , title: 'Couch', description: 'A couch' },
    { image: 'https://images.unsplash.com/photo-1612908317776-a3afde8232fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3NlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', title: 'Dresser', description: 'A dresser' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
