---
title: "eTasku"
linkTitle: "eTasku"
weight: 40
addonPrice: "1,00"
description: >
  Kuittien ja matkalaskujen noutaminen eTaskusta
---

![](/img/fi/lisaosa/etasku/tasku.png)

Lisäosalla saat noudettua tositteita ja matkalaskuja eTaskusta. Myös tositteisiin liitetyt kuvatiedostot sekä tiliöinnit ja kohdennukset siirtyvät kirjanpitoon.

Lisäosa on tarkoitettu käytettäväksi siten, että kuittien käsittely ja tiliöinnit tehdään eTaskun puolella esimerkiksi kuukauden osalta mahdollisimman valmiiksi, ja valmis aineisto tuodaan sitten kerralla Kitsaaseen.

**Lisäosaa kehitetään edelleen, ja siinä voi olla vielä puutteita. Tarkasta aineisto huolellisesti.**

## eTaskun yhdistäminen

Yhdistämistä varten tarvitset eTaskussa luotavan yrityskohtaisen autentikointiavaimen.

1. Mene eTaskussa kohtaan **Asiakasasetukset** > **Ohjelmistointegraatiot**
2. Etsi ja valitse luettelosta **Kitsas**
3. Valitse **Aktivoi**
4. Näyttöön tulee autentikointiavain. Kopioi avain (voit joutua maalaamaan sen ensin hiirellä ja valitsemaan **Kopoi**) ja liitä se Kitsaan eTasku-lisäosan kohtaan **Liitosavain**

![](/img/fi/lisaosa/etasku/yhdista.png)


## Tilikartan ja kohdennusten vieminen

Ennen eTaskussa tehtävää tiliöintiä voit viedä Kitsaasta tilikartan ja kohdennukset eTaskuun painikkeista **Vie tilikartta** ja **Vie kohdennukset**.

eTaskun puolella on hyvä tarkastaa myös maksutapoihin liittyvät tilit kohdasta **Asiakasasetukset** > **Maksutavat ja vastatilit**.


## Aineiston noutaminen

Valmis aineisto noudetaan Kitsaan eTasku-lisäosalla 

- Valitse noudettavan aineisto aikaväli 
- Valitse, noudetaanko sekä tositteet ja matkalaskut
. Valitse, noudetaanko vain hyväksytyiksi merkityt tositteet 

Kun valitset **Tuo**, muodostetaan jokaisesta eTaskun tositteesta oma Tuonti-tyypin tosite kirjanpitoon.

{{<alert title="Käsittele aineisto valmiiksi eTaskussa">}}
eTaskusta noudetaan aina kaikki valintoihin sopivat tositteet - myös ne, jotka on jo aiemmin noudettu Kitsaaseen. Pyri käsittelemään aineisto valmiiksi eTaskussa, ja tuo valmis aineisto yhdellä kertaa kirjanpidoon.
{{</alert>}}

Löydät noudetut aineistot Kitsaasta **Selaa**-välilehdestä. Voit muokata aineistoa vielä Kitsaan puolella.

### Tulotositteet

Jos haluat tuoda eTaskusta tulotositteita (esim. kassan myyntiraportti), kirjaa eTaskussa rahamäärä miinusmerkkisenä.


### Tilitapahtumien kooste 

Jos haluat tuoda eTaskusta tilitapahtumien koosteen, luo Kitsaassa uusi tosite johon lisäät pdf-koosteen liitteeksi. Kitsas pyrkii tunnistamaan koosteesta tilitapahtumat automaattisesti. Tuo tilitapahtumat vasta sen jälkeen, kun kaikki muut tositteet on jo tuotu kirjanpitoon.

