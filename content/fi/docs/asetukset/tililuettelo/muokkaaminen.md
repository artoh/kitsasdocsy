---
title: "Tilin muokkaaminen"
linkTitle: "Tilin muokkaaminen"
weight: 10
description: >
  Tilin asetusten muokkaaminen
---

![](/img/fi/asetukset/tililuettelo/muokkaus2.png)

Tilit ja otsikot pitää **numeroida**. Taseen vastaavaa-tilit alkavat numerolla 1 ja vastattavaa-tilit numerolla 2. Numerosarjat 3..9 kuuluvat tuloslaskelmaan päätettäville tulo- ja menotileille. Tilinumeron pituus saa olla enintään enintään kahdeksan numeroa.

Tilejä lisättäessä on tärkeää, että tili tulee oikealle numeroalueelle, jotta se näkyy raporteissa oikealla tavalla. Tilinumero näytetään punaisella, jos numero on jo käytössä tai jos numero ei osu otsikkonsa numeroalueelle.

{{<alert title="Tilien sijoittuminen tilinpäätöksessä ja taseessa" color="warning">}}

Jos tilien numerointia muutetaan tai tilejä lisätään olemassa olevien otsikkoalueiden ulkopuolelle, pitää vastaavat muutokset tehdä myös [raporttien muokkauksessa](../raportit).

{{</alert>}}

**Tilityyppi** määrittelee, miten tiliä käsitellään kirjanpidossa ja missä luetteloissa tili näytetään, katso alempaa [Tilityypit](#tilityypit).

**Verolaji** ja **veroprosentti** ovat tilin kirjauksen oletusvalintoja, verolajin ja -prosentin voi aina valita joka viennille erikseen, katso [arvonlisävero](/alv). Valinnat eivät ole näkyvissä, jos yritystä ei ole merkitty [perusvalinnoissa](../perusvalinnat) arvonlisävelvolliseksi.

**Jaksotustiliä** käytetään siirtovelkojen/siirtosaamisten kirjaamiseen silloin, kun tuloja jaksotetaan Kitsaan automaattitoiminnolla.

Pankkitileille syötetään lisäksi **IBAN-tilinumero**. Tilinumero tarvitaan maksujen kohdentamiseen maksuja
ja tiliotteita tuotaessa.

!!! note "Maksutavat"
Jos haluat lisäämäsi pankkitilin meno- ja tulotositteiden maksutapavalintaan, on se tehtävä [maksutapojen asetuksista](../maksutavat).

**Tilikartan laajuus** määrittelee, millä tilikartan laajuuden valinnoilla tili on näkyvissä.

### Tase-erittely ja tase-erät

![](/img/fi/asetukset/tililuettelo/myyntisaamiset.png)

Tasetilien (vastaavaa ja vastattavaa) kohdalla valitaan, miten tili esitetään **tase-erittelyssä**.

- **Täysi erittely tase-erillä**: Tilin kirjaukset jaetaan eri tase-eriin, joiden kaikkia muutoksia seurataan. Käytetään esimerkiksi tasaeräpoistettavan omaisuuden kirjanpitoarvon seurantaan.
- **Tase-erien luettelo**: Kirjaukset jaetaan tase-eriksi, ja erittelyssä seurataan eri erien saldoja. Käytetään esimerkiksi myyntisaamisissa ja ostoveloissa, jolloin erittelyistä selviää, mitkä saatavat ovat vielä maksamatta.
- **Lisäykset ja vähennykset**: Kirjauksia ei eritellä, mutta tase-erittelyyn tulostuvat tilikauden aikaiset tapahtumat. Käytetään esimerkiksi menojäännöspoistettavissa tileissä.
- **Saldo**: Tase-erittelyyn tulostetaan vain tilien saldot.

### Poistettava omaisuus

![](/img/fi/asetukset/tililuettelo/kalusto.png)

Kitupiikki tukee suunnitelman mukaisten poistojen tekemistä tasaeräpoistoina tai menojäännöspoistoina.

**Tasaeräpoistoissa** jokaista tase-erää (hankintaa) seurataan erikseen, ja hankintahinta jaetaan poistoajalle (euromäärä kuukautta kohti). Tilin asetuksissa määritellän poistoajan oletus, mutta poistoaika on määriteltävissä erikseen jokaiselle erälle (hankinnalle).

**Menojäännöspoistossa** aina tilikauden lopussa poistetaan määritelty prosenttiosuus tilin senhetkisestä saldosta. Prosentti on tilikohtainen ja määritellään kohdassa **menojäännöspoisto**.

**Poistotili** määrittää, mille menotilille vuotuiset poistot kirjataan.
