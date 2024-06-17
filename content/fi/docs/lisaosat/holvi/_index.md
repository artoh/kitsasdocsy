---
title: "Holvi"
linkTitle: "Holvi"
weight: 20
addonPrice: "5,00"
description: >
  Aineiston noutaminen Holvista
---

![](/img/fi/lisaosa/holvi/holvi.png)

Lisäosalla saat noudettua Holvista kirjanpitotapahtumat sekä niihin liitetyt tositteiden kuvat ja Holvissa tehdyt tiliöinnit.


## Holviin yhdistäminen

Holviin yhdistämisen voi tehdän vain tilin omistaja. Yhdistämistä ei siis voi tehdä kirjanpitoassistentin roolilla, vaan kirjanpitäjän on yleensä pyydettävä yrittäjää tekemään yhdistäminen.

Yhdistämisen voi tehdä myös [WebKitsasta](/docs/webkitsas) käyttäen ilman Kitsaan työpöytäsovelluksen asentamista. Tätä varten yrittäjä tarvitsee oman käyttäjätunnuksen Kitsaaseen.

![](/img/fi/lisaosa/holvi/aloitus1.png)

Valitse **Yhdistä Holviin**. Sinut ohjataan Holvin palveluun, johon kirjaudutaan Holvin käyttäjätunnuksilla. Kirjautuminen pitää vahvistaa vielä Holvin sovelluksella tai muulla kaksivaiheisen kirjautumisen menetelmällä.

![](/img/fi/lisaosa/holvi/aloitus2.png)

Salli vielä Kitsaalle pääsy yrityksen tilitietoihin.

![](/img/fi/lisaosa/holvi/aloitus3.png)


## Asetukset 

### IBAN-tilinumerot Kitsaassa 

Kitsas yhdistää Holvin tilit ja kortit vastaaviin kirjanpitotileihin IBAN-tilinumeroiden perusteella. Jos Holvissa käytettyjä tilejä ei ole määritely, saat ilmoituksen

![](/img/fi/lisaosa/holvi/ibanvirhe.png)

Määritä kyseisille kirjanpitotileille IBAN-numerot [tilin asetuksista](/docs/asetukset/tililuettelo/muokkaaminen/) **Asetukset** > **Tililuettelo** > Valitse tili ja **Muokkaa** > Välilehdellä **Perustiedot** > Syötä **IBAN**-tilinumero


### Kirjanpitotilit Holvin luokittelussa

Jotta Holvissa tehdyt kirjaukset päätyisivät oikeille kirjanpitotileille, määritä Holvin verkkopankissa **Kirjanpito** > **Luokat** luokkien asetuksissa käyttämille luokille **Tilinumero**-kohtaan Kitsaassa käytettävä kirjanpidon tilinumero.

## Tilitapahtumien hakeminen

Kun tili on yhdistetty, voit hakea tilitapahtumat haluamaltasi aikaväliltä.

![](/img/fi/lisaosa/holvi/hae1.png)

Kitsas näyttää esikatselun tapahtumista

![](/img/fi/lisaosa/holvi/hae2.png)

Tiliöinnit perustuvat Holvin kategorioihin ja niille määriteltyihin tileihin. Varoituskolmio tarkoittaa, ettei tositetta pystytä tiliöimään automaattisesti (tiliöinti puuttuu tai sille ei löydy vastaavaa tiliä).

Toistaiseksi aineiston hakua ei voi täydentää, eli haun jälkeiset täydennykset (esim. puuttuvat liitteet) on tehtävä Kitsaassa.

Painamalla **Tallenna kirjanpitoon** Kitsas muodostaa tapahtumista tositteet kirjanpitoon, lataa niihin Holvissa olevat kuvatiedostot ja tallentaa myös tiliotteen Kitsaaseen.

Tallentaminen voi kestää jonkin aikaa. Tallentaminen jatkuu, vaikka poistuisit tästä kirjanpidosta - voit siis siirtyä tekemään toista kirjanpitoa sillä aikaa, kun aineistoa ladataan.

![](/img/fi/lisaosa/holvi/haeok.png)


## Aineiston siirtäminen Dropboxin kautta

Jos suoraa yhdistämistä ei voida käyttää, voidaan Holvin aineistoa tuoda Kitsaaseen myös Dropboxin kautta. Aineisto viedään Holvin verkkopankissa **Raportit** > **Vientitiedostot** > **Dropbox**. 

### Yhdistäminen Dropboxiin

Kitsaan Holvi-lisäosassa valitse ensin **Lataa Dropboxista**. Yhdistä Kitsas samaan Dropbox-tiliin, jota käytetään aineiston viennissä. 

![](/img/fi/lisaosa/holvi/drop1.png)

Valitse, ketkä pääsevät käyttämään tätä Dropbox-yhteyttä. Jos käytätte yhtä Dropbox-tiliä toimiston kaikille kirjanpidoille, liitä valtuutus toimiston kaikkiin kirjanpitoihin.

### Asetukset

Määritä IBAN-tilinumerot ja Holvin käyttämät tiliöinnit [kuten edellä](#asetukset)