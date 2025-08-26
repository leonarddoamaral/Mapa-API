const spVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_sp.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sp.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#0172b9' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }
});

//

const aracatubaVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_aracatuba.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-aracatuba.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#ff5757' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});
const campinasVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_campinas.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-campinas.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color:'#8c52ff' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }
});

const guarulhosVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_guarulhos.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-guarulhos.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color:'#d8b31e' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }
});
const jundiaiVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_jundiai.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-jundiai.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color:'#af4c0f' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }
});


const araraquaraVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_araraquara.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-araraquara.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#028538' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const bauruVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_bauru.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-bauru.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#f2b54f' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const mariliaVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_marilia.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-marilia.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#ff914d' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});
const osascoVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_osasco.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-osasco.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#0cc0df' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const piracicabaVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_piracicaba.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-piracicaba.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#2e6417' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});
const presiprudenteVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_presi-prudente.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-presi-prudente.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#5271ff' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const riberaopretoVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_riberao-preto.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-rib-preto.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#001b3d' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const santosVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_santos.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-santos.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#bc3fde' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const abcdVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_abcd.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-abcd.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#cc0000' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const saojoaoBoaVistaVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_sao-joao-boavista.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sao-joao-boavista.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#74cc00' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const sjrpVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_sjrp.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sjrp.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#ff66c4' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});


const sjdcVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_sjdc.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sjdc.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#cca300' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const sorocabaVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_sorocaba.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sorocaba.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#7a004b' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const valeDoParaibaVector = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'json/pontos_vale-paraiba.geojson',
      format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-vale-do-paraiba.png",
        scale: 0.1,
        anchor: [0.5, 1]
        
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: '#00687a' }), 
        stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 }),
        offsetY: -45
      })
    });
  }

});

const baseLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
    
    // parece meio antigo url:'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
    //black url:'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
    url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    // satelite url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
   // url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',//padrão
    attributions: '©OpenStreetMap, ©CartoDB'
  })
});

const map = new ol.Map({
  target: 'web-map',
  controls: [
    new ol.control.Zoom(),
    new ol.control.Attribution(),
    new ol.control.FullScreen()
  ],
  layers: [baseLayer, 
    spVector,aracatubaVector,
    araraquaraVector,bauruVector,
    campinasVector,guarulhosVector,
    jundiaiVector,mariliaVector,
    osascoVector,piracicabaVector,
    presiprudenteVector,riberaopretoVector,
    santosVector,abcdVector,
    saojoaoBoaVistaVector,
    sjrpVector,sjdcVector,
    sorocabaVector,valeDoParaibaVector],
  view: new ol.View({
    center: ol.proj.fromLonLat([-48.2500,-23.0833]),
    zoom: 7.47
      })
});

