import { Component } from '@angular/core';
import { SpcxRestService} from './spcx-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  features: any[] = [];
    constructor(
      private appSettingsService : SpcxRestService 
  ) { }

  ngOnInit(){
    this.appSettingsService.getJSON().subscribe(data => {
          console.log("data=",data);
          this. title = data.label;
          for(let result of data.features){
            this.features.push(result);
         }

         console.log("this.mylist=",this.features);

      });
  }
}
