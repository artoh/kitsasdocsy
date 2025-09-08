---
title: "Siirrettävissä olevan datan kuvaus"
linkTitle: "Datakuvaus"
description: "Datasäädöksen muakainen siirrettävissä olevan datan kuvaus ja muita datan siirtämiseen liittyviä tietoja"
---

{{% blocks/lead color="light" %}}
<h1>Tietojen siirtäminen</h1>
<p class="lead">Datasäädöksen mukainen kuvaus Kitsaan pilvipalveluista siirrettävissä olevasta datasta ja sen tietorakenteista. Tiedot ovat noudettavissa avoimen ohjelmistorajapinnan (API) kautta JSON-muodossa. Osa tiedoista on myös ladattavissa suoraan ohjelmasta JSON- tai CSV-muodossa.
</p>

{{% /blocks/lead %}}

{{% blocks/section color="white" %}}

<div class="col">


## Siirrettävään tietoon sovellettavat eritelmät tai standardit

Taloushallinnon ohjelmistoille ei ole julkaistu (tilanne 4.9.2025) datasäädöksen tarkoittamia yhteensopivuuuta tukevia avoimia eritelmiä tai yhdenmukaistettuja yhteentoimivuutta koskevia standardeja.  

## Tekniset rajoitteet datapalveluntarjoajan vaihdolle

Tietojen onnistunut siirtäminen palvelusta toiseen palvelua vaihdettaessa edellyttää, että vastaanottaava palvelu tai ohjelmisto tukee siirrettävän datan tuomista järjestelmäänsä. Kitsas Oy:llä ei ole tiedossa minkään palvelun tai ohjelmiston vielä tukevan tässä kuvatun datan tuomista rajapinnasta saatavilla olevassa muodossa (tilanne 4.9.2025). Erityisesti Kitsas-ohjelma ei tue tässä kuvatun JSON-muotoisen datan tuomista omalle laitteelle tallennettuun kirjanpitoon.

Ohjelmistojen erojen vuoksi data saattaa olla mahdollista viedä vastaanottavaan järjestelmään vain osittain, vaikka vastaanottava palvelu tukisikin siirrettävän datan tuontia rajapinnan kautta tarjotussa muodossa.

Nämä tekniset rajoitukset koskevat tallennettujen tietojen siirtämistä uuteen palveluun tai ohjelmistoon. Tietojen säilyttämistä varten Kitsas-ohjelmasta on ladattavissa PDF-muotoinen tilinpäätös ja HTNL-muotoinen arkisto tilikauden kirjanpidosta. Arkisto sisältää myös mahdolliset kirjanpitoon liitteinä tallennetut tositteet (laskut, kuitit tms.). 

## Vaihdon tuomat riskit palveluiden saatavuudelle

Vaihdon onnistumiseksi asiakkaan on lopetettava muutosten tekeminen siirrettävään dataan ennen tietojen siirtämisen aloittamista. Siirron mahdollisesti epäonnistuessa palvelun käyttöä voidaan kuitenkin jatkaa normaalisti.

## Siirrettävissä olevat tiedot

Kirjanpitoon tallennetut tiedot voidaan noutaa ohjelmistorajapinnan kautta. Rajapintakuvauksessa on kuvattu noudettavissa olevat tiedot aiheittain GET-nappien takana Response-välilehdellä. 

**API-dokumentaatio:** [Ote Kitsaan vanhemmasta rajapinnasta - Kirjanpidon tietojen noutaminen](/api-docs.html)

Rajapinnan käyttöön tarvittava autentikointirajapinta on osa uudempaa rajapintaa. Tämä rajapintaon suppeampi. Täysi kuvaus rajapinnasta on saatavilla pyynnöstä osoitteesta [kitsas@kitsas.fi](mailto:kitsas@kitsas.fi). 


Rajapinnan käyttöön tarvitaan myös uudempaa, mm. autentikoinnista huolehtivaa rajapintaa. Tämä rajapinta on vanhaa suppeampi. Ohjelmistojen rinnakkaiseen käyttöön uosittelemme käyttämään uudempaa rajapintaa aina kun haettava tieto on saatavilla sen kautta. Uudemman rajapinnan käyttöä varten on saatavilla myös javascript-kirjasto. Kaikkien kirjanpidon tietojen hakeminen siirtoa varten edellyttää kuitenkin myös vanhemman rajapinnan käyttöä. Kirjanpidon käyttöoikeustiedot (käyttäjien nimet, sähköpostiosoitteet ja oikeudet) ovat saatavilla vain uudesta rajapinnasta. Uuden rajapinnan dokumentaatio on saatavilla pyynnnöstä osoitteesta [kitsas@kitsas.fi](mailto:kitsas@kitsas.fi)

Kitsas-ohjelmasta on mahdollista ladata suuri osa tiedoista JSON-muodossa muodostamalla [kirjanpitoarkisto](https://kitsas.fi/docs/tilikaudet/arkisto/). 

Osa tiedoista on ladattavissa suoraan Kitsas-ohjelmasta (PDF- ja) CSV-muotoisina raportteina. Kitsas-työpöytäohjelmiston raportit luodaan ohjelmistossa itsessään eikä palvelimella. Siksi valmiit raportit eivät ole saatavissa rajapinnan kautta. Tilinpäätös on saatavilla rajapinnan kautta PDF-tiedostona. 


</div>

{{% /blocks/section %}}