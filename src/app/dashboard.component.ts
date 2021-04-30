
import {Component} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
}
)
export class DashboardComponent{

status = "Loading..";


onUpdateStatus(){
    this.status = "Finished Loading";
}

}