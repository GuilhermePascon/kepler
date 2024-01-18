import React from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import useSwr from "swr";

const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}

function Map() {
  const dispatch = useDispatch();
  const { data } = useSwr("covid", async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/GuilhermePascon/misc/master/hack_prod_bottom_fields.json?token=GHSAT0AAAAAACMSP2P4GUKEOLHEKBRQBFZAZNIOUXQ"
    );
    const data = await response.json();
    return data;
  });

  const sampleConfig = {
    "visState": {
      "filters": [],
      "layers": [
        {
          "id": "1icv34x",
          "type": "point",
          "config": {
            "dataId": "map",
            "label": "Coletas",
            "color": [
              218,
              0,
              0
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat": "originLat",
              "lng": "originLng",
              "altitude": null
            },
            "isVisible": false,
            "visConfig": {
              "radius": 10,
              "fixedRadius": false,
              "opacity": 0.8,
              "outline": false,
              "thickness": 2,
              "strokeColor": null,
              "colorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "strokeColorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "radiusRange": [
                0,
                50
              ],
              "filled": true
            },
            "hidden": false,
            "textLabel": [
              {
                "field": null,
                "color": [
                  255,
                  255,
                  255
                ],
                "size": 18,
                "offset": [
                  0,
                  0
                ],
                "anchor": "start",
                "alignment": "center"
              }
            ]
          },
          "visualChannels": {
            "colorField": null,
            "colorScale": "quantile",
            "strokeColorField": null,
            "strokeColorScale": "quantile",
            "sizeField": null,
            "sizeScale": "linear"
          }
        },
        {
          "id": "x6gm5l",
          "type": "point",
          "config": {
            "dataId": "map",
            "label": "Entregas",
            "color": [
              246,
              218,
              0
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat": "destinationLat",
              "lng": "destinationLng",
              "altitude": null
            },
            "isVisible": false,
            "visConfig": {
              "radius": 10,
              "fixedRadius": false,
              "opacity": 0.8,
              "outline": false,
              "thickness": 2,
              "strokeColor": null,
              "colorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "strokeColorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "radiusRange": [
                0,
                50
              ],
              "filled": true
            },
            "hidden": false,
            "textLabel": [
              {
                "field": null,
                "color": [
                  255,
                  255,
                  255
                ],
                "size": 18,
                "offset": [
                  0,
                  0
                ],
                "anchor": "start",
                "alignment": "center"
              }
            ]
          },
          "visualChannels": {
            "colorField": null,
            "colorScale": "quantile",
            "strokeColorField": null,
            "strokeColorScale": "quantile",
            "sizeField": null,
            "sizeScale": "linear"
          }
        },
        {
          "id": "p8emiih",
          "type": "arc",
          "config": {
            "dataId": "map",
            "label": "Coleta para Entrega",
            "color": [
              253,
              236,
              0
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat0": "originLat",
              "lng0": "originLng",
              "lat1": "destinationLat",
              "lng1": "destinationLng"
            },
            "isVisible": true,
            "visConfig": {
              "opacity": 0.8,
              "thickness": 2,
              "colorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "sizeRange": [
                0,
                10
              ],
              "targetColor": [
                55,
                29,
                168
              ]
            },
            "hidden": false,
            "textLabel": [
              {
                "field": null,
                "color": [
                  255,
                  255,
                  255
                ],
                "size": 18,
                "offset": [
                  0,
                  0
                ],
                "anchor": "start",
                "alignment": "center"
              }
            ]
          },
          "visualChannels": {
            "colorField": null,
            "colorScale": "quantile",
            "sizeField": null,
            "sizeScale": "linear"
          }
        }
      ],
      "interactionConfig": {
        "tooltip": {
          "fieldsToShow": {
            "map": [
              {
                "name": "originLat",
                "format": null
              },
              {
                "name": "originLng",
                "format": null
              },
              {
                "name": "destinationLat",
                "format": null
              },
              {
                "name": "destinationLng",
                "format": null
              },
              {
                "name": "day",
                "format": null
              }
            ]
          },
          "compareMode": false,
          "compareType": "absolute",
          "enabled": true
        },
        "brush": {
          "size": 0.5,
          "enabled": false
        },
        "geocoder": {
          "enabled": false
        },
        "coordinate": {
          "enabled": false
        }
      },
      "layerBlending": "normal",
      "splitMaps": [],
      "animationConfig": {
        "currentTime": null,
        "speed": 1
      }
    },
    "mapState": {
      "bearing": 0,
      "dragRotate": false,
      "latitude": -14.149297507439197,
      "longitude": -56.29476464297802,
      "pitch": 0,
      "zoom": 3.39685739320786,
      "isSplit": false
    },
    "mapStyle": {
      "styleType": "muted",
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "label": true,
        "road": true,
        "border": false,
        "building": true,
        "water": true,
        "land": true,
        "3d building": false
      },
      "threeDBuildingColor": [
        224.4071295378559,
        224.4071295378559,
        224.4071295378559
      ],
      "mapStyles": {}
    }
  };

  React.useEffect(() => {
    if (data) {
      console.log(data)
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "MRV",
              id: "map"
            },
            data
          },
          option: {
            centerMap: true,
            readOnly: false
          },
          config: sampleConfig
        })
      );
    }
  }, [dispatch, data]);

  return (
    <KeplerGl
      id="covid"
      mapboxApiAccessToken='pk.eyJ1Ijoic2ludWNhIiwiYSI6ImNscmk3M2R0ZDAzamwyanMzMGhpMGE0ZW8ifQ.45tX_H0RBzNtVJ42Bh8yFw'
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
