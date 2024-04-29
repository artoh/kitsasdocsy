---
title: "Tilitapahtumien hakeminen pankista"
linkTitle: "Tilitapahtumien hakeminen"
weight: 10
cloud: true
description: >
  Tilitapahtumien noutaminen pankista PSD2-yhteydellä
---

Lisäosalla voit hakea pankin tilitapahtumia Kitsaaseen. Haettaessa viitteelliset maksut kohdennetaan automaattisesti avoimiin laskuihin. 

Tilitietojen hakeminen on toteutettu [PSD2-maksupalveludirektiivin](https://www.finanssivalvonta.fi/saantely/saantelykokonaisuudet/psd2/) mukaisena tilitietojen hakemisena, jossa tilitietopalveluiden tarjoana toimii suomalainen [Enable Banking](https://enablebanking.com/). Tilitietopalvelun käyttämisestä veloitetaan 1,00 euro kuukaudessa (+ alv).Maksupalveludirektiivin mukaan pankit eivät lisäksi voi veloittaa tästä tilitietojen hakemisesta perimällä PSD2-yhteyden käyttämisestä palvelumaksua. 



![](/img/fi/lisaosa/pankkiyhteys/nakyma.png)

## Pankkiyhteyden lisääminen

Lisätäksesi ensimmäisen pankkivaltuutuksen paina **Tee valtuutus**. (Jos haluat myöhemmin lisätä yhteyden useampaan pankkiin, paina **Lisää uusi valtuutus**)

Valitse seuraavassa näkymässä käyttämäsi pankki.

Kun olet hyväksynyt tilitietojen välittämisen, sinut ohjataan antamaan valtuutus oman pankkisi palvelussa. Valtuuksen antamiseen tarvitaan verkkopankkitunnuksia.

### Huomautus Osuuspankin asiakkaille

Ennen kuin voit ottaa tilitietojen hakemisen käyttöön, on pankin asiakaspalvelusta erikseen pyydettävä [käyttöoikeuksien PSD2 tilitietojen hakemiseen](https://www.op.fi/yritykset/digitaaliset-palvelut-yrityksille/ulkopuolisen-palvelutarjoajan-valtuuttaminen) henkilölle, joka aktivoi pankkitunnuksillaan tilitietojen hakemisen.


## Tilitietojen noutaminen

Valitsemalla pankkitilin kohdalta **Tilitapahtumat** voit noutaa aiempia tilitapahtumia. Pankista riippuen tilitapahtumia voi noutaa 90 - 180 päivän ajalta.

Kitsas näyttää esikatselun noudetuista tilitapahtumista ja **Tallenna kirjanpitoon**-valinnalla tapahtumista muodostetaan Tiliote-tyypin tosite.

Valitsemalla **Nouda tapahtumat päivittäin** Kitsas noutaa joka yö edellisen päivän tilitapahtumat. Jos tilitapahtumien noutu epäonnistuu, yritetään sitä uudestaan kolme kertaa. Ellei noutaminen kolmannella kerrakaan onnistu, tulee kirjanpidon **Aloita**-sivulle siitä virheilmoitus.

## Valtuutuksen uudistaminen
Valtuutus tilitapahtumien hakemiseen on kerrallaan voimassa yleensä puoli vuotta. Ohjelma muistuttaa lähenevästä valtuutuksen vanhenemisesta, jolloin **Uudista valtuutus** -napilla pääset jatkamaan valtuutusta jälleen kolmen kuukauden ajaksi. Sinut ohjataan Enable Bankingin palvelun kautta omaan verkkopankkiisi samalla tavalla kuin pankkiyhteyttä lisättäessä.
