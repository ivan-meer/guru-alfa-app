export type SeaStatus = 'calm' | 'moderate' | 'rough';
export type TideStatus = 'low' | 'medium' | 'high';
export type MoonPhase = 'new' | 'waxing-crescent' | 'first-quarter' | 'waxing-gibbous' | 
                       'full' | 'waning-gibbous' | 'last-quarter' | 'waning-crescent';

export interface WeatherInfo {
  temperature: number;
  condition: string;
  icon: string;
  seaCondition: {
    waveHeight: number;
    waterTemp: number;
    status: SeaStatus;
    tide: {
      status: TideStatus;
      time: string;
      height: number;
    };
    moonPhase: {
      phase: MoonPhase;
      illumination: number;
    };
    warning?: string;
  };
}

export interface WeatherForecast {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
  icon: string;
  seaCondition: {
    waveHeight: number;
    status: SeaStatus;
  };
}