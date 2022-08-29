---
title: "Yksityiskohtaiset ohjeet uuden laskun luomiseen"
linkTitle: "Yksityiskohtaiset ohjeet"
weight: 10
date: 2021-04-07
description: >
  Uuden laskun näkymän kentät yksityiskohtaisemmin selitettyinä
---

### Asiakkaan tiedot

![Asiakkaan tiedot](/img/fi/laskutus/luominen/asiakas.png)

- Voit valita asiakkaan, joka on jo asiakasrekisterissä
- Asiakkaan nimen oikealla puolella olevalla painikkeella voit lisätä uuden asiakkaan asiakasrekisteriin
- Voit myös kirjoittaa yksittäisen laskun ilman, että asiakasta lisätään asiakasluetteloon, kirjoittamalla asiakkaan nimen ja osoitteen.

### Laskun tyyppi

![Laskun tyyppi](/img/fi/laskutus/luominen/laskutyyppi.png)

Lasku
: Tavallinen lasku, joka kirjataan kirjanpitoon laskun päivämäärällä

Käteinen
: Kuitti käteismyynnistä, joka kirjataan suoraan käteiskassaan

Korttimaksu
: Kuitti korttimaksusta, joka kirjataan korttisaatavien tilille.

Ennakkolasku
: Lasku ennakkosuorituksesta, jolloin arvonlisävero suoritetaan kun lasku maksetaan.

Suoriteperusteinen lasku
: Lasku kirjantaan kirjanpitoon toimituspäivämäärällä

Kuukausittainen lasku
: Lasku toistuu samansisältöisenä kuukaudesta toiseen, tavallisesti vastike tai vuokra

### Laskun toimitustapa

![Toimitustapa](/img/fi/laskutus/luominen/toimitustapa.png)

Tulosta lasku
: Lasku tulostetaan

Postita lasku
: Jos postituspalvelu on otettu käyttöön, toimitetaan lasku postituspalveluun, muuten lasku tulostetaan.

Lähetä sähköpostilla
: Lasku lähetetään sähköpostin liitetiedostona. **Saate**-välilehdelle voit kirjoittaa sähköpostiviestin sisällön ja valita, lisätäänkö viestiin maksutiedot (summa, viitenumero, pankkitili, eräpäivä ja virtuaaliviivakoodi)

Verkkolasku
: Lasku toimitetaan verkkolaskuna

Tallenna pdf-tiedostoon
: Lasku tallenetaan pdf-tiedostona, jonka voi esimerkiksi lähettää erillisellä sähköpostiohjelmalla

Ei tulosteta
: Lasku tallennetaan kirjanpitoon ilman että sitä tulostetaan.

{{% alert color="primary" %}}
Kaikki toimitustavat eivät välttämättä ole käytettävissä. Esimerkiksi verkkolaskutus edellyttää, että verkkolaskutuksen asetuksen on tehty ja asiakkaalle on määritelty verkkolaskuosoite.
{{% /alert %}}

### Valvonta

![Valvonta](/img/fi/laskutus/luominen/valvonta.png)

Yksittäinen lasku
: Tavallinen lasku, jonka maksamista valvotaan viitenumerolla

Asiakas
: Asiakaskohtainen viite. Ohjelma seuraa asiakaskohtaisten laskujen saldoja siten, että maksu kohdistuu aina asiakkaan vanhimpaan maksuun. Tämä vaihtoehto on käytettävissä vain pilvikirjanpidossa ja näytetään, kun laskulle on valittu asikasrekisterissä oleva asiakas.

Huoneisto
: Huoneistokohtainen viite. Ohjelma seuraa huoneistokohtaisten laskujen saldon siten, että maksu kohdistuu aina vanhimpaan maksuun. Tämä vaihtoehto on käytettävissä vain pilvikirjanpidossa ja näytetään, kun huoneistoja on määritelty.

Vakioviite
: Ohjelma tiliöi vakioviittellä tulevat suoritukset erikseen määritellylle tilille. Maksun suorittamista ei valvota.

Valvomaton
: Laskua ei kirjata myyntisaataviin eikä sen maksamista valvota. Voi käyttää sellaisten laskujen tulostamiseen, jotka kirjataan vasta maksuperusteisesti.

### Arvonlisäveron merkitseminen

![](/img/fi/laskutus/luominen/verorivit.png)

Verottomat rivit
: Rivien summat ilmoitetaan verottomina, ja vero lisätään vasta kokonaissummaan. Yleinen laskentatapa yritysten välisessä laskutuksessa.

