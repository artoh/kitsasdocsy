---
title: "Maksaminen Kitsas Prolla"
linkTitle: "Maksaminen"
weight: 20
description: >
  Maksaminen Kitsas Prolla
---

### Tarvittavat käyttöoikeudet

* **Uusien maksujen luonti** onnistuu, kun käyttäjältä löytyy oikeus _Maksettavaksi merkitseminen_
* **Maksut -lisäosa**-näkymään pääsy, vaatii käyttäjältä oikeuden _lisäosien toiminnallisuudet_
* **Maksun vahvistamiseen ja vahvistamista odottavien maksujen listaukseen** päästäkseen, tulee käyttäjältä löytyä oikeus _maksulista_ sekä helpdeskin tulee olla asettanut käyttäjä maksujen vahvistajaksi. 

Yllä listatut, tarvittavat toimintokohtaiset oikeudet ovat oletuksena _kirjanpitäjä_-roolissa (pl. erillinen maksun vahvistaja -oikeus)

**Maksujen vahvistamisen oikeuksia hallitaan Kitsaan helpdeskin toimesta** ja oikeudet myönnetään vain Maksujen vahvistamisen [valtakirjaan](/files/Kitsas_pro_valtakirja_maksujen_vahvistamiseen.docx) määritellyille henkilöille.

Maksun vahvistaminen edellyttää, että käyttäjällä on käytössään **kaksivaiheinen tunnistautuminen**.

### Uuden maksun muodostaminen

_Tarkistathan, että käytössäsi on Kitsaan versio 5.10 tai uudempi._

Tositteelle voidaan muodostaa **Uusi maksu** tositteen _Maksatus_-välilehdeltä, painamalla _Uusi maksu_ -painiketta.

![](/img/fi/lisaosa/maksut/maksut1.png)

**Määritä avautuvaan ikkunaan:**
* Maksun saajan tili (IBAN)
* Maksun saajan nimi
* Maksupäivä
* Maksun määrä
* Viite / Viesti

Kun maksu on muodostettu, näkyy maksu _Maksatus_-välilehdellä _Vahvistamatta_-tilassa.

![](/img/fi/lisaosa/maksut/maksut2.png)

### Maksun vahvistaminen

Muodostettujen maksujen vahvistaminen tapahtuu _Kitsas Pro Maksut_ -lisäosan kautta. 

![](/img/fi/lisaosa/maksut/maksut3.png)

Lisäosan _Maksujen vahvistaminen_ -välilehdeltä valitaan vahvistettavat maksut sekä pankkitili, jolta maksut tehdään. 

**Vahvista** -painikkeen painamisen jälkeen, saat vahvistamisen käyttöoikeuksiin määritettyyn puhelinnumeroon tekstiviestin. 

![](/img/fi/lisaosa/maksut/maksut4.png)

Tarkista, että viestissä näkyvä **Tarkistetunnus** vastaa ohjelman tunnusta. Lisää **Vahvistuskoodi** ja paina _Vahvista_ -painiketta. 

![](/img/fi/lisaosa/maksut/maksut5.png)

Vahvistetut maksut löydät **Maksujen seuranta** -välilehdeltä.

![](/img/fi/lisaosa/maksut/maksut6.png)

### Maksupalautteiden aikataulu

Lisäosan _Maksujen seuranta_-välilehdeltä näet maksujen tilan. Maksujen tila päivittyy pankilta saatujen maksupalautteiden mukaisesti. 

**Maksupalautteiden aikataulu:**<br/>
Kitsas noutaa maksupalautteet arkisin, klo 8-18 välillä, joka toinen tunti (15 min yli tasatunnin).

### Vahvistetun maksun peruuttaminen

Kun Kitsaassa muodostettu maksuaineisto on vahvistetaan, se lähetetään viiveettä myös pankkiin. 

**Mikäli pankkiin lähetetty maksuaineisto täytyy peruuttaa**, ota yhetyttä pankkiin ja pyydä maksun peruutusta. Kitsas saa pankilta tiedon peruutetusta maksusta ja päivitää maksujen seuranta-välilehdelle maksun tilan _peruutettu_-tilaan

_Huomioithan, että mikäli maksun eräpäivä on sama, kuin maksatuspäivä, ei aineistoa välttämättä ehditä peruuttamaan myöskään pankin toimesta_
