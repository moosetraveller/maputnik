import { IconContext } from "react-icons";
import { createRoot } from 'react-dom/client';

import './favicon.ico'
import './styles/index.scss'
import './i18n';
import App from './components/App';

import { Protocol } from "pmtiles";
import maplibregl from "maplibre-gl";

const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const root = createRoot(document.querySelector("#app"));
root.render(
  <IconContext.Provider value={{className: 'react-icons'}}>
    <App/>
  </IconContext.Provider>
);

// Hide the loader.
document.querySelector(".loading").style.display = "none";
