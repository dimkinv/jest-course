import axios from 'axios';
import mapNASAResponseToAppResponse from './mapping.service';
import {AsteroidService} from './asteroid.service';

jest.mock('axios');
jest.mock('./mapping.service')

describe('asteroid.service', () => {
    beforeEach(() => {
        // this is important in case we use return value and not return value once. so mocks worn't "bleed" form test to test
        jest.resetAllMocks();
    });

    it('should return mapped data if request is ok', async () => {
        // given
        const asteroidService = new AsteroidService();    
        expect.hasAssertions();

        // here it is doesn't matter what we return as we also mocking the map function. it would of be important if we would validate the resuponse, but we don't
        (axios.get as jest.Mock).mockResolvedValueOnce('someMockValue');
        (mapNASAResponseToAppResponse as jest.Mock).mockReturnValueOnce({
            "apoapsis": null,
            "periapsis": null,
            "closest_approach_date": "2020-10-11",
            "is_dangerous": false,
            "name": "(2014 TL)",
            "diameter": "0.016369672 km",
            "lunar_miss_distance": "81.6384405007",
            "kilometers_miss_distance": "31395724.444798081 km"
        });

        // when
        const response = await asteroidService.fetchAsteroidsForDates('mock date', 'mock date 2');

        // then
        expect (response).toEqual({
            "apoapsis": null,
            "periapsis": null,
            "closest_approach_date": "2020-10-11",
            "is_dangerous": false,
            "name": "(2014 TL)",
            "diameter": "0.016369672 km",
            "lunar_miss_distance": "81.6384405007",
            "kilometers_miss_distance": "31395724.444798081 km"
        });
    });


    it('should throw an error id sercer request fails', async ()=>{
        // given
        const asteroidService = new AsteroidService();    
        expect.hasAssertions();
        jest.spyOn(console, 'log');

        // here it is doesn't matter what we return as we also mocking the map function. it would of be important if we would validate the resuponse, but we don't
        (axios.get as jest.Mock).mockRejectedValueOnce(new Error('some server error'));

        // when
        // then
        await expect(asteroidService.fetchAsteroidsForDates.bind(asteroidService, 'mock date 1', 'mock date 2')).rejects.toThrowError('some server error');
        expect(console.log).toHaveBeenCalledWith('some server error');
    });
});