import { Component, OnInit } from '@angular/core';
declare let L;
declare let tomtom: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    const map = tomtom.L.map('map', {
      key: 'WsFezqApOHUBD9H0WQ3SwYyCyM7sGGS1',
      basePath: '/assets/sdk',
      center: [ 37.769167, -122.478468 ],
      zoom: 15,
      source : 'vector'
  });
}
  title = 'RoadMap';
}
