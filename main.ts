import { Serie } from "./Serie.js";
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById('series')!;

mostrarSeries();
mostrarPromedioSeries();

function mostrarSeries(): void {
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.nombre}</td>
            <td>${serie.plataforma}</td>
            <td>${serie.temporadas}</td>
        `;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function mostrarPromedioSeries(): void {
    let totalTemporadas: number = 0;
    let numSeries: number = series.length;
    for (let serie of series){ 
        totalTemporadas += serie.temporadas;
    }

    var promedioTemporadas = Math.round(totalTemporadas / numSeries);
    var averageSeasonsText = document.getElementById('averageSeasonsText');
    if (averageSeasonsText) {
        averageSeasonsText.textContent = `Seasons average: ${promedioTemporadas.toFixed(2)}`;
    }
}