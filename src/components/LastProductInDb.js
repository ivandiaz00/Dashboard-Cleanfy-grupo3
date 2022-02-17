import React from 'react';
import imagenFondo from '../assets/images/detergente.jpg';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Detergente Magistral Limón Multiuso Plus 750ml

Superpoder desengrasante desde la primera pasada. Detergente sintético.

Modo de uso:
Para maximizar su rendimiento, aplique solo unas gotas directamente en la esponja.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Comprar producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
