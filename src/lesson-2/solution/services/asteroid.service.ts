import { Asteroid } from '../models/asteroid.model';
import { NASAResponse } from '../models/nasa.response';
import mapNASAResponseToAppResponse from './mapping.service';
import axios from 'axios';

export class AsteroidService {
    public async fetchAsteroidsForDates(startDate: string, endDate: string): Promise<Asteroid[]> {
        try {
            const response = await axios.get<NASAResponse>(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=JvIEZnIAPj6r82tLDVSdZXHvo5nsN0vE6s64kCr0`);
            return mapNASAResponseToAppResponse(response.data);

        } catch (ex) {
            console.log(ex.message);
            throw ex;
        }
    }
};