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
    
   url:'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
     //url:'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', //mapa preo
    //url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    // satelite url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
   //url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',//padrão
    attributions: '©OpenStreetMap, ©CartoDB'
  })
});

const spContorno = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'json/SP_RA.geojson',
    format: new ol.format.GeoJSON()
  })
})

const regionColors = {
  "Araçatuba": "#ff0000",
  "Barretos": "#00ff00",
  "Bauru": "#0000ff",
  "Campinas": "#ff00ff",
  // ...adicione as demais regiões e cores desejadas
};

const limp = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'json/SP_RA.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: function(feature) {
    const ra = feature.get('RA');
    const color = regionColors[ra] || "#cccccc"; // cor padrão se não definido
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: color,
        width: 2
      }),
      fill: new ol.style.Fill({
        color: color + '55' // cor semi-transparente
      })
    });
  }
});

const map = new ol.Map({
  target: 'web-map',
  controls: [
    new ol.control.Zoom(),
    new ol.control.Attribution(),
    new ol.control.FullScreen()
  ],//botões na tela
  layers: [baseLayer,spContorno,
    spVector,aracatubaVector,
    araraquaraVector,bauruVector,
    campinasVector,guarulhosVector,
    jundiaiVector,mariliaVector,
    osascoVector,piracicabaVector,
    presiprudenteVector,riberaopretoVector,
    santosVector,abcdVector,
    saojoaoBoaVistaVector,
    sjrpVector,
    sorocabaVector,valeDoParaibaVector],
  view: new ol.View({
    center: ol.proj.fromLonLat([ -48.08410611081298,-22.670231220665254]),
    zoom: 7.2
      })
});
  //mouse em cima do vetor vira mãozinha
    map.on('pointermove', function(evt) {
    const pixel = map.getEventPixel(evt.originalEvent);
    const hit = map.hasFeatureAtPixel(pixel);
    map.getTargetElement().style.cursor = hit ? 'pointer' : '';
  });
  // Clique sobre o vetor para abrir o link 
  map.on('singleclick', function(evt) {
    map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        const url = feature.get('url');
        if (url) {
          window.open(url, '_blank');
        }
      });
  });




  document.getElementById('ListaGEX').addEventListener('change', function(event) {
  const gexSelecionada = event.target.value;

  // Lista de todas as camadas de vetor
  const layers = {
    GEXABCD: abcdVector,
    GEXACT: aracatubaVector,
    GEXACQ: araraquaraVector,
    GEXBRU: bauruVector,
    GEXCPN: campinasVector,
    GEXGRU: guarulhosVector,
    GEXJDI: jundiaiVector,
    GEXMRI: mariliaVector,
    GEXOSA: osascoVector,
    GEXPIR: piracicabaVector,
    GEXPRP: presiprudenteVector,
    GEXRBP: riberaopretoVector,
    GEXSAN: santosVector,
    GEXSBV: saojoaoBoaVistaVector,
    GEXSJRP: sjrpVector,
    GEXSOR: sorocabaVector,
    GEXVPB: valeDoParaibaVector,
    GEXSP: spVector,
    LIMP: limp
  };

  // Esconde todas as camadas de vetor
  Object.values(layers).forEach(layer => layer.setVisible(false));

  // Mostra apenas a camada selecionada (se existir)
  if (layers[gexSelecionada]) {
    layers[gexSelecionada].setVisible(true);
  }
  else if(gexSelecionada === "Todas") {
    // Mostra todas as camadas
    Object.values(layers).forEach(layer => layer.setVisible(true));
  }
  else if(gexSelecionada === "VIG-1") {
    // Mostra apenas a camada de limite
    layers.GEXSP.setVisible(true);
  }
  else if(gexSelecionada === "VIG-2") {
    // Mostra apenas a camada de limite
   layers.GEXGRU.setVisible(true);
   layers.GEXVPB.setVisible(true);
  }
  else if(gexSelecionada === "VIG-3") {
    // Mostra apenas a camada de limite
   layers.GEXABCD.setVisible(true);
   layers.GEXSAN.setVisible(true);
  }
  else if(gexSelecionada === "VIG-4") {
    // Mostra apenas a camada de limite
   layers.GEXCPN.setVisible(true);
   layers.GEXJDI.setVisible(true);
   layers.GEXOSA.setVisible(true);
  }
  else if(gexSelecionada === "VIG-5") {
    // Mostra apenas a camada de limite
   layers.GEXACT.setVisible(true);
   layers.GEXBRU.setVisible(true);
   layers.GEXMRI.setVisible(true);
   layers.GEXPRP.setVisible(true);
   layers.GEXSOR.setVisible(true);
  }
  else if(gexSelecionada === "VIG-6") {
    // Mostra apenas a camada de limite
   layers.GEXACQ.setVisible(true);
   layers.GEXPIR.setVisible(true);
   layers.GEXRBP.setVisible(true);
   layers.GEXSBV.setVisible(true);
   layers.GEXSJRP.setVisible(true);
  }
  // baseLayer e spContorno permanecem visíveis
  baseLayer.setVisible(true);
  spContorno.setVisible(true);
});


