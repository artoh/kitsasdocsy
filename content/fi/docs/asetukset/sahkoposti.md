---
title: "Sähköpostin lähettäminen"
linkTitle: "Sähköpostin lähettäminen"
weight: 130
description: >
  Laskujen sähköpostilla lähettämisen asetukset
---

![](/img/fi/asetukset/email.png)

Kitsaalla on mahdollista lähettää laskut suoraan sähköpostiin. Jos tätä toimintoa haluaa käyttää, on ohjelmassa määritettävä sähköpostin asetukset.

### Sähköpostiasetusten tallennus

#### Tietokoneen asetuksiin

Sähköpostipalvelimen asetukset ovat tietokonekohtaisia, eli samoja asetuksia käytetään kaikilla kirjanpidoilla.

#### Kirjanpitokohtaisesti

Sähköpostipalvelimen asetukset ovat kirjanpitokohtaisia. Jos kirjanpidolla on useampia käyttäjiä, käyttävät he kaikki samoja asetuksia.

#### Lähetä Kitsaan palvelimen kautta

<div class="cloud-only">
  <i class="fa fa-cloud"></i> Ominaisuus on käytettävissä vain, kun kirjanpito on tallennettu Kitsaan pilveen
</div>

Sähköpostit lähetetään Kitsaan palvelimen kautta. Sinun ei tarvitse määritellä itse palvelimen asetuksia.

### Smtp-palvelin

- **Palvelin**: Lähtevän sähköpostin palvelimen osoite, löytyy sähköpostin tai internetyhteyden ohjeista.
- **Portti**: Lähtevän sähköpostin portti palvelimella
  - **Suojaamaton yhteys (TCP)**: Viestisi liikkuu täysin salaamattomana, sallittu yleensä vain oman yhtydentarjoajan palvelimelle. Portti 25.
  - **Salattu yhteys (SSL)**: Viestisi salataan. Portti yleensä 465.
  - **Suojattu yhteys (STARTTLS)**: Lähtevään sähköpostipalvelimeen muodostetaan suojattu yhteys. Portti yleensä 587. Suositellaan aina mikäli käytettävissä.
- **Käyttäjänimi**: Käyttäjänimi palvelimella palveluntarjoajan vaatimassa muodossa
- **Salasana**: Sähköpostin salasana. Jos Gmailissa käytetään kaksivaiheista varmennusta, tähän syötetään [sovellussalasana](https://myaccount.google.com/apppasswords).

Kun olet syöttänyt asetukset, paina **Kokeile**-painiketta, joka yrittää lähettää sähköpostin omaan osoitteeseesi. Jos lähetys epäonnistuu, saat siitä ilmoituksen

![](/img/fi/asetukset/emailvirhe.png)

Tässä tapauksessa käyttäjätunnus tai salasana on väärin.

### Viestin lähettäjä

- **Viestin lähettäjän nimi ja osoite**: Viesteissä näkyvät tiedot. Jotkut sähköpostipalvelut vaativat kyseisen palvelun sähköpostiosoitteen käyttämistä.
- **Laskukopiot osoitteeseen**: Kaikista lähetettävistä laskuista lähetetään kopio myös määrittelemääsi osoitteeseen.
