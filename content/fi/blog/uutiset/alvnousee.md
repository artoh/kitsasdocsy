---
title: "Alv-prosentin muutos"
date: "2024-05-30"
keywords: ["alv"]
description: "Kitsas on valmiina arvonlisäveron korotukseen"
author: "Arto"
banner: "img/banners/percent.jpg"
---

## Kitsas on valmiina arvonlisäveron korotukseen

Olemme saaneet valmiiksi arvonlisäveron korotuksen vaatimat muutokset Kitsaaseen. Muutokset sisältyvät Kitsaan versioon 5.6. Tämä versio on jo saatavilla Windowsille ja Linuxille osoitteesta [kitsas.fi/lataa](/lataa). Macille on ladattavissa 
[beta-versio](/blog/2024/06/17/kitsas-5.6-beta/).

Verottaja on antanut [täydentäviä ohjeita](https://www.vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/arvonlisaverotus/arvonlisaveroprosentit/Yleinen-arvonlisaverokanta-nousee-syyskuussa/) yleisen arvonlisäverokannan muutoksesta ja arvonlisäverojen ilmoittamisesta. 

*Lisätty 17.6.2024*

*Päivitetty 7.8.2024*
<hr/>

## Yleinen arvonlisävero nousee


Hallitus on antanut esityksen yleisen arvonlisäverokannan nostamiseksi 25,5 prosentiin syyskuun alusta.

Kitsaan tietokanta ja kirjausnäkymät sallivat jo nyt desimaaliluvun käyttämisen arvonlisäveroprosenttina. Ohjelmistoon tehdään vielä joukko pienempiä muutoksia, jotka ovat siis jo työn alla.

<img src="/img/screenshots/alv255lasku.png" class="img-responsive"/>

<a href="https://vero.fi/tietoa-verohallinnosta/uutishuone/lehdist%C3%B6tiedotteet/2024/yleinen-arvonlis%C3%A4verokanta-nousee-syyskuussa--veron-m%C3%A4%C3%A4r%C3%A4n-ratkaisee-se-milloin-palvelu-on-suoritettu-tai-tavara-toimitettu-asiakkaalle/" target="_blank">Verohallinnon ohjeen</a> mukaan suoritusajankohta ratkaisee, milloin korotettua arvonlisäverokantaa sovelletaan. Niinpä syyskuussa kirjanpitäjän on syytä olla erityisen tarkkana: elokuussa toimitetut tavarat ja palvelut laskutetaan 24 %:n arvonlisäverokannalla ja syyskuussa toimitetut 25,5 %:n arvonlisäverokannalla.

Kitsaassa arvonlisäveroja käsitellään ohjaustietojen perusteella, joten verokantojen muuttuminen ei edellytä uusien tilien perustamista. Tilikartassa olevia arvonlisäverokantoja ei myöskään tarvitse muokata. Ohjelma huomioi kirjauksen päivämäärän ja toimituspäivämäärän ehdottaessaan kirjaukselle joko 24 tai 25,5 %:n arvonlisäveroa.

Laskutuksen tuoterekisteriin tallennetut hinnat ovat nettohintoja, joten arvonlisäveron korotus vaikuttaa suoraan näiden tuotteiden bruttohintoihin tuottetta laskulle lisättäessä.

Arvonlisäveron sähköisessä ilmoittamisessa joudumme odottamaan vielä Verohallinnon tarkempia soveltamisohjeita. Kun arvonlisäilmoitusten laatimisen aika tulee, voi sen tehdä Kitsaasta tuttuun tapaan, myös sähköisesti suoraan verottajan tietojärjestelmään.

**Muutokset vaativat Kitsaan työpöytäohjelmiston päivittämisen**. Pyrimme julkaisemaan beta-version ennen juhannusta ja varsinaisen ohjelmistopäivityksen heinäkuussa. Näin kaikille käyttäjillemme jää riittävästi aikaa ohjelmiston päivittämiseen ennen arvonlisäveron korotusta.
