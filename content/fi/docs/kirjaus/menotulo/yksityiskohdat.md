---
title: "Menojen ja tulojen yksityiskohtaisemmat ohjeet"
linkTitle: "Yksityiskohtaiset ohjeet"
weight: 90
description: >
  Menojen ja tulokirjausten näkymän kentät yksityiskohtaisemmin selostettuina
keywords: ["kohdennus", "jaksotus"]
---

#### Asiakas / Toimittaja

![](/img/fi/kirjaus/menotulo/toimittajarivi.png)

Jos asiakas/toimittaja on jo Kitsaan rekisterissä, voit valita sen alasvetovalikosta. Voit myös kirjoittaa nimen tai Y-tunnuksen. Nimikentän vieressä olevasta kuvakkeesta pääset muokkaamaan tietoja.

!!! info "Asiakas- ja toimittajarekisteri"
Kitsas käyttää yhdistettyä asiakas- ja toimittajarekisteriä, jossa on sekä asiakkaiden että toimittajien tiedot. Tämän takia myös toimittajien tiedoissa on paikka laskutustavalle ja -kielelle. Osakeyhtiöille Kitsas hakee perustiedot Yritys- ja yhteisötietojärjestelmästä Y-tunnuksen perusteella.

#### Kirjanpitotilin valitseminen

![](/img/fi/kirjaus/menotulo/tilirivi.png)

Voit valita tilin kirjoittamalla tilin numeron (tai osan siitä). Vaihtoehtoisesti voit kirjoittaa osan tilin nimestä, jolloin pääset valitsemaan tilin luetteloikkunasta. Ikkunaan pääset myös painamalla kiikarikuvaketta.

![](/img/fi/kirjaus/menotulo/tilinvalinta.png)

**Suosikit**-painikkeella näet vain suosikiksi merkitsemäsi tilit, ja **Kaikki**-painikkeella myös ne tilit, jotka eivät tavallisesti ole käytettävissä valitsemallasi tilikartan laajuudella.

#### Arvonlisävero

![](/img/fi/kirjaus/menotulo/alv.png)

Käytössä olevat alv-lajit on esitelty kappaleessa [Arvonlisäverolajit]({{<relref "../../alv/alvlajit">}})
Verollisessa kirjauksessa voit syöttää kokonaismäärän (brutto) tai verottoman määrän (netto).

#### Jaksotus

![](/img/fi/kirjaus/menotulo/jaksotusrivi.png)

Jaksotuksella voit tehdä kirjauksia, jotka kuuluu jaksottaa tilinpäätöksen yhteydessä tilikaudelta toiselle. Jaksotuskirjaukset tehdään vasta tilinpäätöksen yhteydessä, joten niitä ei ole huomioitu kesken tilikauden tulostettavassa tuloslaskelmassa tai taseessa.

Jaksotustoiminnolla jaksotetaan vain veroton tulo tai meno, ei arvonlisäveron osuutta.

!!! note "Esimerkkitilanteita, kun tilikausi on kalenterivuosi" - Jäsen maksaa vuoden 2020 jäsenmaksun 10.11.2019. - Yhdistykselle on myönnetty avustusta 1.11.2019 järjestettyyn tapahtumaan. Avustus maksetaan 7.1.2020. - Ohjelmistoyritys laskuttaa 15.9.2019 ohjelmiston ylläpitomaksun kaudelle 1.7.2019 - 30.6.2020. - Kirjausesimerkkejä jaksotuksesta [Tilinpäätös-osan jaksotusohjeessa]({{<relref "../../tilikaudet/tilinpaatos/jaksotukset">}})

#### Kohdennukset

![](/img/fi/kirjaus/menotulo/kohdennusrivit.png)

Jos kirjanpidossa on käytössä kohdennukset tai merkkaukset, pääset valitsemaan ne valintalistoilta.

#### Poistot

![](/img/fi/kirjaus/menotulo/poistoaika.png)

Jos kirjaat tasaeräpoistoina käsiteltävän hankinnan, pääset valitsemaan hankinnan poistoajan. Kitsas laskee vuotuiset poistot tilinpäätöstä laadittaessa.

#### Kirjauksen jakaminen useampaan vientiin

Tositteen kirjaukset on mahdollista jakaa useammalle tilille, kohdennukselle, verolajille tai veroprosentille. Aloita tekemällä ensimmäinen vienti ja paina **Lisää rivi**. Nyt näkymän oikeassa reunassa on riveistä luettelo, josta voit valita muokattavan rivin.

**Riviselite** tarkoittaa yksittäistä riviä koskevaa selitettä. Ellei riviselitettä ole merkitty, käytetään tositteen otsikkoa myös vientien selitteenä.

#### Viennit

Voit tarkastella tositteelta muodostettavia kirjanpitokirjausia **Viennit**-välilehdeltä. Et voi kuitenkaan suoraan muokata vientejä. Jos sinun tarvitsee muodostaa monimutkaisempia kirjauksia (esimerkiksi useampi vastatili), pitää kirjaus tehdä käsin tositetyypillä **Muu**.
