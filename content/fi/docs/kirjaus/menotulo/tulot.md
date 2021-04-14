---
title: "Tulokirjausten maksutavat"
linkTitle: "Tulot"
keywords: ["maksutavat"]
weight: 20
keywords:
description: >
  Maksutavalla määrittelet, miten saatte maksun tulosta.
---

- **Tulo**-tositteella kirjataan myynnit, saadut avustukset, jäsenmaksut yms.
- Jos laadit laskun Kitsaalla, kirjataan lasku automaattisesti kirjanpitoon ja siitä muodostuu **myyntilasku**.

{{<alert title="Laskun maksun saapuminen">}}

Laskuperusteisesti kirjatun laskun tai muun aiemmin kirjanpitoon kirjatun rahaerän maksun saapuminen tilille ei ole tulokirjaus vaan rahoitustapahtuma, joka kirjataan siirtona. Tulokirjaus vaikuttaa aina tuloslaskelmaan.

{{</alert>}}

#### Maksutavat

![](/img/fi/kirjaus/menotulo/maksutapavalinta.png)

Maksutapavalinta määrittelee, mitä vastatiliä kirjauksessa käytetään. Ainoastaan laskuperusteisissa kirjauksissa voidaan tallentaa myös tiedot laskun numerosta, viitteestä sekä eräpäivästä.

| Maksutapa         | Käyttötarkoitus                                                                                                                | Päivämäärä                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| Lasku             | Myyntilasku kirjataan **lasku- tai suoriteperusteisesti** myyntisaamisiin. Laskun maksu kirjataan myöhemmin erikseen.          | Laskun päivämäärä tai toimituspäivä |
| Käteinen          | Lasku kirjataan **maksuperusteisesti** käteistililtä.                                                                          | Maksupäivä                          |
| Pankkitili        | Lasku kirjantaan **maksuperusteisesti** pankkitililtä.                                                                         | Maksupäivä                          |
| Hyvityslasku      | Aiemmasta laskusta kirjattava hyvitys. Valitse kohdassa **Tase-erä** aiemman laskut tiedot ja kirjaa hyvitys miinusmerkkisenä. |  Hyvityslaskun päivämäärä           |
| Siirtosaaminen    | Käytetään, kun tulo jää tilinpäätöksessä siirtovelkoihin.                                                                      | Toimituspäivä                       |
| Kaikki vastatilit | Valitse vastatili ja tarvittaessa erä kaikkien tilien luettelosta.                                                             |
