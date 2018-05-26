import { Ammount } from './ammount.enum';
import { Period } from './period.enum';

export class Aggroupment {
    name: string;
    ammount: Ammount;
    nbParticipants: number;
    period: Period;
    constructor(name: string, nbParticipants: number) {
        this.name = name;
        this.nbParticipants = nbParticipants;
        this.ammount = Ammount.THOUSEND;
        this.period = Period.SEMANAL;
    }
}
