import { Component } from '@angular/core';
import { LeadOperationService } from '../../Service/lead-operation.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent {


  constructor(private leadService:LeadOperationService){ }
}
