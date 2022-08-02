+++
title = "Versioon 3.3 siirtyminen"
date = "2022-08-01"
tags = [""]
categories = [""]
description = "Huomioitavaa pävitettäessä versioon 3.3"
author = "Arto"
banner = "img/versions/33kehakukka.png"
+++

Kitsaan versiossa 3.3 on parannettu erityisesti aputoiminimiä ja sähköpostiviesteihin liittyviä saatteita.

Päivityksen jälkeen on siksi syytä tarkastaa muutamia ohjelman asetuksia.

## Päivitä tilikartat

<img src="/img/screenshots/paivita.png" class="img-responsive"/>

Ohjelma ilmoittaa aloitusnäytöllä, että tilikarttaan on saatavilla päivitys.

Klikkaa **Päivitä tilikartta** -tekstiä ja vielä avautuvalla näkymällä **Päivitä tilikartta** -nappia.

## Tarkista toiminimien asetukset

Aputoiminimien tiedot, mutta myös logon ja laskun ulkoasun määritykset on siirretty asetuksissa **Yhteystiedot ja toiminimet** -välilehdelle.

<img src="/img/fi/asetukset/yhteystiedot.png" class="img-responsive"/>

Tarkista yrityksesi tiedot, myös laskun tehostevärin asetukset.

Jos haluat käyttää aputoiminimiä, lisää aputoiminimet. Nyt voit käyttää useampaa aputoiminimeä ja valita laskukohtaisesti laskulle tulostuvan aputoiminimen. Aputoiminimeen voi liittyä myös erillinen logo ja laskun värin asetukset.

Katso tarkemmin [ohjeesta](/docs/asetukset/yhteystiedot/)

## Kirjoita laskujen saatetekstit

Sähköpostilla lähetettävän laskun otsikko sekä saateviesti kannattaa käydä muokkaamassa asetuksen kohdassa **Laskujen tekstit**. Näitä tekstejä pääsee toki muokkaamaan myös laskukohtaisesti yksittäistä laskua muokattaessa.

<img src="/img/fi/asetukset/yhteystiedot.png" class="img-responsive"/>

Saatetekstissä olisi hyvä antaa myös yhteystiedot asiakkaalle laskua koskevia kyselyitä varten.

## Muita parannuksia tässä versiossa

- Maventan verkkolaskutuksen kautta lähetettäviin verkkolaskuihin liitetään nyt Kitsaalla luotu laskun kuva. Laskuihin voi lisätä nyt myös liitetiedostoja, jotka välitetään sähköpostin tai Maventan verkkolaskun liitteinä.
- Laskun voi lähettää sähköpostilla useampaan osoitteeseen erottelemalla ne pilkulla.
- Pilveen tallennetuissa kirjanpidoissa voidaan laskujen lähettämiseen käyttää Kitsaan palvelinta, jolloin ei tarvitse enää tietää oman smtp-palvelimen asetuksia.
- Tuotteen yksikköhinnassa voi olla enintään viisi desimaalia.
- Laskun yksikköihin on lisätty hehtaari.
- Laskun lisätietojen (kuten eräpäivä ja laskun numero) näkyminen laskua kirjattaessa voidaan valita erilaisille maksutavoille.
- Pääkirjan ja päiväkirjan selkiyttäminen silloin, kun valittuna on kaikki sarakkeet
