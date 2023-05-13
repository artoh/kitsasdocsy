+++
title = "Kitsas 5.0 Julkaisuehdokas"
date = "2023-05-13"
description = "Kitsas 5.0 RC on ladattavissa"
tags = ["rc"]
categories = ["julkaisu"]
author = "Arto"
banner = "img/banners/eumyyntinappi.png"
+++

Kitsas 5.0 on nyt julkaisuehdokas-vaiheessa, eli tämän version voi jo hyvin ottaa käyttöön! Ohjelmaa on testattu varsin kattavasti, mutta jotain yhteensopivuusongelmia voi edelleen ilmetä - kaikista ongelmista otamme erittäin mielemmämme vastaan palautetta osoitteessa palaute@kitsas.fi

### Windows-versio

[Kitsas 5.0 RC Windows](https://github.com/artoh/kitupiikki/releases/download/v5.0-rc/kitsas-5.0-RC-asennus.exe)
Ohjelma asentuu aiemman Kitsaan rinnalle.

### Mac-versio

Mac-versio julkaistaan myöhemmin

### Linux-versio
[Kitsas 5.0 RC Linux](https://github.com/artoh/kitupiikki/releases/download/v5.0-rc/Kitsas-5.0-rc-x86_64.AppImage)

Suoraan käynnistettävä AppImage-tiedosto. Vaatii esimerkiksi Ubuntu 20.04 tai uudemman

## Tiedetyt puutteet

- Tilikaudesta muodostettua arkistoa ei pysty suoraan kopioimaan muuhun hakemistoon **Tilikaudet**-välilehden **Vie arkisto** -napilla. Arkisto kuitenkin muodostuu tietokoneen arkistohakemistoon, jonka voi kopioida.
- Tilitoimistonäkymän **ALV valmis** -sarakkeelle ei vielä päivity tietoa viimeisimmistä annetuista alv-ilmoituksista, koska ominaisuutta ei ole toteutettu palvelimelle
- Ohjeita ei ole vielä pävitetty tälle versiolle, eivätkä ohjelman kaikki **Ohje**-napit toimi


## Keskeiset uudet ominaisuudet

### Uudet ominaisuudet

- Alkusaldojen tuominen Procountorista **Asetukset** > **Tilinavaus** -toiminnossa
- [Yhteisömyynnin yhteenvetoilmoitusen laatiminen](/docs/alv/yhteenvetoilmoitus/)
- Yle-veron kirjaaminen vähennettäväksi menoksi ja muutokset tuloverodialogissa
- Tilikarttojen päivittäminen tukemaan tiliöimättömän määrän esittämistä
- Sisäänkirjautumisen virheenkäsittelyn parannukset
- Lisäosien käyttöönoton ja ilmoitusten muutokset, lisäosien käyttöönotto versiolla 5.0-beta ei enää onnistu
- Parempi tuki näytön tummalle teemalle
- Alv-lukittujen tositteiden muokkaaminen voidaan ottaa käyttöön kohdassa **Asetukset** > **Verot**



### Versiossa 5.0 beta olleet ominaisuudet

- Liitteinä olevien tiedostojen tallentaminen ja ennakoiva haku liitevälimuistiin
- Pdf-komponenttien toteuttamienn QtPdf-kirjastolla
- Tuki Kitsaan lisäosille (Asetukset > Lisäpalvelut)
- Arvolisäverolaskelmaan tulostetaan myös maksutiedot
- Uudistettu tiliotenäkymä
- Käyttää Qt:n versiota 6.4

Versio sisältää Kitsaan 4.0.5-versiossa olevat korjaukset.

## Palaute tervetullutta

Otamme mielellämme palautetta vastaan osoitteessa palaute@kitsas.fi

Version 5.0 tunnuskukkana on sinivuokko
![](/img/versions/50sinivuokko.png)
