import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  showModal: boolean = false;
  data = [
    { title: 'Why is the sky blue', content: 'Just because the sky is blue' },
    { title: 'Why are you tall', content: 'Just Because I am not short' }, 
    { title: 'What is the color of an orange', content: 'Orange it is'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showModal = !this.showModal; 

  }

}
