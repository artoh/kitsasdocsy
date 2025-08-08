---
title: "Siirrettävissä olevan datan kuvaus"
linkTitle: "Datakuvaus"
description: "Kitsaan palveluiden käyttöehdot"
---

{{%  blocks/lead color=light %}}
<h1>Tietojen siirtäminen</h1>
<p class="lead">Datasäädöksen mukainen kuvaus Kitsaan pilvipalveluista siirrettävissä olevasta datasta ja sen tietorakenteista. Tiedot ovat noudettavissa avoimen rajapinnan (API) kautta JSON-muodossa. Rajapinnan dokumentaation saa pyydettäessä osoitteesta kitsas@kitsas.fi 
Osa tiedoista on myös ladattavissa suoraan ohjelmasta JSON- tai CSV-muodossa.
</p>

{{% blocks/section color="white" %}}
<div class="col">


## Tekniset rajoitteet datapalveluntarjoajan vaihdolle ja vaihdon tuomat riskit palveluiden saatavuudelle

Tietojen onnistunut siirtäminen palvelusta toiseen palvelua vaihdettaessa edellyttää, että vastaanottaava palvelu tai ohjelmisto tukee siirrettävän datan tuomista järjestelmäänsä. Tätä kirjoitettaessa Kitsas Oy:llä ei ole tiedossa minkään palvelun tai ohjelmiston vielä tukevan tässä kuvatun datan tuomista rajapinnasta saatavilla olevassa muodossa (tilanne 12.8.2025). Erityisesti Kitsas-ohjelma ei tue tässä kuvatun datan tuomista omalle laitteelle tallennettuun kirjanpitoon.

## Sovellettavat eritelmät tai standardit

Taloushallinnon ohjelmistoille ei ole julkaistu (tilanne 12.8.2025) datasäädöksen tarkoittamia yhteensopivuuuta tukevia avoimia eritelmiä tai yhdenmukaistettuja yhteentoimivuutta koskevia standardeja. 

## Kirjanpidon tiedot

Kirjanpidosta on rajapinnan kautta saatavilla kaikki asiakkaan tallentamat tiedot sekä palvelimen muodostamat raportit. Valtaosa raporteista muodostetaan Kitsas-työpöytäohjelmistossa, eikä niitä siksi ole saatavissa rajapinnan kautta. Raporteista ovat rajapinnan kautta saatavilla tase ja tuloslaskelma siinä muodossa kuin WebKitsas niitä käyttää. Rajapinnasta on saatavilla kaksi versiota, uusi suppeampi rajapinta ja vanha laajempi rajapinta. Suosittelemme käyttämään uudempaa rajapintaa aina kun haettava tieto on saatavilla sen kautta. Uudemman rajapinnan käyttöä varten on saatavilla myös javascript-kirjasto. Kaikkien kirjanpidon tietojen hakeminen edellyttää kuitenkin myös vanhemman rajapinnan käyttöä. Uuden rajapinnan kautta saatavilla olevat tiedot on luettelossa merkitty (*) Vanhan rajaoinnan kautta saatavilla olevat tiedot ja luettelosta vielä puuttuvat uuden rajapinnan tiedot täydennetään luetteloon elokuun 2025 aikana.

Kitsas-ohjelmasta on mahdollista ladata suuri osa tiedoista JSON-muodossa muodostamalla kirjanpitoaineisto. Osa tiedoista on ladattavissa suoraan Kitsas-ohjelmasta CSV-muodossa. Näiden tiedot täydennetään luetteloon elokuun aikana.

### Tilikaudet

Kirjanpidon tilikausista on saatavilla seuraavat tiedot:
* Tilikauden tunniste (*)
* Tilikauden alkupäivä (*)
* Tilikauden loppupäivä (*)



### Tililuettelo

Tililuettelon tileistä on saatavilla seuraavat tiedot, sikäli kuin tileille on ne tallennettuna
* Tilin numero (*)
* Tilin nimi (*)
  * suomeksi (*)
  * ruotsiksi (*)
  * englanniksi (*)
* Tilityyppi (*)
* IBAN-numero (*)

### Kohdennukset

Kohdennuksista on saatavilla seuraavat tiedot:
* tunniste, jolla kohdennus on merkitty kirjauksiin (*)
* nimi (*)
  * suomeksi (*)
  * ruotsiksi (*)
  * englanniksi (*)
* tyyppi (kustannuspaikka / projeksti / merkkaus) (*)
* kustannuspaikka, jonka alle kohdennus kuuluu (*)
* määräaikaisen kohdennuksen alkupäivä (*)
* määräaikaisen kohdennuksen loppupäivä (*)

### Tuotteet

Tuotteista on saatavilla seuraavat tiedot:
* tunniste (*)
* tuotekoodi (*)
* nimi
  * suomeksi (*)
  * ruotsiksi (*)
  * englanniksi (*)
* nettohinta (*)
* yksikkö (*)
  * koodi (*)
  * nimi (*)
* arvonlisäverotiedot (*)
  * alv-koodi (*)
  * alv-prosentti (*)
* kirjaustiedot (*)
  * kirjanpitotili (*)
  * kohdennukset (*)

### Laskujen luettelo

### Tositteet

Sisältää myös laskut.

### Viennit

### Liitteet

### Tositteiden lokitiedot

### Raportit

## Metatiedot

Rajapinnan kautta ovat saatavilla myös kirjanpidon asetukset ja tiedot oikeuksista kirjanpitoon. Kitsas Pro:ta käyttävien tilitoimistojen osalta on saatavilla myös tilitoimistotason asetuksia ja yhteenvetotietoja.

### Kirjanpidon asetukset

### Käyttöoikeudet

### Toimistotason tiedot


{{% /blocks/section %}}