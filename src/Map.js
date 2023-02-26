import GoogleMapReact from 'google-map-react';
import './styles/map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ waitTime }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{waitTime}</p>
    </div>
)

const Map = ({ locations }) => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA_p_GlbTJMuaSOrkixV4FORvdnHPRmdGg" }}
                defaultCenter={[42.350049, -71.103239]}
                defaultZoom={15}
            >
                {locations.map(location =>
                    <LocationPin lat={location.lat} long={location.long} waitTime={location.Wait_time + " minutes"} />
                )}
            </GoogleMapReact>
        </div>
    )
}

export default Map