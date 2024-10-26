import { Asteroid } from "../models/asteroid.model";
import { NASAResponse } from "../models/nasa.response";

export default function(reponse: NASAResponse) {
    const asteroids: Asteroid[] = [];

    for (const [day, nasaAsteroids] of Object.entries(reponse.near_earth_objects)) {
        
        for(const nasaAsteroid of nasaAsteroids){
            const asteroid: Asteroid = {
                apoapsis: nasaAsteroid.orbital_data?.aphelion_distance,
                periapsis: nasaAsteroid.orbital_data?.perihelion_distance,
                closest_approach_date: nasaAsteroid.close_approach_data[0]?.close_approach_date,
                is_dangerous: nasaAsteroid.is_potentially_hazardous_asteroid,
                name: nasaAsteroid.name,
                diameter: `${nasaAsteroid.estimated_diameter.kilometers.estimated_diameter_max} km`,
                lunar_miss_distance: nasaAsteroid.close_approach_data[0].miss_distance.lunar,
                kilometers_miss_distance: `${nasaAsteroid.close_approach_data[0].miss_distance.kilometers} km`
            }
    
            asteroids.push(asteroid);
        }
        
       
    }

    return asteroids;
}