---
title: "Käyttäjätuki ja palaute"
linkTitle: "Tuki"
weight: 30
hideDisqus: true
menu:
  main:
    weight: 29
---

{{% blocks/lead color="light" %}}

# Käyttäjätuki ja palaute

Valitse, oletko

<div class="tab">
  <button onclick="openTab(event,'free')">
    <i class="fab fa-creative-commons-nc-eu"></i> Ilmaiskäyttäjä</a>
  </button>
  <button onclick="openTab(event,'vip')">
    <i class="fas fa-gem"></i> Tilaaja</a>
  </button>
</div>

{{% /blocks/lead %}}

<div id="free" class="tabcontent">
{{% blocks/section color="white" height="min" %}}
{{<blocks/feature icon="fas fa-book primary" title="Kitsaan ohjeet">}}
  <p>Näiltä sivuilta löydät kattavat ohjeet Kitsaan käyttämiseen sekä lukuisia ohjevideoita Kitsaan käytöstä.</p>
{{</blocks/feature>}}    
{{<blocks/feature icon="far fa-comments primary" title="Kysy ja kommentoi">}}
  <p>Lähes jokaisen ohjesivun alalaidassa on keskustelualue, jolla voit kysyä, kommentoida ja tehdä ehdotuksia Kitsaan ominaisuuksista.</p>
  <p>Kysymyksiin sivustolla voivat vastata kaikki Kitsaan käyttäjät. Myös ohjelman kehittäjät seuraavat sivuilla käytävää keskustelua ja osallistuvat siihen mahdollisuuksiensa mukaisesti.</p>
  <p>Kirjoita kysymyksesi kommenttina sille sivulle, jossa käsitellään sinua askarruttavaa asiaa.</p>

{{</blocks/feature>}}
{{<blocks/feature icon="far fa-envelope primary" title="Palaute">}}

<p>Otamme kiitollisuudella vastaan palautetta ohjelmasta osoitteessa <b class="primary">palaute@kitsas.fi</b></p>
<p>Emme välttämättä pysty vastaamaan henkilökohtaisesti kaikkeen palautteeseen. <b class="primary">Palauteosoitteessa ei anneta neuvontaa.</b></p>
<p>Iloitsemme siitä, että jo yli 2000 käyttäjää on löytänyt Kitsaan ja toivomme, että ohjelmastamme on paljon hyötyä. Emme kuitenkaan pysty antamaan neuvontaa ilmaiskäyttäjillemme, vaan toivomme että tukea tarvitsevat käyttäjämme liittyisivät tilauksella maksullisen tuen piiriin.</p>
{{</blocks/feature>}}  
{{% /blocks/section %}}

{{% blocks/section color="light" height="min" %}}

## Tuki käytettävissä myös kokeilujakson ajan

<p class="lead">Asennettuasi ohjelman voit luoda itsellesi ilmaisen käyttäjätunnuksen ja kokeilla 30 päivän ajan kaikkia ohjelman ominaisuuksia, myös kirjanpidon tallentamista pilveen. Myös sähköpostituki on käytettävissäsi kokeilujakson ajan. </p>

<div style="margin-left: auto; margin-right: auto;">
<a class="btn btn-lg btn-primary" href="{{< relref "/docs/aloittaminen/tilaus/tunnus">}}">
Näin luot käyttäjätunnuksen
</a>
</div>

{{% /blocks/section %}}

</div>    
<div id="vip" class="tabcontent">
{{% blocks/section color="white" height="min" %}}
  {{<blocks/feature icon="fas fa-book primary" title="Kitsaan ohjeet" url="../docs">}}
    <p>Näiltä sivuilta löydät kattavat ohjeet Kitsaan käyttämiseen.</p>
  {{</blocks/feature>}}
  {{<blocks/feature icon="fab fa-youtube primary" title="Ohjevideot" url="../videot">}}
    <p>Olemme tehneet lukuisia ohjevideoita Kitsaan keskeisistä toiminnoista.</p>
    {{</blocks/feature>}}  
  {{<blocks/feature icon="far fa-envelope primary" title="Palaute">}}
  <p>Kehitämme Kitsasta entistä paremmaksi ja otamme kiitollisuudella vastaan palautetta ohjelmasta osoitteessa <b class="primary">palaute@kitsas.fi</b></p>

{{</blocks/feature>}}

{{% /blocks/section %}}
{{% blocks/section color="white" height="min" %}}

<div>
<img src="/img/fi/tuki.png" style="float:right;">
<h1 style="text-align: center"><i class="fas fa-envelope-open-text primary"></i></h1>
<h3 style="text-align: center">Tilaajien sähköpostineuvonta</h3>
<p class="lead">Annamme tilaajillemme neuvontaa sähköpostilla osoitteessa <b class="primary">tuki@kitsas.fi<br/></b>Nopeuttaaksesi kysymyksesi käsittelyä liitä viestiisi tiedot, jotka löytyvät <b class="primary">Aloita</b>-sivun <b class="primary">Tuki</b>-välilehdeltä.</p>
<p>Näiden tietojen perusteella tarkastamme, että tilauksesi on voimassa. Mukana on myös tietoja käyttämästäsi ohjelmasta ja tilikartasta, jotka helpottavat meitä kysymykseesi vastaamisessa.</p>
<p>Helpoiten liität nämä tiedot painamalla Kitsaassa <b>Kopioi leikepöydälle</b> ja valitsemalla sähköpostiohjelmassasi <b>Liitä</b>. Joissain ongelmatilanteissa meitä auttaa myös, jos pystyt liittämään sähköpostiviestiisi ne tiedot, jotka löydät <b>Virheenjäljitystiedot leikepöydälle</b>-painikkeesta.</p>
<p>Sähköpostineuvonta on käytettävissä myös tutustumisjakson ajan.</p>
<p>Kitsas Oy:n antama tuki rajoittuu ohjelman käyttämiseen. Kitsas ei anna kirjanpitoon tai verotukseen liittyvää neuvontaa eikä takaa, että Kitsaan tuen antama neuvonta olisi kirjanpidon kannalta riittävää.</p>

</div>
{{% /blocks/section %}}

</div>
{{% blocks/section color="white" height="min" %}}
{{<uutiskirje>}}
{{% /blocks/section %}}

<script src="/js/tabs.js" defer></script>