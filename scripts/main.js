import { series } from './data.js';
var seriesTable = document.getElementById('series');
mostrarSeries();
mostrarPromedioSeries();
function mostrarSeries() {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td>").concat(serie.nombre, "</td>\n            <td>").concat(serie.plataforma, "</td>\n            <td>").concat(serie.temporadas, "</td>\n        ");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarPromedioSeries() {
    var totalTemporadas = 0;
    var numSeries = series.length;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalTemporadas += serie.temporadas;
    }
    var promedioTemporadas = Math.round(totalTemporadas / numSeries);
    var averageSeasonsText = document.getElementById('averageSeasonsText');
    if (averageSeasonsText) {
        averageSeasonsText.textContent = "Seasons average: ".concat(promedioTemporadas.toFixed(2));
    }
}
