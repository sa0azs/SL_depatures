# SL_depatures

<h3>departures.js</h3>
<p></p>Ett javascript för att anropa Storstockholms lokaltrafiks (SL) API Transport, hämta data och visa avgångar från
en hållplats på en websida på enklaste sätt, likt de elektroniska skyltar som sitter på många busshållplatser, 
och som visar linje, destination och tid till avgång.</p>

<p>I scriptet finns en URL med variabler som sorterar fram viss data, hållplats, tidsspann, riktning, linje och trafikslag.</p>

<p>Här listas alla avgångar från Londonviadukten under kommande 120 minuter i riktning mot Nacka/Orminge för busslinje 471.<br>
URL:n att åstadkomma det är:<br> https://transport.integration.sl.se/v1/sites/1461/departures?forecast=120&direction=1&line=471&transport=BUS</p>
<hr>
<p><b>1461</b> är hållplats-ID för Londonviadukten. Hållplats-ID kan sökas fram via https://transport.integration.sl.se/v1/sites?expand=true</p>

<p><b>forecast</b> är hur många minuter framåt avgångar skall visas, här 120 minuter. 
Default är 60 minuter, och oavsett vald tid hämtar den maximalt de tre närmast kommande avgångarna för en linje.</p>

<p><b>direction</b> är riktning, där 1 i det här fallet är ut från stan</p>

<p><b>line</b> är linje, t.ex. 471, 18, 82, 41</p>

<p><b>transport</b> är trafikslag, t.ex. BUS, METRO, SHIP, TRAIN</p>
<hr>
<p>Några hållplatser att experminera med är 9192 (Slussen) och 1079 (Odenplan), där det finns flera olika trafikslag.
Det finns också fler variabler att som hämtas att visa om man så vill, men detta var vad jag behövde för mitt use case.</p>

<p>Mer om API:et finns här: https://github.com/trafiklab/trafiklab.se/blob/main/content/api/trafiklab-apis/sl/transport.md</p>
<br>
<h3>departures.html</h3>
Websidan skall ses för vad den är; ett proof of concept, och lämnar således en hel del i övrigt att önska 
vad gäller design m.m.
