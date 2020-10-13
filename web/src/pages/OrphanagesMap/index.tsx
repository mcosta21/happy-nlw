import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiPlus } from 'react-icons/fi'
import mapMarkerImg from '../../images/icon.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Macaé</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <div>

            </div>

            <Link to="/" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;