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

    }

    calculateWinOrder(): string[] {
       
    }
}