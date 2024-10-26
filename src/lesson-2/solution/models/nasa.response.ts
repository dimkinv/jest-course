export interface NASAResponse {
    links: {
        next: string;
        self: string;
    };
    page?: {
        size: number;
        total_elements: number;
        total_pages: number;
        number: number;
    }
    near_earth_objects: {
        [id: string]: {
            links: {
                self: string;
            };
            id: string;
            neo_reference_id: string;
            name: string;
            designation?: string;
            nasa_jpl_url: string;
            absolute_magnitude_h: number;
            estimated_diameter: {
                kilometers: {
                    estimated_diameter_min: number;
                    estimated_diameter_max: number;
                }
            };
            is_potentially_hazardous_asteroid: boolean;
            close_approach_data: {
                close_approach_date: string;
                miss_distance: {
                    kilometers: string
                    lunar: string;
                }
            }[];
            orbital_data?: {
                eccentricity: string;
                inclination: string;
                perihelion_distance: string; //AU
                aphelion_distance: string; //AU
            }
        }[]
    }
}