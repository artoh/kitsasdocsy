---
title: "Käyttäjät ja oikeudet"
linkTitle: "Käyttäjät ja oikeudet"
weight: 10
pro: true
description: >
  Käyttäjien ja käyttöoikeuksien määritteleminen
---

## Ryhmä- ja käyttäjäkohtaiset oikeudet

**Ryhmäkohtaiset oikeudet** koskevat ryhmän kaikkia kirjanpitoja sekä kaikkia alaryhmiä, joille kyseiselle käyttäjälle ei ole erikseen määritelty oikeuksia. Tilitoimiston työntekijöille on suositeltavaa määritellä oikeudet ryhmätasolla, jolloin niiden hallinta on yksinkertaisempaa.

Ryhmän voisi ajatella mappikaapiksi ja ryhmäoikeuden avaimeksi tähän kaappiin. Tällöin toimistotasolle myönnetty käyttöoikeus vastaisi yleisavainta toimiston kaikkiin mappikaappeihin.

**Suorat oikeudet** ovat yksittäiseen kirjanpitoon liittyviä oikeuksia, esimerkiksi yrittäjälle itselleen tai tilintarkastajalle.

## Oikeuksien määritteleminen

Ryhmään lisätään käyttäjä **Käyttäjät**-välilehden **Uusi käyttäjä**-painikkeesta. Samalla välilehdellä on painikkeet myös oikeuksien muokkaamiselle ja käyttäjän poistamiselle ryhmästä.

**Uusi käyttäjä**-painiketta käytetään riippumatta siitä, onko käyttäjällä jo käyttäjätunnus tai oikeuksia johonkin muuhun tilitoimiston ryhmään. Jos käyttäjätunnusta ei ole vielä olemassa, lähetetään käyttäjän sähköpostiin ohjeet ja linkki käyttäjätunnuksen aktivoimiseksi.

## Käyttäjän oikeudet

![](/img/fi/toimisto/ryhmaoikeudet.png)

Käyttöoikeudet voidaan määritellä määräaikaisiksi (**Voimassa**-aikaväli) tai toistaiseksi voimassa oleviksi.

Pikavalinnalla voit määritellä oikeudet jonkun aiemmin määritellyn [pikavalinnan]({{<relref "pikavalinnat">}}) mukaiseksi.

### Kirjanpidon käyttöoikeudet

Ryhmien **Tositeet**, **Laskut**, **Laskujen kierto**, **Raportit** ja **Ylläpito** valinnat ovat [kirjanpitojen käyttöoikeuksia]({{<relref "../asetukset/kayttooikeudet/#käyttöoikeudet">}}).

Emme suosittele **Käyttöoikeuksien myöntäminen** -oikeuden käyttämistä tilitoimistoille. Valintaa tarvitaan oikeuksen hallintaan Asetukset-välilehden kautta, ja suosittelemme keskitettyä oikeuksien hallintaa **Toimisto**-välilehdellä (oikeudet **Yksittäisten käyttöoikeuksen myöntäminen** ja **Käyttäjäryhmien muokkaaminen**).

### Ryhmään liittyvät oikeudet

#### Tilitoimisto

| Käyttöoikeus | Merkitys |
|--------------|----------|
| Kirjanpidon luominen  | Uuden kirjanpidon luominen |
| Kirjanpidon siirtäminen ja poistaminen | Kirjanpitoon liittyvän tuotteen vaihtaminen, kirjanpidon siirtäminen (oikeus vaaditaan sekä nykyisessä että uudessä ryhmässä), kirjanpidon poistaminen
| Yksittäisten käyttöoikeuksen myöntäminen | Yksittäisten kirjanpitokohtaisten oikeuksien myöntäminen tilitoimistonäkymässä, Kirjanpidon **Suorat käyttäjät**-välilehdellä. |
| Tilitoimistonäkymä | Tilitoimistonäkymä ja kirjanpitojen selaaminen käyttäjälle, jolla ei ole muita tilitoimistojen  hallintaoikeuksia. |

#### Hallinta
| Käyttöoikeus | Merkitys |
|--------------|----------|
| Käyttäjäryhmien muokkaaminen | Ryhmäkohtaisten käyttöoikeuksien myöntäminen, muokkaaminen ja poistaminen |
| Ryhmien muokkaaminen | Uusien ryhmien lisääminen, ryhmien uudelleennimeäminen ja poistaminen, pikavalintojen muokkaaminen |
| Varmenteiden hallinta | Tilitoimiston varmenteen lisääminen ja poistaminen |
| Kirjautumistietojen selaaminen | Kirjanpitojen kirjautumistietojen (käyttäjän nimi, kirjautumisten lukumäärä ja viimeisin kirjaaminen) näkeminen |
| Tukikirjautuminen | Kirjautuminen Tukikirjautuminen-toiminnolla täysin oikeuksin kaikkiin ryhmän kirjanpitoihin |