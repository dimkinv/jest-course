import mappingFunction from './mapping.service';

describe('mapping service', () => {
    it('should map object correctly from nasa to internal adteroid type', () => {
        // given
        // when
        const mappedObject = mappingFunction(NASA_MOCK);

        expect(mappedObject).toEqual([{
            "apoapsis": undefined,
            "closest_approach_date": "2020-08-01",
            "diameter": "0.0731543202 km",
            "is_dangerous": false,
            "kilometers_miss_distance": "15909431.974952802 km",
            "lunar_miss_distance": "41.3693660094",
            "name": "(2020 OV7)",
            "periapsis": undefined
        }]);
    });
});

const NASA_MOCK = {
    "links": {
        "next": "http://www.neowsapp.com/rest/v1/feed?start_date=2020-08-02&end_date=2020-08-02&detailed=false&api_key=JvIEZnIAPj6r82tLDVSdZXHvo5nsN0vE6s64kCr0",
        "prev": "http://www.neowsapp.com/rest/v1/feed?start_date=2020-07-31&end_date=2020-07-31&detailed=false&api_key=JvIEZnIAPj6r82tLDVSdZXHvo5nsN0vE6s64kCr0",
        "self": "http://www.neowsapp.com/rest/v1/feed?start_date=2020-08-01&end_date=2020-08-01&detailed=false&api_key=JvIEZnIAPj6r82tLDVSdZXHvo5nsN0vE6s64kCr0"
    },
    "element_count": 12,
    "near_earth_objects": {
        "2020-08-01": [
            {
                "links": {
                    "self": "http://www.neowsapp.com/rest/v1/neo/54051170?api_key=JvIEZnIAPj6r82tLDVSdZXHvo5nsN0vE6s64kCr0"
                },
                "id": "54051170",
                "neo_reference_id": "54051170",
                "name": "(2020 OV7)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54051170",
                "absolute_magnitude_h": 24.549,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0327156066,
                        "estimated_diameter_max": 0.0731543202
                    },
                    "meters": {
                        "estimated_diameter_min": 32.7156065532,
                        "estimated_diameter_max": 73.1543201781
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0203285292,
                        "estimated_diameter_max": 0.0454559731
                    },
                    "feet": {
                        "estimated_diameter_min": 107.3346706041,
                        "estimated_diameter_max": 240.0076198132
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2020-08-01",
                        "close_approach_date_full": "2020-Aug-01 20:04",
                        "epoch_date_close_approach": 1596312240000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.0849978717",
                            "kilometers_per_hour": "50705.9923381279",
                            "miles_per_hour": "31506.7317392107"
                        },
                        "miss_distance": {
                            "astronomical": "0.1063479846",
                            "lunar": "41.3693660094",
                            "kilometers": "15909431.974952802",
                            "miles": "9885662.6249685876"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ]
    }
};