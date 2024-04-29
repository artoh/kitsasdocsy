---
title: "Verohallinnon varmenne (Tilitoimistot)"
linkTitle: "Verohallinnon varmenne"
weight: 50
keywords: ["varmenne"]
pro: true
description: >
  Kun verohallinnon varmenne on otettu käyttöön, voidaan tilitoimiston asiakkaiden arvonlisäveroilmoitukset antaa sähköisesti suoraan ohjelmasta.
---
{{% pageinfo color="primary" %}}
Nämä ohjeet koskevat tilitoimistojen varmenteita. [Ohjeet verottajan varmenteen käyttöön ottamisesta yksittäisessä kirjanpidossa]({{<relref "../alv/varmenne" >}})
{{% /pageinfo %}}


{{<alert title="Suomi.fi-valtuutus">}}

Jotta tilitoimisto voi tehdä ilmoituksia omalla varmenteellaan asiakkaittensa puolesta, edellyttää Kitsaan käyttämä rajapinta, että asiakas on myöntänyt tilitoimistolle [Suomi.fi-valtuutuksen](https://www.suomi.fi/valtuudet) **Veroasioiden hoito**

{{</alert>}}


## Varmenteen ottaminen käyttöön

### Varmenteen hankkiminen

Varmenne hankitaan [tulorekisterin sähköisestä asiointipalvelusta](https://vero.fi/tulorekisteri/). Varmenteen hakemiseen tarvitaan nimenkirjoitusoikeus.

1. Kirjaudu asiointipalveluun. Valitse **Asioi yrityksen ja organisaation puolesta** ja valitse yritys.

2. Valitse **Asetukset**, **Tekninen rajapinta ja varmenteet** ja **Tee hakemus teknisen rajapinnan käyttöönottamiseksi**. Valitse käyttötarkoitukseksi **Palkkatiedot, ilmoittaa maksamiaan palkkoja** sekä **Palkkatiedot, ilmoittaa palkkoja toisen tahon puolesta** ja kanavaksi **Palkkatiedot - Web Service**.

3. Rajapintahakemuksen lähettämisen jälkeen valitse vielä **Hae varmennetta**. Varmenteen tyyppi on **Palkkatiedon tuottaja Web Service**. Anna varmenteelle kuvaus (esim. Kitsas) ja anna yhteystiedot.

4. Saat verottajalta turvasähköpostin, josta löytyvät **Siirtotunnus** ja **Kertakäyttösalasana**.

### Varmenteen lisääminen Kitsaaseen

Vamenne lisätään tomistonäkymän asetukset-osiosta varmenne-sivulta. Kun varmennetta ei vielä lisätty näkyy siellä nappi **Lisää varmenne**.

![](/img/fi/toimisto/lisaavarmenne.png)

Kopioi verottajan turvasähköpostista siirtotunnus ja kertakäyttösalasana paikoilleen, ja paina **Hae varmenne**.

Varmenteen tilaksi tulee *Varmenteen haku kesken*. Hakeminen kestää noin minuutin, jonka jälkeen ohjelma ilmoittaa, että varmenne on noudettu, mutta se ei välttämättä ole vielä käytettävissä. Varmenne on käytettävissä yleensä seuraavana arkipäivänä.

### Valtuutuksen tarkastaminen

Varmista ensin tilitoimiston tiedoista, että tilitoimiston varmenne on käytettävissä.

Tarkasta sen jälkeen tilitoimistonäkymässä vielä asiakasyrityksen tiedot. Voit joko katsoa tilan kirjanpitojen listan varmenne-sarakkeesta tai mennä kirjanpidon tietoihin hakukentän kautta.  

![](/img/fi/toimisto/varmenneok.png)

Toimiston varmenne Käytössä
: Varmenne on käytettävissä ja valtuutus on kunnossa. Kitsas voi hakea verokaudet ja ilmoittaa arvonlisäveron.

Ei suomi.fi-valtuuksia
: Tilitoimistolla ei ole Suomi.fi-valtuutusta organisaation veroasioiden hoitoon.

Oma varmenne käytössä
: Kirjanpidossa ei käytetä tilitoimiston varmennetta, vaan kirjanpidon asetuksissa määriteltyä asiakasyrityksen omaa varmennetta.
