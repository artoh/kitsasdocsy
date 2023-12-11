---
title: "Tiliote sähköisessä muodossa"
linkTitle: "Sähköinen tosite"
keywords: ["sahkoinen"]
weight: 10
description: >
  Kitsas tunnistaa tilitapahtumat pdf- tai csv-tiedostosta ja yhdistää viitenumeron perusteella maksuja laskuihin.
---

![](/img/fi/kirjaus/tiliote/ahven1.png)

Jos käytössäsi on tiliote sähköisessä muodossa, aloita lisäämällä se tositteelle. Useimmiten Kitsas pystyy tunnistamaan tiliotteella olevat tapahtumat ja laskuperusteisessa kirjanpidossa yhdistämään maksut niitä koskeviin laskuihin.

{{<alert title="Tuetut pdf-tiedostot">}}
Kitsas tukee yleisimpien suomalaisten pankkien verkkopankista ladattuja pdf-muotoisia tiedostoja. Kitsas tunnistaa tiliotteesta avainsanoja, erilaisia merkkijonohahmoja ja tiliotteen ulkoisen rakenteen hahmon, ja poimii niiden perusteella tilitapahtumia.

Tekstien pitää olla upotettuina pdf-tiedostoon. Skannattujen tiliotteiden lukeminen vaatii erittäin hyvin onnistunutta tekstin tunnistamista. 

Ainakin seuraavien pankkien yritystilien tiliotteita on saatu luettua Kitsaaseen
- Aktia
- Ålandsbanken
- Danske Bank 
- Holvi
- Nordea 
- Oma Säästöpankki
- Osuuspankki
- Paikallisosuuspankki

{{</alert>}}

Täydennä tiliote valmiiksi

- Niiden menojen ja tulojen osalta, jotka voit kirjata ilman muuta tositetta kuin tiliote, voit täydentää tiliöinnin suoraan kyseisen rivin kohdalle. Valitaksesi esimerkiksi kohdennukset tuplanapsauta riviä päästäksesi [yksityiskohtaisempaan näkymään]({{<relref "tapahtumat">}}).
- Kitsas pystyy päättelemään joillekin riveille todennäköisimmän kirjaustilin. Katso siksi myös valmiiksi tiliöidyt rivit ja korjaa tiliöintiä tarvittaessa.
- Yhdistääksesi saapuneen maksun sitä koskevaan laskuun tuplanapsauta riviä ja valitse maksu saapuvista tai maksetuista laskuista.
- Kirjaamalla kyseisen rivin maksuperusteisesti erillisellä tositteella voit [liittää riviin tositteen]({{<relref "maksuperuste">}}).

Lopulta tiliotteen jokaiselle riville on merkitty kirjanpitotili

#### CSV-tiedosto

![CSV:n lisääminen](/img/fi/kirjaus/tiliote/csv.png)

Tuodessasi ohjelmaan CSV-muotoisen tiliotteet saat erillisen valintataulun, josta valitaan tili. Tarvittaessa voit myös valita, miten tiedostossa olevat sarakkeet tuodaan.

{{<alert title="Tilinumero kohdallaan?">}}
Jotta tiliotteen tuominen onnistuisi, pitää tilille olla määriteltynä IBAN-tilinumero.
{{</alert>}}
