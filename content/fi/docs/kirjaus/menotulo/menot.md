---
title: "Menokirjausten maksutavat"
linkTitle: "Menot"
keywords: ["maksutavat"]
weight: 10
keywords:
description: >
  Maksutavalla määrittelet, miten meno on maksettu.
---

- **Meno**-tositetyypille kirjataan ostolaskut, suoritetut maksut, annetut avustukset jne.
- **Kululaskuja** ovat työntekijän tai yhdistyksen jäsenen organisaation puolesta omista varoistaan suorittamat kulut, jotka hän sitten kululaskua ja tositteita vastaan perii maksettavaksi.
- **Saapunut verkkolasku**-tositetyyppi on tarkoitettu ohjelmaan vastaanotetuille verkkolaskuille

{{<alert title="Laskun maksaminen">}}

Laskuperusteisesti kirjatun laskun tai muun aiemmin kirjanpitoon kirjatun rahaerän maksaminen tililtä ei ole menokirjaus vaan rahoitustapahtuma, joka kirjataan siirtona. Menokirjaus vaikuttaa aina tuloslaskelmaan.

{{</alert>}}

#### Maksutavat

![](/img/fi/kirjaus/menotulo/maksutapavalinta.png)

Maksutapavalinta määrittelee, mitä vastatiliä kirjauksessa käytetään. Ainoastaan laskuperusteisissa kirjauksissa voidaan tallentaa myös tiedot laskun numerosta, viitteestä sekä eräpäivästä.

| Maksutapa         | Käyttötarkoitus                                                                                                                | Päivämäärä                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| Lasku             | Ostolasku kirjataan **lasku- tai suoriteperusteisesti** ostovelkoihin. Laskun maksaminen kirjataan myöhemmin erikseen.         | Laskun päivämäärä tai toimituspäivä |
| Käteinen          | Lasku kirjataan **maksuperusteisesti** käteistililtä.                                                                          | Maksupäivä                          |
| Pankkitili        | Lasku kirjataan **maksuperusteisesti** pankkitililtä.                                                                          | Maksupäivä                          |
| Luottokortti      | Lasku kirjataan luottokorttivelkojen tilille.                                                                                  | Laskun päivämäärä tai toimituspäivä |
| Hyvityslasku      | Aiemmasta laskusta kirjattava hyvitys. Valitse kohdassa **Tase-erä** aiemman laskut tiedot ja kirjaa hyvitys miinusmerkkisenä. |  Hyvityslaskun päivämäärä           |
| Siirtovelka       | Käytetään, kun meno jää tilinpäätöksessä siirtovelkoihin.                                                                      | Toimituspäivä                       |
| Kaikki vastatilit | Valitse vastatili ja tarvittaessa erä kaikkien tilien luettelosta.                                                             |
