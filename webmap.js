//link opções de mapas

const mapaAtual = 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png';
const mapaDark = 'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
const mapaSatelite = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const mapaBranco = 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
const mapaColorido = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';

//cores
const branco = '#ffffff';
const spCor = '#0072bc';
const aracatubaCor = '#ff5757';
const campinasCor = '#8c52ff';
const guarulhosCor = '#d8b31e';
const jundiaiCor = '#af4c0f';
const araraquaraCor = '#028538';
const bauruCor = '#f2b54f';
const mariliaCor = '#ff914d';
const osascoCor = '#0cc0df';
const piracicabaCor = '#2e6417';
const presiprudenteCor = '#5271ff';
const riberaopretoCor = '#001b3d';
const santosCor = '#bc3fde';
const abcdCor = '#cc0000';
const saojoaoBoaVistaCor = '#74cc00';
const sjrpCor = '#ff66c4';
const sorocabaCor = '#7a004b';
const valeDoParaibaCor = '#00687a';
const popupCor = '#ff5757';


//alerta 
function alertaErro(){
  Swal.fire({
  icon: "error",
  title: "Oops...",
  iconColor: popupCor,
  confirmButtonColor: popupCor,
  width: '330px',
  heightAuto: true,
  theme: 'auto',
  text: "Agência/Gerência não encontrada! Tente novamente.",
  customClass: {
    popup: 'popup-class',
  }
});
}

//polos vig

function polo1VIG() {
  layers.GEXSP.setVisible(true);
}
function polo2VIG() {
  layers.GEXGRU.setVisible(true);
  layers.GEXVPB.setVisible(true);
}
function polo3VIG() {
  layers.GEXABCD.setVisible(true);
  layers.GEXSAN.setVisible(true);
}
function polo4VIG() {
  layers.GEXCPN.setVisible(true);
  layers.GEXJDI.setVisible(true);
  layers.GEXOSA.setVisible(true);
}

function polo5VIG() {
  layers.GEXACT.setVisible(true);
  layers.GEXBRU.setVisible(true);
  layers.GEXMRI.setVisible(true);
  layers.GEXPRP.setVisible(true);
  layers.GEXSOR.setVisible(true);
}

function polo6VIG() {
  layers.GEXACQ.setVisible(true);
  layers.GEXPIR.setVisible(true);
  layers.GEXRBP.setVisible(true);
  layers.GEXSBV.setVisible(true);
  layers.GEXSJRP.setVisible(true);
}

//Polos LIMP
function polo1LIMP() {
  layers.GEXSP.setVisible(true);
  layers.GEXGRU.setVisible(true);
  layers.GEXOSA.setVisible(true);
}
function polo2LIMP() {
  layers.GEXVPB.setVisible(true);
  layers.GEXABCD.setVisible(true);
  layers.GEXSAN.setVisible(true);
  layers.GEXJDI.setVisible(true);
  layers.GEXCPN.setVisible(true);
}

function polo3LIMP() {
  layers.GEXACT.setVisible(true);
  layers.GEXBRU.setVisible(true);
  layers.GEXMRI.setVisible(true);
  layers.GEXPRP.setVisible(true);
  layers.GEXSOR.setVisible(true);
}
function polo4LIMP() {
  layers.GEXACQ.setVisible(true);
  layers.GEXPIR.setVisible(true);
  layers.GEXRBP.setVisible(true);
  layers.GEXSBV.setVisible(true);
  layers.GEXSJRP.setVisible(true);
};

//vetores
const spVector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'json/pontos_sp.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sp.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: spCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
        offsetY: -45
      })
    });
  }
});

const aracatubaVector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'json/pontos_aracatuba.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-aracatuba.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: aracatubaCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-campinas.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: campinasCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-guarulhos.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: guarulhosCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-jundiai.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: jundiaiCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-araraquara.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: araraquaraCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-bauru.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: bauruCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-marilia.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: mariliaCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-osasco.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: osascoCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-piracicaba.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: piracicabaCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-presi-prudente.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: presiprudenteCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-rib-preto.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: riberaopretoCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-santos.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: santosCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-abcd.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: abcdCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sao-joao-boavista.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: saojoaoBoaVistaCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sjrp.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: sjrpCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-sorocaba.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: sorocabaCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
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
  style: function (feature) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: "img/localiza-vale-do-paraiba.png",
        scale: 0.1,
        anchor: [0.5, 1]
      }),
      text: new ol.style.Text({
        text: feature.get('name'),
        font: '11px Calibri,sans-serif',
        fill: new ol.style.Fill({ color: valeDoParaibaCor }),
        stroke: new ol.style.Stroke({ color: branco, width: 2 }),
        offsetY: -45
      })
    });
  }
});



const spContorno = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'json/SP_RA.geojson',
    format: new ol.format.GeoJSON()
  })
});

const baseLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: mapaAtual,
    attributions: '©OpenStreetMap, ©CartoDB'
  })
});

