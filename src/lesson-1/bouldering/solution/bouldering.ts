export interface CompetitorScore {
    competitorName: string;
    tops: number;
    zones: number;
    zoneAttempts: number;
    boulderAttemps: number;
}

export class BoulderingCalculator {
    private competitors: CompetitorScore[] = [];

    setScore(competitorScore: CompetitorScore) {
        if (competitorScore.boulderAttemps < competitorScore.tops) {
            throw new Error('Error completing top without attemps');
        }

        if (competitorScore.zoneAttempts < competitorScore.zones) {
            throw new Error('Error: zone attemps cant be less than zone points');
        }

        this.competitors.push(competitorScore);
    }

    calculateWinOrder(): string[] {
        const winners = this.competitors
            .sort((comp1, comp2) => {
                // descending who did top wins
                if (comp1.tops < comp2.tops) {
                    return 1
                }
                if (comp1.tops > comp2.tops) {
                    return -1
                }

                // descending higher number of zones win
                if(comp1.zones > comp2.zones){
                    return -1
                }
                if(comp1.zones < comp2.zones){
                    return 1
                }

                // ascending lower boulder attempts win
                if(comp1.boulderAttemps > comp2.boulderAttemps){
                    return 1;
                }
                if(comp1.boulderAttemps < comp2.boulderAttemps){
                    return -1;
                }

                // ascending lower zone attemps win
                if(comp1.zoneAttempts > comp2.zoneAttempts){
                    return 1;
                }

                if(comp1.zoneAttempts < comp2.zoneAttempts){
                    return -1;
                }

                return 0;
            })

        return winners.map(comp => comp.competitorName);
    }
}