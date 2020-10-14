import React from 'react'

import mapMarker from '../../assets/svg/map-marker.svg';

const OrphanagesMap = () => {
    return (
        <div className="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="marcador de orfanato" />
                </header>
            </aside>
        </div>
    );
}

export { OrphanagesMap }