import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit {

  @Input() allData = {};

  constructor() { }



  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log("plup plup");
    console.log(this.allData);
  }
}
