---
title: "Tilinavaus"
linkTitle: "Tilinavaus"
weight: 80
keywords: ["uusi","tilinavaus"]
description: >
  Avaavien saldojen syöttäminen uutta kirjanpitoa aloitettaessa
youtube:
  - id: 7PJTKbHzWbA
    title: Tilinavauksen tekeminen
---

![](/img/fi/asetukset/tilinavaus/tilinavaus.png)

Tilinavauksessa syötetään tilin avaavina saldoina tilien loppusummat edellisen tilinpäätöksen taseesta ja tuloslaskelman erittelystä.

{{<alert title="Vain ensimmäiselle tilikaudelle">}}

Tilinavaus tehdään vain ensimmäiselle tilikaudelle, joka pidetään Kitupiikillä. Jatkossa ohjelma huolehtii automaattisesti uusien tilikausien tilinavauksista.

{{</alert>}}

Vastaava ja vastattava syötetään molemmat ilman etumerkkiä.  
Tulot syötetään ilman etumerkkiä ja menot miinusmerkkisinä.

Tuloslaskelmaan saldot syötetään tileittäin, koska uuden tilikauden tuloslaskelmaan on merkittävä vertailutiedot edelliseltä tilikaudelta. **Yli/alijäämä** lasketaan tileittäin syötetyistä tiedoista - varmista, että se sekä **Vastaavaa** ja **Vastattavaa** -summat täsmäävät tilinpäätöksen lukemiin.

Jos tilikarttaa on Kitupiikkiin siirryttäessä muutettu, pitäisi tilinavaukset vertailulukemat pyrkiä merkitsemään uuden tilikartan mukaisille tileille.

Samalla näytöllä syötetään myös **henkilöstön keskimäärä** edellisen tilikauden aikana. Tämä lukumäärä tulostuu vertailutietona tilinpäätöksen liitetietoihin sekä vaikuttaa siihen, voiko tilinpäätöksessä soveltaa mikro- tai pienyrityssääntöjä.

{{<alert title="Tilinpäätös ei ole vielä valmis?">}}

Voit aloittaa kirjaamisen, vaikka edellisen tilikauden tilinpäätös ei olisi valmis eikä tilinavausta olisi tehty. Taseesta tehtävät tulosteet ovat kuitenkin virheellisiä kunnes tilinavaus on tehty.

{{</alert>}}

### Tase-erät ja kohdennukset

Tileillä, joilla on käytössä tase-erittely, näkyy **Erittely**-sarakkeessa eräsymboli. Kohdennuksia käytettäessä näkyy tulo- ja menotilien erittely-sarakkeessa kohdennussymboli.

Valitsemalla erittelysarakkeen pääset syöttämään tilin saldon valmiiksi eriteltynä.

![](/img/fi/asetukset/tilinavaus/siirtosaamiset.png)

Syöttämällä siirtosaamiset ja myyntisaamiset eriteltynä pääset kirjanpidossa merkitsemään näiden erien maksun normaaliin tapaan, ja erät ovat mukana kirjanpidon tase-erittelyllä.

![](/img/fi/asetukset/tilinavaus/kohdennukset.png)

Syöttämällä tulot ja menot kohdennettuina saat kustannuspaikkojen tuloslaskelmalle vertailutiedot edelliseltä vuodelta.

### Kuukausittaiset tiedot

Kitsas mahdollistaa myös edellisen tilikauden kuukausittaisten vertailutietojen syöttämisen. Kun **tiedot kuukausittain** on valittuna, ovat kuukaudet erittelyn ensimmäisenä tasona, josta pääsee tarvittaessa etenemään tase-erien ja kohdennusten syöttämiseen.

Työläyden takia kuukausittaisten tietojen syöttäminen on mielekästä lähinnä [tuotaessa tietoja tiedostona]({{<relref "tuonti">}}) aiemmasta kirjanpito-ohjelmasta.


### Kirjanpidon aloittaminen kesken tilikauden

Jos aloitat kirjanpidon Kitsaalla kesken tilikauden, syötä Tilinavaus-toiminnolla edellisen tilikauden loppusummat ja muodosta muistiotosite (**Uusi tosite**), jolla kirjaat jokaiselle käytössä olevalle tilille ennen Kitsaan käyttöönottoa kirjatut kokonaissummat (debet-summa ja kredit-summa)

Jos olet arvonlisäverovelvollinen, on kirjanpito helpointa aloittaa verokauden vaihtuessa. Kirjaa maksuun menevä arvonlisäverovelka Verovelat-tilille niin, että uuden verokauden alkaessa alv-velassa ja alv-saatavissa ei ole avointa saldoa.

> Tilikautena on vuosi, ja yritys siirtyy 1.6.2018 toisesta kirjanpito-ohjelmasta käyttämään Kitsasta. Tilinavaukseen kirjataan tilien päättävät saldot 31.12.2017. Lisäksi luodaan tosite päivämäärälle 31.5.2018, johon kirjataan jokaiselle tilille erikseen debet- ja kredit-summa niistä kirjauksista, jotka on tehty aiemmalla kirjanpito-ohjelmalla 1.1.–31.5.2018.
