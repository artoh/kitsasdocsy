---
title: "Maventan verkkolasku"
linkTitle: "Maventa"
weight: 20
description: >
  Maventan verkkolaskut voi lähettää ja ottaa vastaan suoraan ohjelmasta
premium: true
keywords: ["maventa"]
---

![](/img/fi/asetukset/verkkolaskut/valmiina.png)

Kitsaassa on integroitu yhteys [Maventan](https://maventa.com) verkkolaskutukseen. Kun Maventan verkkolaskutus on valittuna, pääset muuttamaan **Asetukset**-painikkeella verkkolaskutuksen valintoja.

### Avaimet ja laskutus

![](/img/fi/asetukset/verkkolaskut/maventa1.png)

**API-avain** ja **Yrityksen UUID** löytyvät Maventan asetuksista. Jos olet ottanut verkkolaskutuksen käyttöön Kitsaan kautta, on nämä avaimet haettu automaattisesti eikä niitä voi muuttaa. Voit tarvita avaimia, jos otat myöhemmin verkkolaskutuksen käyttöön jossain toisessa sovelluksessa.

![](/img/fi/asetukset/verkkolaskut/maventaruutu.png)

Sekä lähetetyistä että vastaanotetuista verkkolaskuista veloitetaan kappalemäärän mukaisesti. Jos olet syöttänyt avaimet itse ohjelmistoon, noudatetaan oletuksena Maventan hinnastoa ja Maventa myös lähettää suoraan laskut verkkolaskupalvelun käyttämisestä.

**Nouda saapuneet verkkolaskut automaattisesti** noutaa pilveen tallennetuissa kirjanpidoissa verkkolaskut välittömästi niiden saapuessa. Paikallisessa kirjanpidossa laskut noudetaan, kun kirjanpito on avattu.

Jos haluat lopettaa verkkolaskujen vastaanoton Kitsaaseen, poista tämä valinta.

### Sähköposti-ilmoitukset

![](/img/fi/asetukset/verkkolaskut/maventa2.png)

Valitse, haluatko sähköposti-ilmoitukset saapuneista laskuista sekä mahdollisista laskujen lähetyksessä sattuneista virheellisyyksistä. Jos olet määritellyt Saapuneiden verkkolaskujen [kiertoon]({{<relref "../kierto">}}) sähköposti-ilmoituksia, lähettää Kitsas ne joka tapauksessa tästä valinnasta riippumatta.


### Paperilaskujen postitus

![](/img/fi/asetukset/verkkolaskut/maventa3.png)

Postitettavien laskujen tulostuspalvelussa huolehtii verkkolaskuoperaattori niiden laskujen tulostamisesta ja postittamisesta, joiden toimitustavaksi valitaan **Postitus**. Palvelusta veloitetaan hinnaston mukaiset maksut.

Toiminto on käytössä vain, jos sekä **Tulostus- ja postituspalvelu käytössä** että **Toimita postitettavaksi valitut laskut postituspalvelua käyttäen** ovat valittuina. Voit valita kirjeiden postitusluokan sekä värillisyyden.

Jos **Liitä oma laskunkuva** ei ole valittuna, postitetaan laskut Maventan laskupohjalla. Kun käytät omaa, Kitsaan muodostamaa laskun kuvaa, lisätään osoitteen tulostamista varten ylimääräinen, lisämaksullinen sivu.

### Verkkolaskujen lähettäminen

{{<alert title="Kirjautuminen vaaditaan">}}
Sekä laskujen lähettäminen että vastaanottaminen onnistuu vain, jos olet kirjautuneena Kitsaaseen käyttäjätunnuksillasi.
{{</alert>}}

Kun laskutuksessa lähetät verkkolaskun, lähetetään se välittömästi Maventan kautta eteenpäin.

### Verkkolaskujen vastaanottaminen

Verkkolaskujen noutaminen otetaan käyttöön **Nouda saapuneet laskut**-valinnalla.

Omalle koneelle tallennetuissa kirjanpidoissa saapuneet laskut haetaan ohjelman käynnistyessä. Voit hakea laskut myös verkkolaskuasetusten **Nouda nyt**-painikkeella. Laskut löytyvät **Selaa**-sivun **Saapuneet**-välilehdeltä. Noudetut laskut eivät näy kirjanpidossa ennen kuin ne tallennetaan **Valmis**-painikkeella

Pilveen tallennetussa kirjanpidossa saapuneet laskut saapuvat kirjanpitoon automaattisesti. Laskuluettelossa näet kuvakkeen muuttumisesta myös sen, kun lasku on lähetetty tai kun laskun toimittaminen on epäonnistunut.

Kitsaassa ei toistaiseksi ole suoraa pankkiyhteyttä, vaan sinun on huolehdittava saapuneiden laskujen maksusta esimerkiksi verkkopankkia käyttäen.
