---
title: "Alkusaldojen tuonti CSV-tiedostosta"
linkTitle: "Tuonti CSV-tiedostosta"
weight: 80
keywords: ["tilinavaus"]
description: >
  Tilinavauksen voi tuoda CSV-tiedostolla esimerkiksi Procountorista
versio: "5.0"
---

Voit tuoda Kitsaaseen tilinavauksen ja edellisen tilikauden vertailulukemat csv-tiedostona aiemmasta kirjanpito-ohjelmistosta.

## CSV-tiedoston muodostaminen

### Procountor

Procountorista tarvittavat kirjanpitoraportit ovat **Tase** ja **Tuloslaskelma** seuraavilla valinnoilla

- päivämäärärajauksena tilikausi
- esitystapana **Kausi kuukausittain ja yhteensä**
- raportin pituus **Laajennettu: Kaikki tilit**
- tositteen tila **Liiketapahtumat**

Jos siirryt Kitsaaseen kesken tilikaudet, voit tuoda myös keskeneräisen tilikauden saldot lisäämällä vastaavat kaksi tiedostoa nykyiseltä tilikaudelta.

### CSV-tiedostojen muoto

- Tiedostomuotona CSV, erottimena puolipiste (;) ja desimaalierottimena piste (.) 
- Tilikausien tulee täsmätä Kitsaalle määriteltyihin tilikausiin 
- Tase ja tuloslaskelma omina tiedostoinaan  
- Tilinavaus voidaan tuoda kuukausittain 
- Tiedoston alussa voi olla tyhjiä rivejä sekä otsikkorivejä. Tällaisella otsikkorivillä pitää olla jotain sisältöä ensimmäisessä sarakkeessa. Nämä rivit eivät vaikuta tuontiin. 

Tuonti alkaa rivistä, jonka ensimmäinen sarake on tyhjä ja loput sisältävät päivämääriä. Päivämäärä voi olla joissain seuraavista muodoista: 
- 31.12.2022 
- 1.12.2022 - 31.12.2022 
- 12/2022 
- 1/2022 - 12/2022 

Lopuista riveistä tuodaan ainoastaan niiden tiedot, jotka sisältävät ensimmäisessä sarakkeessa tilin numeron ja nimen, esimerkiksi 1700 Myyntisaamiset. Numero voi olla 3 – 8 merkkiä pitkä. Rivin alussa voi olla välilyöntejä. Nimen ja numeron välissä on yksi tai useampi välimerkki (välilyönti, pilkku tms.)  

Jos ensimmäisessä sarakkeessa ei ole tilin numeroa ja nimeä, rivin tietoja ei tuoda. Näin tuonnissa ohitetaan mahdolliset otsikot ja summarivit. 

#### Esimerkki

Koska tiedoston alun otsikot ja erilaiset koontirivit ohitetaan, päästään molemmilla alla olevilla tiedostoilla samaan lopputulokseen:

```csv
Yrityksen nimi;Esimerkki Oy
Kirjanpitoraportin tyyppi;Tuloslaskelma

;1/2022;2/2022;3/2022;4/2022;5/2022;6/2022;7/2022;8/2022;9/2022;10/2022;11/2022;12/2022;1/2022 - 12/2022
Liikevaihto;3500,00;0,00;0,00;2367,00;18307,75;2484,00;0,00;0,00;0,00;0,00;0,00;0,00;26658,75
 Yleiset myyntitilit;3500,00;0,00;0,00;2367,00;18307,75;2484,00;0,00;0,00;0,00;0,00;0,00;0,00;26658,75
  3000, Myynti;3500,00;0,00;0,00;2367,00;18307,75;2484,00;0,00;0,00;0,00;0,00;0,00;0,00;26658,75
Henkilöstökulut
 Palkat ja palkkiot;0,00;0,00;0,00;-7400,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;-7400,00
  Osakkaiden ja omaisten palkat;0,00;0,00;0,00;-7400,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;-7400,00
   5800, Osakkaiden/omaisten palkat;0,00;0,00;0,00;-7400,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;-7400,00
``````        

```csv
;1/2022;2/2022;3/2022;4/2022;5/2022;6/2022;7/2022;8/2022;9/2022;10/2022;11/2022;12/2022;1/2022 - 12/2022
3000 Myynti;3500,00;0,00;0,00;2367,00;18307,75;2484,00;0,00;0,00;0,00;0,00;0,00;0,00;26658,75
5800 Osakkaiden/omaisten palkat;0,00;0,00;0,00;-7400,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;0,00;-7400,00
``````        



## Tiedostojen tuominen

Jos Kitsaan [tilikarttaa tarvitsee muokata](../../tililuettelo), tee se ennen alkusaldojen tuomista.

Valitse Asetusten Tilinavaus-näkymässä **Tuo CSV-tiedostosta...**

![](/img/fi/asetukset/tilinavaus/procountor.png)

Lisää CSV-tiedostot joko **Valitse tiedosto...** -napista tai vedä ne tuonti-ikkunan päälle.

Tämän jälkeen pääset vielä muokkaamaan aiemman ohjelmiston ja Kitsaan tilien vastaavuutta. Varmista, että **Kirjataan tilille** -sarakkeessa on oikea Kitsaan tili.

![](/img/fi/asetukset/tilinavaus/erittely.png)

Lisää tarvittaessa vielä kohdennuksia tai tase-erätietoja napsauttamalla Erittely-saraketta.

Jos olet tuonut myös keskeneräisen tilikaudet, on sen tilinavauksista muodostettu oma tositteensa, joka löytyy **Selaa**-toiminnolla.
