---
title: "Lataa Kitsas"
linkTitle: "Lataa"
keywords: ["lataus"]
menu:
  main:
    weight: 10
---

{{% blocks/lead color="light" %}}

# Lataa Kitsas

Lataa Kitsas maksutta tietokoneellesi

<ul class="nav nav-pills mb-3 text-white" id="pills-tab" role="tablist" style="margin-top:3ex; justify-content: center;" >
  <li class="nav-item">
    <a class="nav-link" id="pills-win-tab" data-toggle="pill" href="#pills-win" role="tab" aria-controls="pills-home" aria-selected="true"><span class="fab fa-windows"></span> Windows</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-mac-tab" data-toggle="pill" href="#pills-mac" role="tab" aria-controls="pills-profile" aria-selected="false"><span class="fab fa-apple"></span> Mac</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-linux-tab" data-toggle="pill" href="#pills-linux" role="tab" aria-controls="pills-contact" aria-selected="false"><span class="fab fa-linux"></span> Linux</a>
  </li>
</ul>

{{% /blocks/lead %}}
{{% blocks/section color="white" height="min" %}}

<div style="justify-content:center; text-align:center; margin: 0px; width: 200% !important;">

  <div  id="pills-tabContent" class="tab-content">
    <div class="tab-pane fade" id="pills-win" role="tabpanel" aria-labelledby="pills-home-tab" style="text-align: center;">      
      <h1><i class="fab fa-windows"></i></h1>
      <h4>Windows</h4>      
      <p>Windows 7, 8, 10, 11</p>
      <p>Kitsas 4.0.2</p>
      <h4 class="variaatio" style="margin-top: 2ex;">Asennettava ohjelma</h4>
      <p>
        <a href="https://github.com/artoh/kitupiikki/releases/download/v4.0.2/kitsas-4.0.2-asennus.exe" class="btn btn-lg btn-primary latausnappi">
          <span class="fa fa-download"></span>&nbsp;Lataa</a>
      </p>            
      <p style="margin-top: 1ex;">Lataa asennusohjelma ja käynnistä se. Tarvitset pääkäyttäjän oikeudet.</p>
      <h4 class="variaatio" style="margin-top: 2ex;">Kitsas Portable</h4>
      <p>
        <a href="https://github.com/artoh/kitupiikki/releases/download/v4.0.2/kitsas-4.0.2.exe" class="btn btn-lg btn-primary">
          <span class="fa fa-download"></span>&nbsp;Lataa</a>
      </p>            
      <p style="margin-top: 1ex;">Ohjelmaa ei tarvitse asentaa, vaan se käynnistyy suoraan. Et tarvitse pääkäyttäjän oikeuksia.</p>
    </div>
    <div class="tab-pane fade" id="pills-mac" role="tabpanel" aria-labelledby="pills-profile-tab" style="text-align: center;">      
      <h1><i class="fab fa-apple"></i></h1>
      <h4>Mac</h4>
      <h4>Kitsas 4.0.1</h2>
      <p>
        <a href="https://github.com/petriaarnio/kitupiikki/releases/download/mac-v4.0.1/Kitsas-4.0.1.dmg" class="btn btn-lg btn-primary">
          <span class="fa fa-download"></span>&nbsp;Lataa</a>
      </p>        
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
    <div class="tab-pane fade" id="pills-linux" role="tabpanel" aria-labelledby="pills-contact-tab" style="text-align: center;">
       <h1><i class="fab fa-linux"></i></h1>
      <h4>Linux</h4>
      <h4>Kitsas 4.0.2</h4>
      <p>
        <a href="https://github.com/artoh/kitupiikki/releases/download/v4.0.2/Kitsas-4.0.2-x86_64.AppImage" class="btn btn-lg btn-primary">
          <span class="fa fa-download"></span>&nbsp;Lataa</a>
      </p>           
      64-bittinen Linux graafisella työpöydällä, esimerkiksi Ubuntu 18.04 ja uudemmat
      <p>Kitsaan Linux-versio toimitetaan AppImage-tiedostona, jota ei varsinaisesti edes tarvitse asentaa.</p>
      <ol style="text-align: left;">
        <li>Jos käytössäsi on Ubuntu 22.04 tai uudempi, asenna FUSE-kirjaston oikea versio komennolla<br/><code>sudo apt install libfuse2</code><br>Tähän tarvitaan pääkäyttäjän oikeudet</li>
        <li>Lataa asennustiedosto</li>
        <li>Merkitse tiedosto suoritettavaksi. Useimpien Linux-versioiden tiedostonhallinnassa se tehdään klikkaamalla tiedostoa hiiren oikealla napilla ja valitsemalla <b>Ominaisuudet</b>, ja ruksaamalla <b>Oikeudet</b>-välilehdeltä <b>Suoritettava</b>. Komentorivillä onnistuu komennolla <code>chmod u+x Kitsas*.AppImage</code></li>
        <li>Käynnistä ohjelma klikkaamalla tiedostoa tai komennolla <code>./Kitsas*.AppImage</code></li>
        <li>Ensimmäisellä käynnistyskerralla Kitsas kysyy, haluatko lisätä ohjelman käynnistysvalikkoon.</li>
      </ol>
    </div>
  </div>
</div>
{{% /blocks/section %}}

{{< blocks/cover  image_anchor="top" height="min" color="dark" >}}
{{< /blocks/cover >}}
{{% blocks/section color="light" height="min" %}}

## Rekisteröidy ja kokeile kaikkia ominaisuuksia

Asennettuasi ohjelman voit luoda itsellesi ilmaisen käyttäjätunnuksen ja kokeilla 30 päivän ajan kaikkia ohjelman ominaisuuksia, myös kirjanpidon tallentamista pilveen. Myös sähköpostituki on käytettävissäsi kokeilujakson ajan

Ellet tee kokeilujakson aikana tilausta, jatkat maksuttomana käyttäjänä ja voit yhä tallentaa rajattoman määrän kirjanpitoja omalle tietokoneellesi.

Kitsasta voi käyttää myös rekisteröitymättä, mutta emme voi tarjota ilmaiskäyttäjille henkilökohtaista neuvontaa. Olethan huolellinen varmuuskopioinnissa, jos tallennat kirjanpitosi omalle tietokoneellesi!

{{% /blocks/section %}}

{{% blocks/section color="white" %}}
{{< blocks/huomio icon="fab fa-osi" title="Kitsas on avointa lähdekoodia" >}}
Kitsaan työpöytäohjelmaa saa kopioida, jakaa ja käyttää täysin maksutta [GNU General Public Licence 3](https://ohjeet.kitsas.fi/lisenssi/) -ehtojen mukaisesti. Ohjelman lähdekoodi on saatavissa [GitHub](https://github.com/artoh/kitupiikki)-palvelusta.

Kitsas Oy kehittää ohjelmistoa avoimen lähdekoodin yhteisön kanssa. Kuka tahansa voi osallistua ohjelman kehittämiseen GitHub-palvelun kautta.
{{< /blocks/huomio >}}
{{< blocks/huomio icon="fas fa-exclamation" title="Ohjelmalla ei ole mitään takuuta" >}}

Ohjelmalla tai sen soveltuvuudella käyttöön ei ole mitään takuuta.

{{< /blocks/huomio >}}
{{< blocks/huomio icon="fa fa-life-ring" title="Tuki ja lisäpalvelut" >}}
Kitsas Oy myy ohjelmalle tukipalveluita sekä lisäpalveluita, joiden toteuttamisessa ohjelma ottaa yhteyttä Kitsas Oy:n palvelimelle.
{{< /blocks/huomio >}}

{{% /blocks/section %}}

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