Verolliset rivit
: Rivien summat ilmoitetaan verollisina. Yleinen tapa laskutettaessa yksityishenkilöitä ja yhdistyksiä, jotka eivät vähennä arvonlisäveroa

Pitkät rivit
: Jokaiselle riville merkitään sekä veroton että verollinen rivisumma.

### Aputoiminimi

![Toiminimi](/img/fi/laskutus/luominen/toiminimi.png)

Jos asetuksissa on määritelty aputoiminimiä, voit valita tästä laskulle tulostuvan toiminimen (päätoiminimi tai jokin aputoiminimistä)


### Toimituspäivämäärä tai laskutusjakso

![Toimituspäivämäärän valinta](/img/fi/laskutus/luominen/toimituspvm.png)

Toimituspäivämäärä
: Täytä ainoastaan vasemmanpuoleinen päivämäärä

Laskutusjakso
: Täytä molemmat päivämäärät (esimerkiksi tilauksen tai vuokran laskutusjakso)

### Otsikko

Otsikko tulostetaan laskulle, ja se toimii myös tositteen otsikkona kirjanpidossa.

### Banneri

Jos [bannereita]({{<relref "../../asetukset/bannerit">}}) eli laskulle tulostuvia leveitä markkinointikuvia on käytettävissä, pääset valitsemaan valintalistasta laskulle tulostettavan bannerin.

### Laskun rivit

![Laskun rivit](/img/fi/laskutus/luominen/rivit.png)

Tuoterekisterissä olevan tuotteen voit lisätä napsauttamalla listalla olevaa tuotetta. Voit myös kirjoittaa suoraan ruudukkoon nimikkeen ja muut rivin tiedot.

Tuotteelle voi syöttää joko yksittäishinnan tai koko rivin yhteishinnan.

{{% alert color="primary" %}}
Käänteinen arvonlisävero on käytettävissä vain, kun asiakkaalle on määritelty Y-tunnus. Yhteisömyyntejä voi laskuttaa ainoastaan ei-kotimaiselta eurooppalaiselta asiakkaalta, jolla on alv-tunnus.
{{% /alert %}}

**Rivin lisätiedot**-painikkeella pääset syöttämään riville myös sellaisia tietoja, joita ei näytetä ruudukossa.

![Rivin lisätietojen välilehti](/img/fi/laskutus/luominen/rivilisatiedot.png)

### Laskun lisätiedot

![Laskun lisätietojen välilehti](/img/fi/laskutus/luominen/lisatiedot.png)

**Lisätiedot**-välilehdelle voit syöttää laskulle tulostuvia lisätietoja.

### Laskun toistuminen

![Toistuminen-välilehti](/img/fi/laskutus/luominen/toistuminen.png)
Lasku, jolla on toimitusjakso, voidaan määritellä toistumaan. Tällöin laskutuskauden päättyessä ohjelma luo automaattisesti uuden laskun. Nämä automaattisesti luodut laskut tulevat myyntilaskunäkymän _Lähtevät_-välilehdelle. Tämä ominaisuus on käytettävissä vain Kitsaan pilveen tallennetuissa kirjanpidoissa.

- **Laskutusjakso** määritellee automaattisesti luotavan uuden laskun jakson pituuden
- **Laskutus**-valinta määrittelee, kuinka monta päivää ennen tai jälkeen laskutusjakson päättymisen seuraavan laskutusjakson lasku luodaan.
- **päättyy**-päivämäärän jälkeen ei luoda enää uusi laskuja
- **Laskuta hinnaston mukaan** valinnalla tuoterekisterissä oleville tuotteille merkitään automaattisesti luotavalle laskulle luontihetkellä tuoterekisterissä oleva hinta.

{{% alert title="Toistolaskujen lopettaminen tai muuttaminen" color="primary" %}}
Voit muuttaa tositumisen asetuksia avaamalla laskun, jolle on määritelty toistuminen, muokattavaksi.
{{% /alert %}}

### Saateviesti

Kun lasku lähetetään sähköpostilla, sähköpostiviestin otsikko ja teksti. Pdf-muotoinen lasku lähetetään sähköpostiviestin liitteenä.

### Liitteet

Voit lisätä liitetiedostoja, jotka lähetetään sähköposti- ja verkolaskuissa liitetiedostoina. Verkkolaskun liitetiedostojen on oltava pdf-muodossa.
