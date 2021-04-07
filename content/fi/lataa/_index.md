---
title: "Lataa Kitsas"
linkTitle: "Lataa"
menu:
  main:
    weight: 10
---

## Kitsas 2.3

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="margin-top:3ex;">
  <li class="nav-item">
    <a class="nav-link" id="pills-win-tab" data-toggle="pill" href="#pills-win" role="tab" aria-controls="pills-home" aria-selected="true"><span class="fa fa-windows"></span> Windows</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-mac-tab" data-toggle="pill" href="#pills-mac" role="tab" aria-controls="pills-profile" aria-selected="false"><span class="fa fa-apple"></span> Mac</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-linux-tab" data-toggle="pill" href="#pills-linux" role="tab" aria-controls="pills-contact" aria-selected="false"><span class="fa fa-linux"></span> Linux</a>
  </li>
</ul>

<div class="box-simple box-white">
  <div  id="pills-tabContent" class="tab-content" style="margin-top:2ex; border: none;">
    <div class="tab-pane fade" id="pills-win" role="tabpanel" aria-labelledby="pills-home-tab">
      <div class="icon">
        <i class="fa fa-windows"></i>
      </div>
      <h4>Windows</h4>

      Tuetut versiot: Windows 7, 8 ja 10
      <h4 style="margin-top: 2ex;">Asennettava ohjelma</h4>
      <a href="https://github.com/artoh/kitupiikki/releases/download/v2.3/kitsas-2.3-asennus.exe" class="btn btn-template-main"><span class="fa fa-download"></span> Lataa</a>
      <p style="margin-top: 1ex;">Lataa asennusohjelma ja käynnistä se. Tarvitset pääkäyttäjän oikeudet.</p>
      <h4 style="margin-top: 2ex;">Kitsas Portable</h4>
      <a href="https://github.com/artoh/kitupiikki/releases/download/v2.3/kitsas-2.3.exe" class="btn btn-template-main"><span class="fa fa-download"></span> Lataa</a>
      <p style="margin-top: 1ex;">Ohjelmaa ei tarvitse asentaa, vaan se käynnistyy suoraan. Et tarvitse pääkäyttäjän oikeuksia.</p>
    </div>
    <div class="tab-pane fade" id="pills-mac" role="tabpanel" aria-labelledby="pills-profile-tab">
      <div class="icon">
        <i class="fa fa-apple"></i>
      </div>
      <h4>Mac</h4>
      <p><a href="https://github.com/petriaarnio/kitupiikki/releases/download/mac-v2.3/Kitsas-2.3.dmg" class="btn btn-template-main"><span class="fa fa-download"></span> Lataa</a></p>

       OS X Versio 10.13 ja uudemmat
      <ol style="text-align: left;">
        <li>Lataa asennustiedosto</li>
        <li>Avaa asennustiedosto</li>
        <li>Vedä avautuneessa ikkunasta Kitsaan kuvake Ohjelmat (Applications) -hakemiston kuvakkeen päälle</li>
      </ol>
      <p align="left">Monet uudet Macit vaativat, että muualta kuin Applen omasta sovelluskaupasta ladatut sovellukset on sallittava erikseen, katso ohje <a href="https://support.apple.com/fi-fi/HT202491">Macin tukisivustolta</a>.</p>
      <p align="left">Lisäksi ohjelman käyttö on ehkä vielä sallittava erikseen: <b>Järjestelmän asetukset > Suojaus ja yksityisyys > Yleinen: Apin "Kitsas" käynnistäminen estettiin > Avaa kuitenkin</b><br/>
      </p>
      <p>Macintosh-julkaisua ylläpitää Petri Aarnio</p>
    </div>
    <div class="tab-pane fade" id="pills-linux" role="tabpanel" aria-labelledby="pills-contact-tab">
      <div class="icon">
        <i class="fa fa-linux"></i>
      </div>
      <h4>Linux</h4>
      <p><a href="https://github.com/artoh/kitupiikki/releases/download/v2.3/Kitsas-2.3-x86_64.AppImage" class="btn btn-template-main"><span class="fa fa-download"></span> Lataa</a></p>

      64-bittinen Linux graafisella työpöydällä, esimerkiksi Ubuntu 18.04 ja uudemmat
      <p>Kitupiikin Linux-versio toimitetaan AppImage-tiedostona, jota ei varsinaisesti edes tarvitse asentaa. Et tarvitse ylläpitäjän oikeuksia.</p>
      <ol style="text-align: left;">
        <li>Lataa asennustiedosto</li>
        <li>Merkitse tiedosto suoritettavaksi. Useimpien Linux-versioiden tiedostonhallinnassa se tehdään klikkaamalla tiedostoa hiiren oikealla napilla ja valitsemalla <b>Ominaisuudet</b>, ja ruksaamalla <b>Oikeudet</b>-välilehdeltä <b>Suoritettava</b>. Komentorivillä onnistuu komennolla <code>chmod u+x Kitsas*.AppImage</code></li>
        <li>Käynnistä ohjelma klikkaamalla tiedostoa tai komennolla <code>./Kitsas*.AppImage</code></li>
        <li>Ensimmäisellä käynnistyskerralla Kitsas kysyy, haluatko lisätä ohjelman käynnistysvalikkoon.</li>
      </ol>
    </div>

  </div>
</div>

<div class="row" style="text-align: center; margin-bottom: 4ex;">
  <a href="https://ohjeet.kitsas.fi/tuki" class="btn btn-template-main"><span class="fa fa-question-circle"></span> Käyttäjätuki ja palaute</a>
</div>

### Kitsas on avointa lähdekoodia

Kitsaan työpöytäohjelmaa saa kopioida, jakaa ja käyttää täysin maksutta [GNU General Public Licence 3](https://ohjeet.kitsas.fi/lisenssi/) -ehtojen mukaisesti. Ohjelman lähdekoodi on saatavissa [GitHub](https://github.com/artoh/kitupiikki)-palvelusta.

Kitsas Oy kehittää ohjelmistoa avoimen lähdekoodin yhteisön kanssa. Kuka tahansa voi osallistua ohjelman kehittämiseen GitHub-palvelun kautta.

### Ohjelmalla ei ole mitään takuuta

Ohjelmalla tai sen soveltuvuudella käyttöön ei ole mitään takuuta.

### Tuki ja lisäpalvelut

Kitsas Oy myy ohjelmalle tukipalveluita sekä lisäpalveluita, joiden toteuttamisessa ohjelma ottaa yhteyttä Kitsas Oy:n palvelimelle.

<script>
$(function(){
  if (navigator.appVersion.indexOf("Mac") != -1)
    $("#pills-mac-tab").tab("show")
  else if (navigator.appVersion.indexOf("Linux") != -1)
    $("#pills-linux-tab").tab("show")
  else
    $("#pills-win-tab").tab("show")

$("#pills-tab").tab()
})
</script>
