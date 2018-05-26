import { Component, OnInit } from '@angular/core';
import { Aggroupment } from '../../models/aggroupment';
import { Ammount } from '../../models/ammount.enum';
import { Period } from '../../models/period.enum';

@Component({
  selector: 'app-create-aggroupment',
  templateUrl: './create-aggroupment.component.html',
  styleUrls: ['./create-aggroupment.component.css']
})
export class CreateAggroupmentComponent {
  private aggroupment: Aggroupment;
  private ammounts: string[] = Object.keys(Ammount).filter(Number);
  private periods: string[] = Object.keys(Period).filter((e: string) => isNaN(Number(e)));
  private nbParticipants: number[] = [6, 8, 10, 12];
  constructor() {
    this.aggroupment = new Aggroupment('', 1);
  }

  private isValid(): boolean {
    return this.aggroupment.ammount in Ammount &&
           this.aggroupment.name.length > 0 &&
           this.aggroupment.nbParticipants > 1 &&
           this.aggroupment.period in Period;
  }

  private paymentPeriodically(): number {
    return this.aggroupment.ammount / this.aggroupment.nbParticipants;
  }
}
