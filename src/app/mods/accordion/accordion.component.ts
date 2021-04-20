import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() data = [];
  openIndexItem = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {

    if (index === this.openIndexItem) {
      this.openIndexItem = -1;
    } else {
      this.openIndexItem = index;

    }
  }

}
