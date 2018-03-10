import React from 'react';

const DiagnosisTable = ({diagnosisHistory, onSeeMoreClick}) => (
    <table>
        <tbody>
            <tr>
                <th>Nro. Diagnostico</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
            {diagnosisHistory.map((diagnosis, i) => (
                <tr key={i}>
                    <th>{diagnosis.number}</th>
                    <th>{diagnosis.date}</th>
                    <th>{diagnosis.status}</th>
                    <th>
                        <div onClick={() => onSeeMoreClick(diagnosis)}>Ver mas</div>
                    </th>
                </tr>
            ))}
        </tbody>
    </table>
);

export default DiagnosisTable;
