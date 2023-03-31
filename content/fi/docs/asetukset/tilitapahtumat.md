---
title: "Tilitapahtumien hakeminen pankista"
linkTitle: "Tilitapahtumien hakeminen"
weight: 155
description: >
  Päivittäinen tilitapahtumien noutaminen pankista PSD2-yhteydellä
---

<div class="cloud-only">
  <i class="fa fa-cloud"></i> Ominaisuus on käytettävissä vain, kun kirjanpito on tallennettu Kitsaan pilveen <br/>
</div>  

Edellisen päivän tilitapahtumat haetaan seuraavan aamuyön aikana ja niistä muodostetaan tosite. Viitteelliset maksut kohdennetaan automaattisesti avoimiin laskuihin.

Tilitietojen hakeminen on toteutettu [PSD2-maksupalveludirektiivin](https://www.finanssivalvonta.fi/saantely/saantelykokonaisuudet/psd2/) mukaisena tilitietojen hakemisena, jossa tilitietopalveluiden tarjoana toimii [Nordigen](https://nordigen.com/en/).  Maksupalveludirektiivin mukaan pankit eivät voi veloittaa tästä tilitietojen hakemisesta.

{{<alert title="Muutoksia palveluun">}}

Palveluntarjoajamme Nordigenin yritysjärjestelyihin liittyen palveluun on odotettavissa muutoksia lähikuukausien aikana.

Palveluntarjoajamme on muuttamassa palvelua maksulliseksi, minkä takia joudumme valitettavasti luopumaan tilitapahtumien hakemisen maksuttomuudesta. Tiedotamme lisää, kun saamme enemmän tietoa tilanteesta.

{{</alert>}}

![](/img/fi/asetukset/tilitiedot.png)

## Pankkiyhteyden lisääminen

Varmista ennen pankkiyhteyden lisäämistä, että pankkitilille [on määritelty]({{<relref "./tililuettelo">}}) IBAN-numero.

Paina **Lisää pankkiyhteys** ja hyväksy palvelun maksullisuus.

Valitse pankki. Ohjelma näyttää linkin, jota klikkaamalla pääset verkkoselaimella hyväksymään valtuutuksen. Sinut ohjataan Nordigenin palvelun kautta oman pankkisi palveluun, jossa voit valita tilit, joiden tilitapahtumat välitetään Kitsaaseen. Älä sulje selainta ennen kuin saat ilmoituksen tilien lisäämisestä.

### Huomautus Osuuspankin asiakkaille

Ennen kuin voit ottaa tilitietojen hakemisen käyttöön, on pankin asiakaspalvelusta erikseen pyydettävä [käyttöoikeuksien PSD2 tilitietojen hakemiseen](https://www.op.fi/yritykset/digitaaliset-palvelut-yrityksille/ulkopuolisen-palvelutarjoajan-valtuuttaminen) henkilölle, joka aktivoi pankkitunnuksillaan tilitietojen hakemisen.

## Tilitietojen noutaminen

Edellisen päivän tilitiedot noudetaan aina aamuyöllä. Voit myös **Nouda tapahtumia**-napilla hakea aiempia, enintään 90 päivää vanhoja tilitapahtumia.

Ohjelma näyttää luettelon viimeisimmistä tilitapahtumien noutamisista ja mahdollisista virheistä. Klikkaamalla onnistuneen noudon riviä pääset tilitapahtumiin liittyvään tositteeseen.

## Tilitapahtumien käsittely

Kitsas pyrkii kohdentamaan tilitapahtumat mm. viitenumeron perusteella. Ellei ohjelma pysty kohdentamaan kaikkia tilitapahtumia, näytetään aloitussivulla ilmoitus siitä, että kirjanpidossa on käsiteltäviä tiliotteita.

![](/img/fi/asetukset/tilioimatta.png)

Nämä keskeneräiset tiliotteet näkyvät selauksessa punaisella, merkittyinä oranssilla huomiopallolla. Kirjanpito ei täsmää ennen kuin nämä tiliotteet on käsitelty.

## Valtuutuksen uudistaminen

Valtuutus tilitapahtumien hakemiseen on kerrallaan voimassa kolme kuukautta. Ohjelma muistuttaa lähenevästä valtuutuksen vanhenemisesta, jolloin **Uudista valtuutus**-napilla pääset jatkamaan valtuutusta jälleen kolmen kuukauden ajaksi. Sinut ohjataan Nordigenin palvelun kautta omaan verkkopankkiisi samalla tavalla kuin pankkiyhteyttä lisättäessä.
