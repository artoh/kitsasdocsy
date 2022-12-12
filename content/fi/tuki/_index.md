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

{{<blocks/feature icon="far fa-envelope primary" title="Palaute">}}

<p>Otamme kiitollisuudella vastaan palautetta ohjelmasta palautesivumme kautta</p>
<p><a class="btn btn-lg btn-primary" href="https://kitsas.atlassian.net/servicedesk/customer/portal/6">
Anna palautetta</a></p>

<p>Emme välttämättä pysty vastaamaan henkilökohtaisesti kaikkeen palautteeseen.</p>
<p>Iloitsemme siitä, että jo yli 2500 käyttäjää on löytänyt Kitsaan ja toivomme, että ohjelmastamme on paljon hyötyä. Emme kuitenkaan pysty antamaan neuvontaa ilmaiskäyttäjillemme, vaan toivomme että tukea tarvitsevat käyttäjämme liittyisivät tilauksella maksullisen tuen piiriin.</p>
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
{{% blocks/section color="white" height="min" %}}
{{<uutiskirje>}}
{{% /blocks/section %}}
</div>    
<div id="vip" class="tabcontent">

{{% blocks/section color="white" height="min" %}}
<div style="width:100%">
<h1 style="text-align: center"><i class="fas fa-book primary"></i></h1>
<h2 style="text-align: center">Kitsaan ohjeet</h3>
<p class="lead" style="text-align:center">Näiltä sivuilta löydät kattavaat ohjeet Kitsaan käyttämiseen.<br>
<a class="btn btn-lg btn-primary" style="margin-top: 1em; margin-bottom: 1em;" href="{{< relref "/docs/">}}">
Lue ohjeita
</a>
</p>
</div>
{{% /blocks/section %}}


{{% blocks/section color="white" height="min" %}}
<div>
<h1 style="text-align: center"><i class="fas fa-envelope-open-text primary"></i></h1>
<h2 style="text-align: center">Tilaajien sähköpostineuvonta ja palaute</h3>
<p class="lead" style="text-align:center; margin-bottom: 1em;">Sähköpostineuvonta on käytettävissä myös tutustumisjakson ajan.</p>

<img src="/img/fi/tuki.png" style="float:right;">
<p>Nopeiten jätät tukipyynnön suoraan Kitsas-ohjelmasta
  <ul>
    <li>Ellet ole kirjautuneena käyttäjätunnuksellasi ohjelmaan, kirjaudu <b>Aloita</b>-sivun <b>Pilvi</b>-välilehdellä</b></li>
    <li>Paina <b>Tuki</b>-välilehdellä <b>Jätä tukipyyntö</b></li>
    <li>Valitse sopivin tukilomake ja täytä se</li>
    <li>Nopeuta käsittelyä lisäämällä <b>Tukitiedot</b> kohtaan ohjelman Tuki-välilehdellä näkyvät tiedot. Tämä onnistuu yleensä painamalla tukitietojen tekstialuetta hiiren oikealla napilla ja valitsemalla <b>Liitä</b>
    <li>Pyrimme vastaamaan tukipyyntöösi viimeistään seuraavana työpäivänä</li>
  </ul>
</p>

<p style="text-align: center; margin-top: 2em; padding-bottom: 1em;">
Voit jättää tukipyynnön myös alla olevalla painikkeella tai ottaa yhteyttä  sähköpostilla <b class="primary">tuki@kitsas.fi</b> tai <b class="primary">palaute@kitsas.fi</b></br>
<a class="btn btn-lg btn-primary" style="margin-top: 1em; margin-bottom: 1em;" href="https://kitsas.atlassian.net/servicedesk/customer/portal/5">
Jätä tukipyyntö tai anna palautetta </a><br>
Toivomme, että nopeutat tukiviestisi käsittelyä liittämällä siihen ohjelmassa <b>Aloita</b>-sivun <b>Tuki</b>-välilehdellä olevat tiedot. <br>Helpoiten teet sen painamalla <b>Kopioi leikepöydälle</b>-painiketta ja valitsemalla viestiä kirjoittaessasi <b>Liitä</b>.</p>

<p>Kitsas Oy:n antama tuki rajoittuu ohjelman käyttämiseen. Kitsas ei anna kirjanpitoon tai verotukseen liittyvää neuvontaa eikä takaa, että Kitsaan tuen antama neuvonta olisi kirjanpidon kannalta riittävää. Käänny tarvittaessa <a href="/tilitoimistoja">tilitoimiston</a> puoleen.</p>

</div>
{{% /blocks/section %}}
{{% blocks/section color="white" height="min" %}}
{{<uutiskirje>}}
{{% /blocks/section %}}
</div>


<script src="/js/tabs.js" defer></script>
