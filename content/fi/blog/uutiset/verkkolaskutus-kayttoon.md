+++
title = "Verkkolasku käyttöön"
date = "2020-03-04"
tags = ["verkkolasku"]
categories = ["laskutus"]
description = "Verkkolaskuja voi nyt lähettää ja vastaanottaa Kitsaalla!"
author = "Arto"
banner = "img/banners/verkkolasku.png"
+++

## Verkkolaskulaki tulee

1.4.2020 alkaen kaikkien yli 10 000 euron liikevaihdon yritysten pitää toimittaaa ja vastaanottaa laskunsa verkkolaskuina, jos vastapuoli sitä pyytää.

Kitsaaseen verkkolaskuominaisuus on toteutettu osittain palvelimella, joten se on käytössä ainoastaan maksullisen tilauksen yhteydessä.

<img src="/img/banners/verkkolasku.png" class="img-responsive"/>

## Paikallinen muodostaminen

Kitsas voidaan määritellä muodostamaan luotavat verkkolaskut tietokoneella olevaan kansioon, jolloin käyttäjä huolehtii xml-muodossa olevien laskujen toimittamisesta verkkolaskuoperaattorille.

Vastaavasti Kitsaan tositteeseen voidaan lisätä verkkolasku raahaamalla xml-tiedosto tositteelle.

## Integrointi Maventan verkkolaskuihin

Maventan asiakkaat voivat lähettää Kitsaasta verkkolaskuja suoraan nappia painamalla. Kitsas osaa myös hakea Maventan palveluun saapuvat verkkolaskut.

Maventa laskuttaa verkkolaskujen lähettämisestä ja vastaanottamisesta oman hinnastonsa mukaisesti.
