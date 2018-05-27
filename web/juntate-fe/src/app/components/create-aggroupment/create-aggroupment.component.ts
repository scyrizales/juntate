import {Component, OnInit} from '@angular/core';
import {Aggroupment} from '../../models/aggroupment';
import {Ammount} from '../../models/ammount.enum';
import {Period} from '../../models/period.enum';
import {RegistrationService} from '../../services/registration.service';
import {CreateAggroupmentService} from '../../services/create-aggroupment.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-aggroupment',
    templateUrl: './create-aggroupment.component.html',
    styleUrls: ['./create-aggroupment.component.css']
})
export class CreateAggroupmentComponent implements OnInit {
    private aggroupment: Aggroupment;
    private ammounts: string[] = Object.keys(Ammount).filter(Number);
    private periods: string[] = Object.keys(Period).filter((e: string) => isNaN(Number(e)));
    private nbParticipants: number[] = [6, 8, 10, 12];

    constructor(private registrationService: RegistrationService,
                private createAggroupmentService: CreateAggroupmentService,
                private router: Router) {
        this.aggroupment = new Aggroupment('', 1);
    }

    public ngOnInit(): void {
        if (!this.registrationService.getUser()) {
            this.router.navigateByUrl('/');
        }
    }

    public calculateTotalAmmount (): Number {

      return this.aggroupment.ammount * this.aggroupment.nbParticipants;
    }

    private isValid(): boolean {
        return this.aggroupment.ammount in Ammount &&
            this.aggroupment.name.length > 0 &&
            this.aggroupment.nbParticipants > 1 &&
            this.aggroupment.period in Period;
    }

    private createAggroupment(): void {
        if (this.isValid()) {
            const user = this.registrationService.getUser();
            debugger;
            this.createAggroupmentService.createAggroupment(this.aggroupment, user)
                .subscribe((aggroupment: Aggroupment) => this.router.navigateByUrl('/juntas'));
        }
    }
}
