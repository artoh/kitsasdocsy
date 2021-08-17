---
title: "Laskutuksen asetukset"
linkTitle: "Laskutus"
weight: 90
keywords: ["laskutus"]
description: >
  Laskutuksen tilien ja laskujen ulkoasun asetukset
---

![](/img/fi/asetukset/laskutus.png)

#### Oletusvalinnat uusille tileille

Saatavatili
: tili, jolle lasku kirjataan suorite- tai maksuperusteisesti (yleensä Myyntisaamiset)

Käteistili
: tili, jos maksu kirjataan käteislaskuna (yleensä Käteisvarat)

Korttimaksutili
: tili, jos maksu kirjataan korttimaksuna (yleensä Korttimaksusaamiset)

Maksumuistutustili
: tili, jolle kirjataan maksumuistutusten muistutusmaksut

Viivästyskorkotili
: tili, jolle kirjataan maksumuistutusten viivästyskorot

Ensimmäisen laskun numero
: numero, josta alkaen laskut numeroidaan juoksevasti

Maksuaika
: laskujen oletusmaksuaika

Huomautusaika
: laskuille tulostettava huomautusaika. Jos huomautusaika on 0, ei huomautusaikaa tulosteta.

Peruskorko
: korko, jonka perusteella viivästyskorko määritellään. [Suomen Pankki](https://www.suomenpankki.fi/fi/Tilastot/korot/kuviot/korot_kuviot/viitekorko_chrt_fi/) julkaisee koron puolen vuoden jaksoille.

#### Tulosta laskuille

Tilinumerot
: Tilinumerot pitää ensin määritellä [tilin tiedoissa]({{<relref "tililuettelo">}}).

Aputoiminimi
: Käytettäessä aputoiminimeä tulostetaan se yrityksen nimen sijaan

Tilisiirto
: Perinteinen tilisiirtolomake laskun alalaidassa

RF-viitteet
: Kansainvälisessä RF-muodossa olevat viitteet. Ellei tätä ole valittu, käytetään suomalaisen kansallisen käytännön mukaisia lyhyempiä viitenumeroita.

Pankkiviivakoodi
: Viivakoodi, joka sisältää laskun maksutiedot

QR-koodi
: Laskun tiedot sisältävä QR-koodi

Virtuaaliviivakoodi
: Tekstimuodossa tulostettavat viivakoodin tiedot, joilla maksutiedot voidaan syöttää esim. verkkopankkiin

Kehyksen väri
: Laskua tulostettaessa kehyksissä käytettävä väri

Varjostus
: Laskua tulostettaessa varjostukseen käytettävä väri

Logon korkeus
: Laskulle tulostettavan logon korkeus. Logo ja sen sijainti määritellään [Perusvalinnat]{{<relref "perusvalinnat">}}-lehdellä

#### Ikkunakuoret

Jos laskut on tarkoitus postittaa **ikkunakuoressa**, määrittele kirjekuoren osoiteikkunan koko sekä sijainti. Isoikkunakuoressa (ikkunan korkeus yli 5,5 cm) ikkunan kohdalle tulostetaan sekä lähettäjän että vastaanottajan tiedot.

Suositellut ikkunakuoret

| Koko          | Ikkunan leveys | Ikkunan korkeus | Etäisyys vasemmalta | Etäisyys ylhäältä |
| ------------- | -------------- | --------------- | ------------------- | ----------------- |
| C5            | 95 mm          | 35 mm           | 18 mm               | 40 mm             |
| C5 isoikkuna  | 90 mm          | 60 mm           | 18 mm               | 10 mm             |
| E65           | 90 mm          | 30 mm           | 18 mm               | 40 mm             |
| E65 isoikkuna | 90 mm          | 60 mm           | 18 mm               | 10 mm             |
