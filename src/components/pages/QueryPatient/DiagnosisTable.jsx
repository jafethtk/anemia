import React from 'react';
import './styles.scssm';

const DiagnosisTable = ({diagnosisHistory, onSeeMoreClick}) => (
    <table styleName="patient-results-table">
        <tbody>
            <tr>
                <th styleName="patient-results-cell"># Diag.</th>
                <th styleName="patient-results-cell">Fecha</th>
                <th styleName="patient-results-cell">Estado</th>
                <th styleName="patient-results-cell">Acciones</th>
            </tr>
            {diagnosisHistory.map((diagnosis, i) => (
                <tr key={i}>
                    <td styleName="patient-results-cell">{diagnosis._id}</td>
                    <td styleName="patient-results-cell">{diagnosis.createdAt}</td>
                    <td styleName="patient-results-cell">{diagnosis.order.status}</td>
                    <td styleName="patient-results-cell">
                        <div onClick={() => onSeeMoreClick(diagnosis)}><a>Ver mas</a></div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default DiagnosisTable;
