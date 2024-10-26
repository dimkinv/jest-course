import { BoulderingCalculator, CompetitorScore } from './bouldering';


describe('bouldering score calculator', () => {
    let boulderingCalculator: BoulderingCalculator;

    beforeEach(() => {
        boulderingCalculator = new BoulderingCalculator();
    })
    describe('setScore validation', () => {
        it('should throw an error if number of attemps equals zero and top is reached', () => {
            // given
            const competitorScore: CompetitorScore = {
                boulderAttemps: 0,
                tops: 1  ,
                competitorName: "test competitor",
                zoneAttempts: 0,
                zones: 0
            };

            // when 
            // then
            expect(boulderingCalculator.setScore.bind(boulderingCalculator, competitorScore)).toThrow();
        });

        it('should throw error if number of zone attemps is less than number of zone points', () => {
            const competitorScore: CompetitorScore = {
                boulderAttemps: 1,
                tops: 1,
                competitorName: "test competitor",
                zoneAttempts: 1,
                zones: 3
            };

            // when 
            // then
            expect(boulderingCalculator.setScore.bind(boulderingCalculator, competitorScore)).toThrow();
        });
    })

    describe('winner calculation', () => {
        it('should display winner first if the only one reached the top', () => {
            //given
            const competitorScore1: CompetitorScore = {
                boulderAttemps: 1,
                tops: 0,
                competitorName: "testcompetitor1",
                zoneAttempts: 0,
                zones: 0
            };

            const competitorScore2: CompetitorScore = {
                boulderAttemps: 1,
                tops: 1,
                competitorName: "testcompetitor2",
                zoneAttempts: 0,
                zones: 0
            };

            boulderingCalculator.setScore(competitorScore1);
            boulderingCalculator.setScore(competitorScore2);



            // when
            const competitors = boulderingCalculator.calculateWinOrder();

            // then
            expect(competitors).toEqual(['testcompetitor2', 'testcompetitor1']);
        });

        it('should diplay correct winners order by number of zones reached', () => {
            //given
            // boulderingCalculator = new BoulderingCalculator();
            const competitorScore1: CompetitorScore = {
                boulderAttemps: 1,
                tops: 1,
                competitorName: "testcompetitor1",
                zoneAttempts: 2,
                zones: 2
            };

            const competitorScore2: CompetitorScore = {
                boulderAttemps: 1,
                tops: 1,
                competitorName: "testcompetitor2",
                zoneAttempts: 10,
                zones: 5
            };

            const competitorScore3: CompetitorScore = {
                boulderAttemps: 1,
                tops: 1,
                competitorName: "testcompetitor3",
                zoneAttempts: 3,
                zones: 3
            };

            boulderingCalculator.setScore(competitorScore1);
            boulderingCalculator.setScore(competitorScore2);
            boulderingCalculator.setScore(competitorScore3);



            // when
            const competitors = boulderingCalculator.calculateWinOrder();

            // then
            expect(competitors).toEqual(['testcompetitor2', 'testcompetitor3', 'testcompetitor1']);
        });

        it('should display winner first if both tops and zones equal but different number of attemps', () => {
            //given
            const competitorScore1: CompetitorScore = {
                boulderAttemps: 3,
                tops: 1,
                competitorName: "testcompetitor1",
                zoneAttempts: 3,
                zones: 3
            };

            const competitorScore2: CompetitorScore = {
                boulderAttemps: 5,
                tops: 1,
                competitorName: "testcompetitor2",
                zoneAttempts: 3,
                zones: 3
            };

            boulderingCalculator.setScore(competitorScore1);
            boulderingCalculator.setScore(competitorScore2);



            // when
            const competitors = boulderingCalculator.calculateWinOrder();

            // then
            expect(competitors).toEqual(['testcompetitor1', 'testcompetitor2']);
        });

        it('should display winner first if both tops, zones and attempst are equal but different number of zone attemps', () => {
            //given
            const competitorScore1: CompetitorScore = {
                boulderAttemps: 5,
                tops: 1,
                competitorName: "testcompetitor1",
                zoneAttempts: 5,
                zones: 3
            };

            const competitorScore2: CompetitorScore = {
                boulderAttemps: 5,
                tops: 1,
                competitorName: "testcompetitor2",
                zoneAttempts: 4,
                zones: 3
            };

            boulderingCalculator.setScore(competitorScore1);
            boulderingCalculator.setScore(competitorScore2);



            // when
            const competitors = boulderingCalculator.calculateWinOrder();

            // then
            expect(competitors).toEqual(['testcompetitor2', 'testcompetitor1']);
        });
    });
});