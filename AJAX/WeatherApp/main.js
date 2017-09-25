$(document).ready(function () {

  var states = [
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"
  ];

  for (var i = 0; i < states.length; i++) {
    var state = $('<option></option>').text(states[i]).val(states[i]);
    $('select#states').append(state);
  }

  $("button").click(function () {
    var city = $("input#city").val();
    var mystate = $('select#states').val();

    $('div.weather-info').html('');

    $("#getWeather").submit(function () {
      return false;
    });

    $.get(
      "http://api.wunderground.com/api/fcbc0b24b72db0ea/conditions/q/" +
      mystate +
      '/' +
      city +
      ".json",
      function (res) {

        var city = $('<h2></h2>').text(res.current_observation.display_location.full).addClass('city');
        var tempC = $('<span></span>').text(res.current_observation.temp_c + "°  C").addClass('tempC');
        var tempF = $('<span></span>').text(res.current_observation.temp_f + "° F").addClass('tempF').attr('conversion', res.current_observation.temp_c + "°  C");
        var time = $('<span></span>').text(res.current_observation.local_time_rfc822).addClass('time');
        var image = $('<img>').attr('src', res.current_observation.icon_url);
        var weather = $('<span></span>').text(res.current_observation.weather).addClass('weather');
        //var divider = $('<hr />');
        var button = $('<button></button').text('Click for celcius').attr('id', 'celcius').addClass('btn btn-warning btn-sm');

        console.log(city);
        console.log(tempC);
        console.log(tempF);
        console.log(res);

        var container = $('<div></div>').addClass('weather-info-container');
        var containerInner = $('<div></div>').addClass('weather-info-detail');

        containerInner.append(time);
        containerInner.append(city);
        containerInner.append(weather);
        containerInner.append(image);
        containerInner.append(tempF);
        containerInner.append(button);
        container.append(containerInner);

        $('div.weather-info').append(container);

        $('form input, form select').val('');
      }

    );
  });

  $(document).on('click', 'button#celcius', function () {
    var cel = $('span.tempF').attr('conversion');
    var far = $('span.tempF').text();

    $('span.tempF').text(cel);
    $('span.tempF').attr('conversion', far);

    if ($(this).text() === 'Click for celcius') {
      $(this).text('Click for farenheit');
    } else if ($(this).text() === 'Click for farenheit') {
      $(this).text('Click for celcius');
    };


  });
});