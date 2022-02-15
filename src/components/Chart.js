import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Escoba',
        Length: '123',
        Rating: '5',
        Categories: ['Ideal para pisos de interior', 'Muy duradera'],
        Awards: 400
    },
    {
        Title: 'Guantes de cocina',
        Length: '73',
        Rating: '4',
        Categories: ['Muy comodos', 'Resistente a altas temperaturas', 'No daña la piel'],
        Awards: 200
    },
]

function Chart() {
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre del producto</th>
                                <th>Ventas</th>
                                <th>Valoracion</th>
                                <th>Beneficios</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>Nombre del producto</th>
                                <th>Ventas</th>
                                <th>Valoracion</th>
                                <th>Beneficios</th>
                                <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {tableRowsData.map(
                                (row, i) => <ChartRow {...row} key={i} />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;