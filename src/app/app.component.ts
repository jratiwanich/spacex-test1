import { Component } from '@angular/core';
import { SpcxRestService} from './spcx-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  entireObj: any;
  createDate: Date;
  modDate: Date;
  features: any[] = [];
    constructor(
      private appSettingsService : SpcxRestService 
  ) { }

  ngOnInit(){
    this.appSettingsService.getJSON().subscribe(data => {
          console.log("data=",data);
          this.entireObj = data;
          //label something on the page
          this. title = data.label;
          this.createDate = data['dcmi:created'];
          this.modDate = data['dcmi:modified'];
          //list out all the features inside json object
          for(let result of data.features){
            this.features.push(result);
         }

         console.log("this.mylist=",this.features);

      });
  }
}