//vetores no mapa e outras camadas
const map = new ol.Map({
  target: 'web-map',
  controls: [
    new ol.control.Zoom(),
    new ol.control.Attribution(),
    new ol.control.FullScreen()
  ],//botões na tela
  layers: [baseLayer, spContorno,
    spVector, aracatubaVector,
    araraquaraVector, bauruVector,
    campinasVector, guarulhosVector,
    jundiaiVector, mariliaVector,
    osascoVector, piracicabaVector,
    presiprudenteVector, riberaopretoVector,
    santosVector, abcdVector,
    saojoaoBoaVistaVector,
    sjrpVector,
    sorocabaVector, valeDoParaibaVector],
  view: new ol.View({
    center: ol.proj.fromLonLat([-48.08410611081298, -22.670231220665254]),
    zoom: 7.2
  })
});

//camadas de vetores
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
};

// mouse em cima do vetor aumenta o ícone
let lastFeature = null;
map.on('pointermove', function (evt) {
  const pixel = map.getEventPixel(evt.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel);
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';

  // Restaura o último feature destacado
  if (lastFeature) {
    lastFeature.setStyle(null);
    lastFeature = null;
 }

  // Só aplica hover em features de camadas de pontos (ícones)
  map.forEachFeatureAtPixel(pixel, function (feature, layer) {
    // Verifica se o layer tem estilo de ícone
    const styleFn = layer.getStyle ? layer.getStyle() : null;
    if (typeof styleFn === 'function') {
      const originalStyle = styleFn(feature);
      if (originalStyle && originalStyle.getImage()) {
        const hoverStyle = originalStyle.clone();
        hoverStyle.getImage().setScale(0.109); // aumenta o scale
        feature.setStyle(hoverStyle);
        lastFeature = feature;
      }
    }
  });
});

// Clique sobre o vetor para abrir o link 
map.on('singleclick', function (evt) {
  map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {

    const url = feature.get('url');
    if (url) {
      window.open(url, '_blank');
    }
  });
});

document.getElementById('ListaGEX').addEventListener('change', function (event) {
  const gexSelecionada = event.target.value;

  Object.values(layers).forEach(layer => layer.setVisible(false));

  // Mostra apenas a camada selecionada
  if (layers[gexSelecionada]) {
    layers[gexSelecionada].setVisible(true);
  }
  else if (gexSelecionada === "Todas" || gexSelecionada === "Filtrar") {
    // Mostra todas as camadas
    Object.values(layers).forEach(layer => layer.setVisible(true));
  }

  //LOG VIG

  else if (gexSelecionada === "VIG-1") {
    polo1VIG();
  }
  else if (gexSelecionada === "VIG-2") {
    polo2VIG();
  }
  else if (gexSelecionada === "VIG-3") {
    polo3VIG();
  }
  else if (gexSelecionada === "VIG-4") {
    polo4VIG();
  }
  else if (gexSelecionada === "VIG-5") {
    polo5VIG();
  }
  else if (gexSelecionada === "VIG-6") {
    polo6VIG();
  }

  //LOG LIMP

  else if (gexSelecionada === "LIMP-1") {
    polo1LIMP();
  }
  else if (gexSelecionada === "LIMP-2") {
    polo2LIMP();
  }
  else if (gexSelecionada === "LIMP-3") {
    polo3LIMP();
  }
  else if (gexSelecionada === "LIMP-4") {
    polo4LIMP();
  }
  baseLayer.setVisible(true);
  spContorno.setVisible(true);
});


//pesquisar agencia
document.getElementById('search').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    if (search.length === 0) {
      // Retorna ao ponto e zoom originais
      map.getView().setCenter(ol.proj.fromLonLat([-48.08410611081298, -22.670231220665254]));
      map.getView().setZoom(7.2);
      return;
    }
    let exactFound = null;
    let partialFound = null;
    Object.values(layers).forEach(layer => {
      layer.getSource().forEachFeature(function (feature) {
        const name = (feature.get('name') || '').toLowerCase();
        if (!exactFound && name === search) {
          exactFound = feature;
        } else if (!partialFound && name.includes(search)) {
          partialFound = feature;
        }
      });
    });
    if (exactFound) {
      const geometry = exactFound.getGeometry();
      if (geometry) {
        map.getView().fit(geometry.getExtent(), { maxZoom: 15, duration: 800 });
      }
    } else if (partialFound) {
      const geometry = partialFound.getGeometry();
      if (geometry) {
        map.getView().fit(geometry.getExtent(), { maxZoom: 15, duration: 800 });
      }
    } else {
      alertaErro();
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }
});

//botão para voltar ao zoom padrão
voltar.addEventListener('click', function () {
  map.getView().setCenter(ol.proj.fromLonLat([-48.08410611081298, -22.670231220665254]));
  map.getView().setZoom(7.2);
  document.getElementById('search').value = '';
  document.getElementById('ListaGEX').value = 'Todas';
  Object.values(layers).forEach(layer => layer.setVisible(true));
});

