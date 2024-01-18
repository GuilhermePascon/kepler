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
      "https://raw.githubusercontent.com/GuilhermePascon/misc/master/hack_prod_bottom.json?token=GHSAT0AAAAAACMSP2P57QMCASZTDB2TXL34ZNJOU2Q"
    );
    const data = await response.json();
    return data;
  });

  const sampleConfig = {
    "visState": {
      "filters": [
        {
          "dataId": [
            "map"
          ],
          "id": "axxr48abbl",
          "name": [
            "day"
          ],
          "type": "timeRange",
          "value": [
            1646215905000,
            1646215905001
          ],
          "enlarged": true,
          "plotType": "histogram",
          "animationWindow": "incremental",
          "yAxis": null,
          "speed": 1
        }
      ],
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
            "isVisible": false,
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
                201,
                0,
                0
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
        },
        {
          "id": "xvm7lj3",
          "type": "grid",
          "config": {
            "dataId": "map",
            "label": "Coleta 3D",
            "color": [
              241,
              92,
              23
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat": "originLat",
              "lng": "originLng"
            },
            "isVisible": false,
            "visConfig": {
              "opacity": 0.8,
              "worldUnitSize": 64.0244,
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
              "coverage": 1,
              "sizeRange": [
                0,
                500
              ],
              "percentile": [
                0,
                100
              ],
              "elevationPercentile": [
                0,
                100
              ],
              "elevationScale": 100,
              "enableElevationZoomFactor": true,
              "colorAggregation": "count",
              "sizeAggregation": "count",
              "enable3d": true
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
        },
        {
          "id": "mlkdloi",
          "type": "grid",
          "config": {
            "dataId": "map",
            "label": "Entrega 3D",
            "color": [
              136,
              87,
              44
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat": "destinationLat",
              "lng": "destinationLng"
            },
            "isVisible": false,
            "visConfig": {
              "opacity": 0.8,
              "worldUnitSize": 51.8293,
              "colorRange": {
                "name": "ColorBrewer YlGnBu-6",
                "type": "sequential",
                "category": "ColorBrewer",
                "colors": [
                  "#ffffcc",
                  "#c7e9b4",
                  "#7fcdbb",
                  "#41b6c4",
                  "#2c7fb8",
                  "#253494"
                ]
              },
              "coverage": 1,
              "sizeRange": [
                0,
                500
              ],
              "percentile": [
                0,
                100
              ],
              "elevationPercentile": [
                0,
                100
              ],
              "elevationScale": 100,
              "enableElevationZoomFactor": true,
              "colorAggregation": "count",
              "sizeAggregation": "count",
              "enable3d": true
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
        },
        {
          "id": "bn7xfb",
          "type": "heatmap",
          "config": {
            "dataId": "map",
            "label": "Heatmap Coleta",
            "color": [
              23,
              184,
              190
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat": "originLat",
              "lng": "originLng"
            },
            "isVisible": false,
            "visConfig": {
              "opacity": 0.8,
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
              "radius": 28.7
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
            "weightField": null,
            "weightScale": "linear"
          }
        },
        {
          "id": "0haphcj",
          "type": "heatmap",
          "config": {
            "dataId": "map",
            "label": "Heatmap Entrega",
            "color": [
              23,
              184,
              190
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat": "destinationLat",
              "lng": "destinationLng"
            },
            "isVisible": false,
            "visConfig": {
              "opacity": 0.8,
              "colorRange": {
                "name": "Uber Viz Diverging 1.5",
                "type": "diverging",
                "category": "Uber",
                "colors": [
                  "#00939C",
                  "#5DBABF",
                  "#BAE1E2",
                  "#F8C0AA",
                  "#DD7755",
                  "#C22E00"
                ]
              },
              "radius": 22
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
            "weightField": null,
            "weightScale": "linear"
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
          "enabled": false
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
      "bearing": -30.473198826896578,
      "dragRotate": true,
      "latitude": -23.55816517896834,
      "longitude": -48.81080498847461,
      "pitch": 32.760041660327396,
      "zoom": 4.81341166969599,
      "isSplit": false
    },
    "mapStyle": {
      "styleType": "dark",
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "label": true,
        "road": true,
        "border": true,
        "building": true,
        "water": true,
        "land": true,
        "3d building": true
      },
      "threeDBuildingColor": [
        224.4071295378559,
        224.4071295378559,
        224.4071295378559
      ],
      "mapStyles": {}
    }
  }

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
