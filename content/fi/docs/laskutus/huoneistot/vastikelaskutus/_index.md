---
title: "Vastikkeiden tai vuokrien laskutus"
linkTitle: "Vastikelaskutus"
weight: 20
cloud: true
description: >
  Kuukausittaisten toistuvien huoneistokohtaisten laskujen luominen
---

#### Tuotteiden lisääminen

Lisää ensin vastike/vuokra, vesimaksu yms. laskutettavat maksut [tuoterekisteriin]({{<relref "../../tuotteet">}}).

![Vastike tuoterekisterissa](tuote.png">)

#### Huoneistojen tiedot

Lisää ohjelmaan [huoneistot]({{<relref "../muokkaus">}}) ja huoneistoille asukkaat sekä kuukausittain laskutettavat maksut.

![Huoneiston muokkaus](../muokkaus/muokkaus.png)

#### Laskujen muodostaminen

Valitse huoneistoluettelosta huoneistot, joita laskutat, ja paina **Laskuta**-painiketta.

![Vastikelaskutus](laskuta.png)

Valitse **Laskutusjakso** sekä **kuukausittainen eräpäivä** ja täydennä laskulle tulostuvat tiedot. Kun valitset **OK**, laskut muodostetaan **Myynnit** / **Lähtevät** -välilehdelle. Voit vielä muokata yksittäisiä laskuja ennen kuin lähetät ne.

#### Laskujen lähettäminen

Valitse lähetettävät laskut **Lähtevät**-välilehdellä ja paina **Lähetä**.

#### Vastikelaskun malli

![Esimerkki vastikelaskusta](vastike_lasku.png)

{{% alert title="Yksittäiset laskut" color="primary" %}}
Voit kohdistaa huoneistoihin myös yksittäisiä laskuja valitsemalla laskulle [valvonnaksi]({{<relref "../..//luominen/yksityiskohdat#valvonta">}}) **Huoneisto**.
{{% /alert %}}
