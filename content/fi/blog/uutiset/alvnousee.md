---
title: "Alv-prosentin muutos"
weight: 10
date: "2024-05-30"
keywords: ["alv"]
description: "Ohjeita alv-kannan noustessa"
author: "Arto"
banner: "img/banners/percent.jpg"
---

## Kitsas on valmiina arvonlisäveron korotukseen

Olemme saaneet valmiiksi arvonlisäveron korotuksen vaatimat muutokset Kitsaaseen. Muutokset sisältyvät Kitsaan versioon 5.6. Tämä versio on jo saatavilla Windowsille ja Linuxille osoitteesta [kitsas.fi/lataa](/lataa). Macille on ladattavissa 
[beta-versio](/blog/2024/06/17/kitsas-5.6-beta/).

**Arvonlisäveron muutos edellyttää useimmilta käyttäjiltä ohjelmiston uuden version lataamista ja asentamista.**

Verottaja on antanut [täydentäviä ohjeita](https://www.vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/arvonlisaverotus/arvonlisaveroprosentit/Yleinen-arvonlisaverokanta-nousee-syyskuussa/) yleisen arvonlisäverokannan muutoksesta ja arvonlisäverojen ilmoittamisesta. 

<hr/>

## Yleinen arvonlisävero nousee


Yleinen arvonlisävero nousee 25,5 prosentiin syyskuun alusta.

Kitsaan tietokanta ja kirjausnäkymät sallivat jo aiemmissa versioissa desimaaliluvun käyttämisen arvonlisäveroprosenttina.

<img src="/img/screenshots/alv255lasku.png" class="img-responsive"/>

<a href="https://vero.fi/tietoa-verohallinnosta/uutishuone/lehdist%C3%B6tiedotteet/2024/yleinen-arvonlis%C3%A4verokanta-nousee-syyskuussa--veron-m%C3%A4%C3%A4r%C3%A4n-ratkaisee-se-milloin-palvelu-on-suoritettu-tai-tavara-toimitettu-asiakkaalle/" target="_blank">Verohallinnon ohjeen</a> mukaan suoritusajankohta ratkaisee, milloin korotettua arvonlisäverokantaa sovelletaan. Niinpä syyskuussa kirjanpitäjän on syytä olla erityisen tarkkana: elokuussa toimitetut tavarat ja palvelut laskutetaan 24 %:n arvonlisäverokannalla ja syyskuussa toimitetut 25,5 %:n arvonlisäverokannalla.

<img src="/img/screenshots/alv255lasku.png" class="img-responsive"/>

Kitsaassa arvonlisäveroja käsitellään ohjaustietojen perusteella, joten verokantojen muuttuminen ei edellytä uusien tilien perustamista. Tilikartassa olevia arvonlisäverokantoja ei myöskään tarvitse muokata. Ohjelma huomioi kirjauksen päivämäärän ja toimituspäivämäärän ehdottaessaan kirjaukselle joko 24 tai 25,5 %:n arvonlisäveroa.

Laskutuksen tuoterekisteriin tallennetut hinnat ovat nettohintoja, joten arvonlisäveron korotus vaikuttaa suoraan näiden tuotteiden bruttohintoihin tuottetta laskulle lisättäessä.

Arvonlisäveroilmoituksen voi tehdä Kitsaasta tuttuun tapaan sähköisesti suoraan verottajan järjestelmään. 24 ja 25,5 prosentin arvonlisäverot ilmoitetaan verottajan ohjeen mukaisesti yhtenä lukuna.

<img src="/img/screenshots/alvilmo.png" class="img-responsive"/>

**Muutokset vaativat Kitsaan työpöytäohjelmiston päivittämisen**. Kitsaan versio 5.6 on [nyt ladattavissa](/lataa)

*Päivitetty 7.8.2024*