import { YMaps, Map, Clusterer, Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";
import { useEffect, useState } from "react";

function BannerCard() {
  const [clusterPoints, setClusterPoints] = useState([
    "​Несебрская улица, 6",
    "​Приморский парк​, Орджоникидзе, 5а",
    "Орджоникидзе, 4Б",
    "Курортный проспект, 50в",
    "​Орджоникидзе, 25а/1",
    "​Приморская, 17/1​2 этаж",
    "​Приморская, 17а",
    "Урицкого, 18а к2",
  ]);
  const [coordinates, setCoordinates] = useState([]);

  // Функция для преобразования адреса в координаты
  const fetchGeocode = async (address: string | number | boolean) => {
    try {
      const response = await axios(
        `https://catalog.api.2gis.ru/3.0/items/geocode?q=г. Сочи, ${address}&fields=items.point&key=e3faf123-60dc-4dc3-8c8a-8c2cf6174564`
      );
      return response.data.result.items[0].point;
    } catch (error) {
      console.error("Error fetching geocode", error);
    }
  };

  // Использование useEffect для выполнения асинхронных запросов
  useEffect(() => {
    const promises = clusterPoints.map(async (address: any) => {
      const coords = await fetchGeocode(address);
      setCoordinates((prev: unknown) => [...prev, coords]);
    });

    Promise.all(promises).catch(console.error);
  }, [clusterPoints]);
  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);
  return (
    <YMaps>
      <Map
        width={518}
        height={518}
        defaultState={{
          center: [43.582395, 39.721036],
          zoom: 10,
        }}
      >
        <Clusterer
          options={{
            preset: "islands#blueStretchyIcon",
            groupByCoordinates: false,
          }}
        >
          {coordinates.map((c: unknown) => {
            if (typeof c !== "undefined") {
              const { lat, lon } = c;
              return <Placemark geometry={[lat, lon]} />;
            }
          })}
        </Clusterer>
      </Map>
    </YMaps>
  );
}
export default BannerCard;

//91ff1ebe3f15072896e768badad062737f370c8f
