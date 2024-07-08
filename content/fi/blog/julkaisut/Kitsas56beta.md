+++
title = "Kitsas 5.6 Beta"
date = "2024-06-17"
description = "Tuki 25,5 % arvonlisäverolle"
tags = ["beta"]
categories = ["julkaisu"]
author = "Arto"
banner = "img/banners/alv255.png"
+++

Kitsas 5.6 tuo tuen syyskuun alussa korotettavalle yleiselle arvonlisäveroprosentille.

Ohjelmiston tilikartassa olevia tilien arvonlisäveroprosentteja tai tuotteiden alv-kantoja ei tarvitse tässä yhteydessä muokata, vaan ohjelmisto ehdottaa uutta arvonlisäveroprosenttia päivämäärän mukaisesti. Kirjanpitäjältä tarvitaan kuitenkin huolellisuutta, sillä muutosvaiheessa verokanta määräytyy ensisijaisesti toimituspäivän mukaisesti, katso tarkemmin [Verohallinnon ohjeista](https://www.vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/arvonlisaverotus/arvonlisaveroprosentit/Yleinen-arvonlisaverokanta-nousee-syyskuussa/).

Lisäksi ohjelmassa on tuki viimeiselle alarajahuojennuksen hakemiselle jouluun 2024 alv-ilmoitusta annettaessa.

Mukana on myös muutamia kirjauksiin ja poistoihin liittyviä korjauksia sekä mahdollisuus hakea pilvikirjanpitoa nimellä silloin, kun listalla on suuri määrä kirjanpitoja.

**Beta-versio on ennakkojulkaisu, jota ei ole vielä täysin testattu**. Version 5.6 varsinainen julkaisu on elokuun alussa. Tällöin tiedoitamme julkaisusta myös ohjelman etusivulla.

Beta-versio on nyt julkisesti ladattavissa Windowsille ja Linuxille 

- [Kitsas 5.6 BETA Windows](https://github.com/artoh/kitupiikki/releases/download/v5.6-beta/kitsas-5.6-beta-asennus.exe)
- [Kitsas 5.6 BETA Linux](https://github.com/artoh/kitupiikki/releases/download/v5.6-beta/Kitsas-5.6-beta-x86_64.AppImage)
- [Kitsas 5.6 BETA Mac](https://github.com/petriaarnio/kitupiikki/releases/download/mac-v5.6-beta/Kitsas-5.6-beta.dmg)


Jos Linux-versio kaatuu NSS-tietokannan alustamisen virheeseen, voi tämän korjata käynnistämällä ohjelman komennolla `LD_LIBRARY_PATH="/usr/lib/x86_64-linux-gnu/nss" ./Kitsas-5.6-beta-x86_64.AppImage`

## Palaute tervetullutta

Otamme mielellämme palautetta vastaan osoitteessa palaute@kitsas.fi

<img src="/img/screenshots/alvilmo.png" class="img-responsive"/>