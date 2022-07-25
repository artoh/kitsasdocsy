---
title: "Laskutuksen asetukset"
linkTitle: "Laskutus"
weight: 90
keywords: ["laskutus", "aputoiminimi"]
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

Laskurivit
: tulostetaanko laskurivit arvonlisäverottomilla hinnoilla (**Verottomat rivit**), arvonlisäverollisilla hinnoilla (**Verolliset rivit**) vai molemmilla (**Pitkät rivit**). Valinnan voi tehdä laskua muokattaessa myös yksittäiselle laskulle.

Desimaaleja yksikköhinnassa
: kuinka monen desimaalin tarkkuudella tuotteiden yksikköhinnat määritellään. Rivin ja laskun kokonaishinta lasketaan aina sentin tarkkuudella.

#### Tulosta laskuille

Tilinumerot
: Tilinumerot pitää ensin määritellä [tilin tiedoissa]({{<relref "tililuettelo">}}).

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

#### Ikkunakuoret

Jos laskut on tarkoitus postittaa **ikkunakuoressa**, määrittele kirjekuoren osoiteikkunan koko sekä sijainti. Isoikkunakuoressa (ikkunan korkeus yli 5,5 cm) ikkunan kohdalle tulostetaan sekä lähettäjän että vastaanottajan tiedot.

Suositellut ikkunakuoret

| Koko          | Ikkunan leveys | Ikkunan korkeus | Etäisyys vasemmalta | Etäisyys ylhäältä |
| ------------- | -------------- | --------------- | ------------------- | ----------------- |
| C5            | 95 mm          | 35 mm           | 18 mm               | 40 mm             |
| C5 isoikkuna  | 90 mm          | 60 mm           | 18 mm               | 10 mm             |
| E65           | 90 mm          | 30 mm           | 18 mm               | 40 mm             |
| E65 isoikkuna | 90 mm          | 60 mm           | 18 mm               | 10 mm             |

{{<alert title="Aputoiminimi, logo ja tehostevärit">}}

Aputoiminimet sekä logoon ja tehosteväreihin liittyvät valinnat määritellään [Yhteystiedot ja toiminimet]({{<relref "yhteystiedot">}}) -välilehdellä.

{{</alert>}}
