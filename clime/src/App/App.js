import { useEffect, useState } from "react";
import ClimadelDia from "../ClimaDelDia/ClimadelDia";

export const App = () => {
  const API_KEY = "Ax13OUp8Mv0snGV6xsltjiEfJi24b4f8";
  const locationKey = "152909_PC";
  const [clima, setClima] = useState();

  const padNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };



  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) =>
        setClima(
          data.DailyForecasts.map((d) => {
            return {
              weatherType: d.Day.IconPhrase,
              min: d.Temperature.Minimum.Value,
              max: d.Temperature.Maximum.Value,
              weatherKey: padNumber(d.Day.Icon),
            };
          })
        )
      );
  }, []);

  return (
    <div>
      {clima?.map((i, index) => (
        <div key={index}>
          <ClimadelDia 
          min={i.min}
          max={i.max}
          weatherType={i.weatherType}
          weatherKey={i.weatherKey}
          />
        </div>
      ))};
    </div>
  );
};
export default App;
