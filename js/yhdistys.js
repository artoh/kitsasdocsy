let myStep = 0

function uudestaan() {
  myStep = 0
  $('.yhdistystesti .ohje').show();
  $('#testinavigaatio .askellus').show();
  $('#seuraavanappi').text('Seuraava');
  $('#navigaatioaskel').html('1');

  $('.kerho').show();
  $('.firma').show();
  $('.ilmainen').show();
  $('.tilausinfo').show();
  $("#maksuperuste").show();
  $("#osaaminen").show();
  $("#palkkainfo").show();
  $("#isoinfo").show();
  $("#kerhohintainfo").show();

  $('#step-0').addClass('aktiivinen');

}

function testiValmis() {
  $('.yhdistystesti .ohje').hide();
  $('#testinavigaatio .askellus').hide();
  $('#seuraavanappi').text('Tee uudestaan');

  let ehdotus = 'ilmainen'

  if( $('#q0b').is(":checked") ||
      $('#q1b').is(":checked") ||
      $('#q2b').is(":checked") ||
      $('#q3b').is(":checked")
    ) {
    if( $('#q6b').is(":checked") ) {
      ehdotus = 'firma'
    } else {
      ehdotus = 'kerho'
    }
  }

  console.log("Tuloksen aika " + ehdotus)

  if( ehdotus !== 'kerho')
    $('.kerho').hide();
  if( ehdotus !== 'firma')
    $('.firma').hide();
  if( ehdotus !== 'ilmainen')
    $('.ilmainen').hide();

  if( ehdotus === 'ilmainen')
    $('.tilausinfo').hide();
  if( $('#q4a').is(':checked') == false || ehdotus === 'ilmainen')
    $("#maksuperuste").hide();
  if( $('#q4c').is(':checked') == false)
    $("#osaaminen").hide();
  if( $('#q5a').is(':checked'))
    $("#palkkainfo").hide();
  if( $('#q5c').is(':checked') == false)
    $("#isoinfo").hide();
  if( $('#q6b').is(":checked") )
    $("#kerhohintainfo").hide();

}

function seuraava() {
    $('#step-' + myStep).removeClass('aktiivinen');
    myStep = myStep + 1;
    $('#step-' + myStep).addClass('aktiivinen');
    $('#navigaatioaskel').html('' + (myStep + 1))

    if( myStep === 6) {
      $('#seuraavanappi').text('Näytä tulos')
    } else if( myStep === 7) {
      testiValmis();
    } else if( myStep === 8) {
      uudestaan();
    }
}
