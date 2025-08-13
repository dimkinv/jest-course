import axios from 'axios';
import { Asteroid } from '../models/asteroid.model';
import { NASAResponse } from '../models/nasa.response';
import mapNASAResponseToAppResponse from './mapping.service';

export class AsteroidService {
    public async fetchAsteroidsForDates(startDate: string, endDate: string): Promise<Asteroid[]> {
        try {
            const response = await axios.get<NASAResponse>(`http://localhost:3000/nasa/mock?startDate=${startDate}&endDate=${endDate}`);
            return mapNASAResponseToAppResponse(response.data);

        } catch (ex) {
            const e  = ex as Error;
            console.log(e.message);
            throw ex;
        }
    }
};