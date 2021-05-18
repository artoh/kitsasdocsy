---
title: "Veron maksun käsittely kirjanpidossa"
linkTitle: "Vero kirjanpidossa"
weight: 20
description: >
  Arvonlisäveroilmoituksen yhteydessä maksettava vero kirjataan taseeseen verovelaksi tai palautetus verosaamiseksi
---

Arvonlisäveroilmoituksen yhteydessä kauden aikana kertyvää veroa sisältävät **Arvonlisäverovelka** ja **Arvonlisäverosaamiset**-tilit päätetään. Käyttäjä voi valita asetusten **Verojen maksu** -kohdasta, miten veroja käsitellään verokauden jälkeen:

![](/img/fi/alv/kirjausvalinta.png)

### 1. Kirjaaminen Verovelat-tilille

Arvonlisäveroilmoituksen yhteydessä ohjelma kirjaa maksettavan veron **Verovelat**-tilille. Myös palautukset kirjataan samalle tilille negatiivisena velkana.

Kun vero maksetaan, kirjataan maksu Verovelat-tililtä pankkitilille. Tilitapahtumia tuotaessa ohjelma osaa tehdä tämän kirjauksen automaattisesti.

Jos verottaja maksaa palautuksia, saattaa Verovelat-tilin saldo olla negatiivinen. Tilinpäätöksen jaksotuskirjauksien yhteydessä negatiivinen saldo kirjataan kuitenkin tilinpäätöksessä **Verosaatavat**-tilille.

Esimerkiksi toukokuun arvonlisävero, joka maksetaan 12.7.

<table>
  <thead>
  <tr>
    <th>Pvm</th>
    <th colspan=2>Alv-velka</th>
    <th colspan=2>Alv-saamiset</th>
    <th colspan=2>Verovelka</th>
    <th colspan=2>Pankkitili</th>
  </tr>
  <tr>
      <td></td>
      <td>D</td>
      <td>K</td>
      <td>D</td>
      <td>K</td>
      <td>D</td>
      <td>K</td>
      <td>D</td>
      <td>K</td>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>31.5.</td>
      <td>100</td>
      <td></td>
      <td></td>
      <td>40</td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>12.7.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td>60</td>
    </tr>    
  </tbody>
</table>

Todellisuudessa voitaisiin 12.7. maksaa samalla myös muita oma-aloitteisia veroja, kuten kesäkuun ennakonpidätykset.

### 2. Maksujen kirjaaminen Verovelat-tilille ja palautusten kirjaaminen Verosaatavat-tilille

Menettely poikkeaa edellisestä siten, että ohjelma kirjaa verottajan maksamat palautukset **Verosaatavat**-tilille.

Tässä menettelyssä saatetaan joutua tekemään käsin siirtokirjauksia, jos aiempien verokausien palautuksia käytetään myöhempien verojen maksamiseen.

### 3. Kirjaaminen Maksettava alv/Palautettava alv -tileille

Ohjelma kirjaa arvonlisäveroilmoituksen yhteydessä maksettavat verot **Maksettava alv** tilille tai palautukset **Palautettava alv**-tilille.

Käyttäjän on itse kirjattava arvonlisäveroilmoituksen antamisen yhteydessä maksuun erääntyvä vero **Verovelat**-tilille. Vastaavalla tavalla samalle tilille kirjataan myös erääntyvät ennakonpidätykset ja sosiaaliturvamaksut.

Menettelyn etuna on se, että Verovelat-tili vastaa verottajan OmaVero-tiliä, ja kirjaukset voidaan tehdä OmaVeron tulosteiden perusteella. Erilaiset maksut ja verot voidaan myös esittää taseessa ja tase-erittelyssä omina erinään.

Kun vero suoritetaan verottajalle, kirjataan se Verovelat-tililtä pankkitilille. Samalla suorituksella voidaan kirjata useita eri veroja ja maksuja. Tämän kirjauksen ohjelma tekee tilitapahtumia tuotaessa.

Esimerkiksi toukokuun arvonlisävero, joka ilmoitetaan 10.7. ja maksetaan 12.7.

<table>
  <thead>
  <tr>
    <th>Pvm</th>
    <th colspan=2>Alv-velka</th>
    <th colspan=2>Alv-saamiset</th>
    <th colspan=2>Maksettava alv</th>
    <th colspan=2>Verovelka</th>
    <th colspan=2>Pankkitili</th>
  </tr>
  <tr>
      <td></td>
      <td>D</td>
      <td>K</td>
      <td>D</td>
      <td>K</td>
      <td>D</td>
      <td>K</td>
      <td>D</td>
      <td>K</td>
      <td>D</td>
      <td>K</td>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>31.5.</td>
      <td>100</td>
      <td></td>
      <td></td>
      <td>40</td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
     <td></td>
      <td></td>      
    </tr>
    <tr>
      <td>10.7.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
    </tr>    
    <tr>
      <td>12.7.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>60</td>
      <td></td>
      <td></td>
      <td>60</td>
    </tr>    
  </tbody>
</table>
