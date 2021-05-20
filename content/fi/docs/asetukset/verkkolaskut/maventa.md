---
title: "Maventan verkkolasku"
linkTitle: "Maventa"
weight: 20
description: >
  Maventan verkkolaskut voi lähettää ja ottaa vastaan suoraan ohjelmasta
premium: true
keywords: ["maventa"]
---

Kitsaassa on integroitu yhteys [Maventan](https://maventa.com) verkkolaskutukseen. Kun Maventa-verkkolasku on otettu käyttöön, laskuttaa Maventa sekä lähetetyistä että vastaanotetuista verkkolaskuista hinnastonsa mukaisesti.

Luo ensin [Maventa-tili](https://secure.maventa.com/registrations).

Kitsaan verkkolaskuasetusten **Määritä**-painikkeella pääset syöttämään API-avaimen ja yrityksen UUID-tunnukset, jotka löydät Maventan asetuksista.

![](/img/fi/asetukset/verkkolaskut/maventaruutu.png)

### Verkkolaskujen lähettäminen

!!! note "Kirjautuminen vaaditaan"
Sekä laskujen lähettäminen että vastaanottaminen onnistuu vain, jos olet kirjautuneena Kitsaaseen käyttäjätunnuksillasi

Kun laskutuksessa lähetät verkkolaskun, lähetetään se välittömästi Maventan kautta eteenpäin.

### Verkkolaskujen vastaanottaminen

Verkkolaskujen noutaminen otetaan käyttöön **Nouda saapuneet laskut**-valinnalla.

Omalle koneelle tallennetuissa kirjanpidoissa saapuneet laskut haetaan ohjelman käynnistyessä. Voit hakea laskut myös verkkolaskuasetusten **Nouda nyt**-painikkeella. Laskut löytyvät **Selaa**-sivun **Saapuneet**-välilehdeltä. Noudetut laskut eivät näy kirjanpidossa ennen kuin ne tallennetaan **Valmis**-painikkeella

Pilveen tallennetussa kirjanpidossa saapuneet laskut saapuvat kirjanpitoon automaattisesti. Laskuluettelossa näet kuvakkeen muuttumisesta myös sen, kun lasku on lähetetty tai kun laskun toimittaminen on epäonnistunut.

Kitsaassa ei toistaiseksi ole suoraa pankkiyhteyttä, vaan sinun on huolehdittava saapuneiden laskujen maksusta esimerkiksi verkkopankkia käyttäen.

### Laskujen postituspalvelu

Kun **Paperilaskujen postitus Maventan kautta** on valittuna, toimitetaan laskuja lähetettäessä ne laskut, joiden toimitustapana on **Postitus**, Maventan tulostuspalveluun. Maventa veloittaa laskujen tulostamisesta oman hinnastonsa mukaan.

Kitsaan toteutuksesta johtuen voit toistaiseksi lähettää postutuspalvelulla laskuja vain kotimaisiin osoitteisiin.
