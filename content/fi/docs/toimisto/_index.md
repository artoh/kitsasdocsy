---
title: "Tilitoimisto"
linkTitle: "Toimisto"
weight: 150
pro: true
description: >
  Tilitoimistojen Kitsas Pro -tilauksiin kuuluva kirjanpitojen ja käyttäjien keskitetty hallinta
---

Kitsas Pro on Kitsaan tilitoimistoille räätälöity palvelukokonaisuus, johon kuuluu mm.

- Kirjanpitojen ja käyttöoikeuksien keskitetty hallinta
- Mahdollisuus käyttää tilitoimiston varmennetta asikkaiden alv-ilmoitusten tekemisessä
- Erittäin kilpailukykyinen hinnoittelu

Lue lisää [Kitsas Pro:n tuotesivuilta](https://taloudenohjelmistopalvelut.fi/kitsas)

## Tilitoimistonäkymä

![](/img/fi/toimisto/toimisto.png)

Vasemmanpuoleisimmassa sarakkeessa (Ryhmät) on luettelo tilitoimistoon kuuluvista ryhmistä.
Keskimmäisessä sarakkeessa on välilehdet valitun ryhmän kirjanpidoista ja käyttäjistä.
Oikeanpuolelimmassa sarakkeessa on puolestaan tarkempia tietoja viimeisimmäksi valitusta kohteesta, joka voi olla tilitoimisto, ryhmä, kirjanpito ja käyttäjä.

Käyttäjälle näytettävät kohteet määräytyvät käyttäjälle olevien [käyttöoikeuksien]({{<relref "kayttajat">}}) perusteella.

### Ryhmät

Isomman tilitoimiston kannattaa jakaa kirjanpidot **ryhmiin**, ja määritellä käyttäjäoikeudet ryhmäkohtaisesti.

Ryhmien perustaminen ei ole pakollista, vaan kaikki kirjanpidot ja käyttäjät voidaan määritellä myös suoraan tilitoimiston tasolle.

#### Uuden ryhmän perustaminen

Valitse ryhmä, jonka alle uusi ryhmä perustetaan - tai tilitoimisto, jos perustat ylätason ryhmän. Paina **Uusi ryhmä**-painiketta ja anna ryhmälle nimi.

### Kirjanpidot

#### Uuden kirjanpidon perustaminen

Kun haluamasi ryhmä on valittuna, paina **Uusi kirjanpito**-painiketta, ja syötä asiakasyrityksen perustiedot.

Uuden kirjanpidon logona on vihreä plus-merkki muistuttamassa, ettei kirjanpitoa ole vielä alustettu. Kun kirjanpito avataan ensimmäistä kertaa, tehdään [kirjanpidon alustaminen]({{<relref "alustaminen">}}) ohjattuna toimintona.

#### Toiminnot kirjanpidolle

Kirjanpitojen listan alapuolisessa **Kirjanpito**-valikossa on kirjanpitoon liittyviä toimintoja

##### Vaihda tuotetta

Valitse kirjanpitoon liittyvä tuote.

##### Siirrä

Siirrä kirjanpito toiseen ryhmään. Kirjanpidon ryhmäkohtaiset käyttöoikeudet muuttuvat välittömästi uuden ryhmän mukaisiksi-

##### Poista

Poistaa kirjanpidon pysyvästi.

##### Tukikirjautuminen

Käyttäjä, jolle on määritelty **Tukikirjautuminen**-oikeus, voi kirjautua täysillä käyttöoikeuksilla kirjanpitoon. Kirjautumisesta jää jälki lokitietoihin.

### Käyttäjät

Välilehdellä näytetään ryhmään liittyvät käyttöoikeudet, katso [käyttäjät ja käyttöoikeudet]({{<relref "kayttajat">}})

### Kirjanpidon tiedot

Kun kirjanpito on valittuna, näytetään oikeanpuoleisimmassa sarakkeessa kirjanpidon tarkempia tietoja

#### Perustiedot

Kirjanpidon nimi, tuote, tilastotietoja ja varmenteen tila.

#### Suorat käyttäjät

Käyttäjät, joilla on tähän nimenomaiseen kirjanpitoon erikseen määritelty käyttöoikeus. Suora käyttöoikeus voidaan määrittää esimerkiksi yrittäjälle tai tilintarkastajalle.

#### Ryhmäkäyttäjät

Käyttäjät, joille on käyttöoikeus tähän kirjanpitoon ryhmään (kirjanpidon ryhmä tai sen yläpuolella oleva ryhmä) kuulumisen perusteella.

#### Kirjatumiset

Käyttäjien kirjautumiset tähän kirjanpitoon.
