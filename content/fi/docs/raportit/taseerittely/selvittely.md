---
title: "Tase-erien selvittely"
linkTitle: "Selvittely"
keywords: ["tase-erat"]
weight: 10
cloud: true
versio: "5.3"
vimeo:
- id: 906298061
  title: Tase-erät ja tase-erien selvittely  
description: >
  Tase-erien tutkiminen sekä korjaaminen
--- 

[Tase-erittelyn](../../taseerittely) **Tase-erien selvitys** -painikkeella avautuu työkalu, jolla voi tutkia tarkemmin ja muokata tase-eriä:

![](/img/fi/raportit/selvittely.png)

Vasemmanpuoleisimmassa sarakkeessa näkyvät tilit, niiden saldot erittelykauden lopussa sekä muutos kauden aikana.

- Punainen pallo merkitsee **tiliöimättömiä tositteita**
- Keltainen pallo ilmaisee tilit, joilla käytetään tase-eriä, mutta joilla on **erittelemättömiä vientejä**
- Vihreä pallo ilmaisee, että kaikki viennit on kohdistettu tase-erille
- Harmaa pallo tarkoittaa tiliä, jolla tase-erittely ei ole käytössä (esimerkiksi pankkitili)

Tilin valittuasi tulee keskimmäiseen sarakkeeseen kyseisen tilin tase-erät. Tase-erän valitsemalla näytetään oikeanpuoleisimmassa sarakkeessa viennit, joista tase-erä koostuu.

Yläpalkin **Nollatut**-painikkeella pääset tarkastelemaan niitä tase-eriä, joilla ei ole avointa saldoa (esimerkiksi maksettuja laskuja). 


{{<alert>}}

Isolla näytöllä työskenneltäessä tehokkain tapa työskennellä on avata vierekkäin tase-erittely sekä selvittelytyökalu.

Selvittelyn jälkeen minkään tilin kohdalla ei pitäisi enää olla punaista tai keltaista merkkiä.
{{</alert>}}


### Toiminnot

#### Näytä tosite

Avaa tositteen, johon valittu vienti kuuluu. Jos kirjauksen tiliöintiä tarvitsee vaihtaa, avaa tosite ja muokkaa sitä.

#### Uusi erä

Muodostaa valituista vienneistä uuden erän.

![](/img/fi/raportit/selvittely_uusiera.png)

Tässä tilanteessa myyntisaamisiin on kirjattu sekä lasku että sen maksusuoritus ilman tase-erää. Valitsemalla nämä kaksi vientiä ja painamalla **Uusi erä** muodostetaan näistä vienneistä oma eränsä, jolla ei ole avointa saldoa.

#### Siirrä erään

Siirtää valitut viennit toiseen saman tilin tase-erään.

#### Nollaustosite

Muodostaa Muu-tyyppisen tositteeen, jolle on valmiiksi kirjattu tase-erän (tai valittujen vientien määrän) saldon nollaamiseen tarvittavat kirjaukset. Toiseen vientiin on vielä täydennettävä mm. tili, jolle erä nollataan.

Toimintoa voi käyttää esimerkiksi selvittelytilille joutuneen erän käsittelyyn tai luottotappion kirjaamiseen. Nollaustositteen voi muodostaa myös erälle, joka on syntynyt jo lukitulla tilikaudella ja jota ei sen takia voi enää muokata.

#### Erittelemättömiin

Poistaa valittujen vientien tase-erätiedot, jolloin ne siirtyvät erittelemättömiin vienteihin.

#### Uudelleennimeä

Muokkaa tase-erän muodostavan viennin selitettä. Tase-erän nimenä tase-erittelyssä käytetään sen aloittavan viennin selitettä, joten tällä toiminnolla voi kirjoittaa paremmin erää kuvaavan selitetekstin tase-erittelyä varten.


