// PEGA O VALOR TOTAL DE CASOS CONFIRMADOS NO BRASIL
$.getJSON('https://api.covid19api.com/live/country/brazil/status/confirmed', function (data) {
  totalConfirmadosBrasil = 0;
  $.each(data, function (key, item) {
    totalConfirmadosBrasil += this.Confirmed;
  });
  $('.TotalConfirmedBrasil').append(totalConfirmadosBrasil.toLocaleString());
});

//PEGA O TOTAL DE CASOS CONFIRMADOS NO MUNDO
$.getJSON('https://api.covid19api.com/summary', function (data) {
  var TotalConfirmedLocale = data.Global.TotalConfirmed.toLocaleString()
  $('.TotalConfirmedGlobal').append(TotalConfirmedLocale);
});
