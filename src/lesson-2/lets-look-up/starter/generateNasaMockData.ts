
import { addDays, format, parseISO } from 'date-fns';
import { NASAResponse } from './models/nasa.response';

function randomFloat(min: number, max: number, decimals = 6) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

function randomStringId() {
  return Math.floor(Math.random() * 1e8).toString();
}

/**
 * Generates a NASAResponse mock object matching the real API structure.
 */
export function generateNasaMockData(startDate: string, endDate: string): NASAResponse {
  const start = parseISO(startDate);
  const end = parseISO(endDate);
  const days = Math.max(1, Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1);
  const dateList: string[] = [];
  for (let i = 0; i < days; i++) {
    dateList.push(format(addDays(start, i), 'yyyy-MM-dd'));
  }

  const near_earth_objects: Record<string, any[]> = {};
  let total = 0;
  dateList.forEach(dateStr => {
    const count = Math.floor(Math.random() * 4) + 2; // 2-5 asteroids per day
    total += count;
    near_earth_objects[dateStr] = Array.from({ length: count }).map((_, idx) => {
      const id = randomStringId();
      const absMag = randomFloat(20, 28, 2);
      const diameterMin = randomFloat(0.005, 0.2, 9);
      const diameterMax = diameterMin + randomFloat(0.001, 0.1, 9);
      const missKm = randomFloat(3000000, 80000000, 6).toString();
      const missLunar = randomFloat(10, 200, 6).toString();
      return {
        links: {
          self: `http://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`,
        },
        id,
        neo_reference_id: id,
        name: `(20${Math.floor(Math.random() * 30) + 10} XX${idx})`,
        nasa_jpl_url: `https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${id}`,
        absolute_magnitude_h: absMag,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: diameterMin,
            estimated_diameter_max: diameterMax,
          },
        },
        is_potentially_hazardous_asteroid: Math.random() > 0.8,
        close_approach_data: [
          {
            close_approach_date: dateStr,
            miss_distance: {
              kilometers: missKm,
              lunar: missLunar,
            },
          },
        ],
      };
    });
  });

  return {
    links: {
      next: `http://api.nasa.gov/neo/rest/v1/feed?start_date=${format(addDays(end, 1), 'yyyy-MM-dd')}&end_date=${format(addDays(end, 1), 'yyyy-MM-dd')}&detailed=false&api_key=DEMO_KEY`,
      self: `http://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&detailed=false&api_key=DEMO_KEY`,
    },
    element_count: total,
    near_earth_objects,
  };
}
