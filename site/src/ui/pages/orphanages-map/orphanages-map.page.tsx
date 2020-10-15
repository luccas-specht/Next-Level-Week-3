import React from 'react'
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import mapMarker from '../../assets/svg/map-marker.svg';
import './orphanages-map.style.css';

const OrphanagesMap = () => {
    return (
        <div className="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="marcador de orfanato" />
                    <h2>
                        Escolha um orfanato no mapa
                    </h2>
                    <p>
                        Muitas crianças estão esperando à sua visita :)
                    </p>
                </header>

                <footer>
                    <strong>
                        Esteio
                    </strong>
                    <span>
                        Rio Grande do Sul
                    </span>
                </footer>
            </aside>

            <Map
                center={[-29.8495465, -51.1397162]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer
                    url='https://a.tile.openstreetmap.org//{z}/{x}/{y}.png' /> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>
            <Link to='/' className='link-to-create-orphanage'>
                <FiPlus size={32} color='#fff' />
            </Link >
        </div>
    );
}

export { OrphanagesMap }