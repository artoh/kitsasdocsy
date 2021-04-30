---
title: "Kirjaamisnäkymän yksityiskohtaisemmat ohjeet"
linkTitle: "Yksityiskohtaisemmat ohjeet"
weight: 100
description: >
  Kirjausnäkymän valinnat yksityiskohtaisemmin selostettuina
---

![](/img/fi/kirjaus/osat/alaosa.png)

Tositetyyppi
: Tositetyyppi määrittelee kirjauksessa käytettävän näkymän. Nämä näkymät on kuvattu tositetyyppien ohjeissa.

Tositteen pvm
: Tositteen, kuten laskun päivämäärä. Maksuperusteisessa kirjanpidossa tähän merkitään päivämäärä, jona maksu on saatu tai suoritettu.

Otsikko
: Tositteen otsikko, joka näytetään tositteita selattaessa

Kirjaa-välilehti
: Välilehden sisältö riippuu tositteen tyypistä, ja on kuvattu tositetyyppien ohjeissa.

Viennit-välilehti
: Kirjanpitoon tallennettavat tositteen viennit. Jos tositetyypillä on **Kirjaa**-välilehti, tehdään muokkauksen siihen.

Muistiinpanot-välilehti
: Muistiinpanot-välilehdelle kirjoitetaan tarkemmat tiedot tositteesta. Hankinnasta voidaan esimerkiksi kertoa, mitä varten se on tehty ja mihin päätökseen se perustuu (esim. yhdistyksessä viittaus hallituksen pöytäkirjaan).

Liitteet-välilehti
: Sähköisessä muodossa tallennettu tosite, katso [Sähköiset tositteet]({{< relref "liitteet" >}})

Kierto-välilehti
: Laskun sähköinen tarkastaminen ja hyväksyminen, katso [Kierto]({{<relref "../kierto">}})

Kommentit-välilehti (vain pilvessä)
: Kommentit-välilehdelle voidaan kirjoittaa tarkempaa tietoa tositteesta ja sen käsittelystä. Kommentteja voi lisätä vielä tilikauden lukitsemisen jälkeenkin

Loki
: Loki-välilehdellä näkyy tositteen muokkaajat ja muokkausajankohdat. Napsauttamalla näkymä riviä saat näkyviisi täsmällisesti tositteeseen tehdyt muutokset.

Tositesarja
: Tositesarja, johon tosite kuuluu. Uusi tositesarja voidaan aloittaa kirjoittamalla tähän kohtaan haluttu kirjainyhdistelmä. Näkyvissä vain, jos tositesarjat on otettu käyttöön asetuksissa.

Tositteen numero
: Tosite saa numeron vasta, kun se tallennetaan kirjanpitoon **Valmis**-painikkeella.

Huomiomerkki
: ![](/img/fi/kirjaus/osat/huomiomerkki.png)-kuvakkeella voit asettaa tositteelle huomiomerkin. Huomiomerkki poistuu napsauttamalla kuvaketta uudelleen.

Voit käyttää merkkiä muistuttamaan, että tositteelle pitää tehdä vielä jotain (esimerkiksi tositteen tiliöinti pitää tarkastaa tai tositteesta puuttuu liite). Selausnäkymässä saat helposti poimittua ne tositteet, jotka on merkitty huomiomerkillä.

Tallenna luonnos
: Tosite tallennetaan luonnoksena, eikä sillä olevia kirjauksia oteta huomioon kirjanpidon raporteissa. Luonnos-tilassa tallennetut tositteet löytyvät Selauksen Luonnos-välilehdeltä.

Valmis
: Tosite tallennetaan kirjanpitoon, ja se saa tositenumeron

### Tositteiden numerointi

Tositteet numeroidaan vasta, kun ne tallennetaan valmiina kirjanpitoon. Tallennuksen jälkeen Kitsas näyttää tallennetun tositteet tunnuksen. Jos säilytät tositteet paperisina, merkitse ohjelman ilmoittama tunnus tositteeseen.

![](/img/fi/kirjaus/osat/tositetunnus.png)

Yllä olevassa tositetunnisteessa OL 1 / 18

- OL on tositesarja (Ostolaskut)
- 1 on tositteen numero sarjassaan
- 18 on tilikauden tunnus (vuosi 2018)

Jos tositteiden numerointia on tarpeen muokata, voit valikon **Vaihda tositenumero**-toiminnolla vaihtaa yksittäisen tositteen numeroa, tai Tilikaudet-näkymän **Numeroi uudelleen**-toiminnolla numeroida tietyn ajanjakson tositteet yhteinäiseen sarjaan aikajärjestyksessä.

{{<alert title="Tositteita ei tarvitse numeroida aikajärjestyksessä">}}

Tositenumeroinnin ainoa tarkoitus on yhdistää tositteen tiedot kirjanpidossa oleviin tositteeseen. Nykyisen kirjanpitolain mukaan tositenumeroinnin ei tarvitse olla aikajärjestyksessä tai yhtenäinen, kunhan jokainen tosite on yksilöitävissä.

{{</alert>}}

### Valikon toiminnot

Kirjausikkunan oikeassa alakulmasta aukeaa valikko.

Siirry tositteeseen <kbd>Ctrl</kbd>+<kbd>G</kbd>
: Siirry toisitteeseen tositenumerolla

Tulosta tosite <kbd>Ctrl</kbd>+<kbd>P</kbd>
: Tulostaa tositteen tiedot

Kopioi uuden pohjaksi <kbd>Ctrl</kbd>+<kbd>T</kbd>
: Luo uuden tositteen tämän tositteen pohjalta

Tallenna mallipohjaksi
: Tekee tästä tositteesta mallipohjan, jota voi käyttää uusien tositteiden pohjana

Poista tosite
: Poistaa tositteen. Poistetut tositeet löytyvät kuitenkin Selauksen Poistetut-välilehdeltä, ja ne voidaan palauttaa takaisin osaksi kirjanpitoa.

Tyhjennä viennit
: Tyhjentää tositteen viennit. Toimintoa voi käyttää, jos sähköisen tositteen lisäämisessä ohjelma tunnistaa tositteelta virheellisiä vientejä.

Vaihda tunnistenumero
: Vaihtaa tositteen numeron. Ohjelma ei tarkista valitsemaasi numeroa päällekkäisten tunnistenumeroiden varalta.
