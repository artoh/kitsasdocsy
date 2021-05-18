---
title: "Maksuperusteinen arvonlisävero"
linkTitle: "Maksuperusteinen ALV"
weight: 60
description: >
  Pienet yritykset voivat tilittää arvonlisäverot maksuperusteisesti.
---

Pienyritykset (liikevaihto alle 500 000 euroa vuodessa) voivat tilittää ostojen ja myyntien arvonlisäverot maksuperusteisesti. Kitsaalla tämä on mahdollista myös niin, että kirjanpito pidetään suoriteperusteisena, katso [Verohallinnon ohje maksuperusteisesta arvonlisäverosta](https://www.vero.fi/yritykset-ja-yhteisot/tietoa-yritysverotuksesta/arvonlisaverotus/pienyritykset_voivat_tilittaa_arvonlisa/).

![](/img/fi/alv/maksuperusteinen.png)

Kun yritys saa myyntilaskun, kirjataan arvonlisäveron osuus tilille **Maksuperusteinen alv-velka**. Kun arvonlisäverosta saadaan maksu, siirretään veron osuus tilille **Arvonlisäverovelka** ja vasta nyt vero tulee näkyviin alv-tilitykseen.

Vastaavalla tavalla ostolaskun veron osuus kirjataan ensin tilille **Maksuperusteinen alv-saaminen** ja vasta kun lasku on maksettu, se siirtyy tilille **Arvonlisäverosaatavat**.

Jos teet kirjauksen maksuperusteisesti pankki- tai käteistililtä, ei tällaista erityismenettelyä tarvita.

Arvonlisävero on kuitenkin maksettava viimeistään vuoden kuluttua suoritepäivästä.

Kun verolajina on maksuperusteinen arvonlisävero, käsittelee Kitsas sen automaattisesti laskutuksessa, Tulo- ja Meno-tyyppisissä tositteissa sekä maksettaessa laskuja Siirto-tositteella tai Tiliote-tositteen laskujenmaksutoiminnolla. Käsittely perustuu ohjaustietoihin ja alv-koodeihin.

{{<alert title="Älä kirjaa käsin maksuperusteisen arvonlisäveron eriä" color="danger">}}
Maksuperusteinen arvonlisävero edellyttää erityiskäsittelyä siinä vaiheessa, kun lasku- tai suoritusperusteisesti kirjattu erä maksetaan.
{{</alert>}}

{{<alert title="Ei kaikkia toimintoja">}}
Maksuperusteisen arvonlisäveron käyttäminen rajoittaa käytössäsi olevia Kitsaan toimintoja, koska kaikkia ominaisuuksia ei ole toteutettu maksuperusteisen arvonlisäveron mukaisesti.
{{</alert>}}

Maksuperusteinen arvonlisävero otetaan käyttöön Arvonlisäveron määrityksistä **Maksuperusteinen alv**-rivillä olevasta rataspainikkeesta, josta aukeaa valintaikkuna:

![](/img/fi/alv/malvikkuna.png)

**Maksuperusteinen arvonlisäverotus alkaa**-ruutuun kirjataan sen verokauden ensimmäinen päivä, jonka arvonlisävero tilitetään maksuperusteisena.

Jos maksuperusteisesta arvonlisäverotuksesta siirrytään takaisin suoriteperusteiseen, merkitään **Suoriteperusteiseen arvonlisäveroon palataan**-ruutuun sen verokauden ensimmäinen päivä, jolloin arvonlisävero tilitetään normaalilla tavalla. Tässä alv-tilityksessä maksetaan myös kaikki vielä maksamatta oleva maksuperusteinen arvonlisävero.

{{<alert title="Tutustu huolella verohallinnon ohjeisiin" color="danger">}}
Ennen maksuperusteiseen arvonlisäverotukseen siirtymistä tutustu huolella verohallinnon ohjeisiin. Huomaa, että myös alv-vähennykset tilitetään maksuperusteisesti (myös osamaksua käytettäessä).
{{</alert>}}

Maksuperusteista arvonlisäveroa käytettäessä et voi käyttää Kitsaassa automaattista **marginaaliverotusmenettelyä**, vaan voittomarginaali on kirjattava käsin.

{{<alert title="Alarajahuojennuslaskelman tarkastaminen" color="danger">}}
Maksuperusteisessa arvonlisäverossa myös alarajahuojennukseen oikeuttava liikevaihto lasketaan maksuperusteisesti. Tarkasta alarajahuojennuslaskelma huolellisesti.
{{</alert>}}
