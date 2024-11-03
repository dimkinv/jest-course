export interface CompetitorScore {
    competitorName: string;
    zoneAttempts: number; // 6
    zone: boolean; // true
    totalAttemps: number; // 10
    top: boolean; // false
}

export class BoulderingCalculator {
    private competitors: CompetitorScore[] = [];

    setScore(competitorScore: CompetitorScore) {

    }

    calculateWinOrder(): string[] {
       
    }
}