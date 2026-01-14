





1. projekt ska använda vite för frontend & express för backend

2. 

3. håll det litet

4. nodemon?

5. i vår server.js så:
    *Initierar vi express.
    *Sätter vår port till 3000.
    *Skapar en route som retunerar en sträng.
    *Loggar vilken port vi kör på.


---gen info---

tänk på i vilken ordning och gruppering, detta är essentielt för middleware

hur ska vi gruppera våra routes och i vilken ordning vill vi köra middlewares?
finns det någonstans vi inte vill köra middlewares?

ordning->struktur
(hur ska vi ordna saker, hur ska vi struktuera saker?)

----------------------------------------------------------------------------------------------------------------

API-stuff

Imagine a restaurant:
The menu = API documentation
The waiter = the API
The kitchen = the server / database
The endpoint = a specific menu item you order
Each menu item (endpoint) does one specific thing.







----------------------------------------------------------------------------------------------------------------


Välkomna till er nästa utmaning som fullstackutvecklare!

I denna uppgift ska ni utveckla och deploya ett REST-API med Node, Express och MongoDB. Ni kommer att använda era kunskaper i JavaScript, Dokumentdatabaser, Git och GitHub för att bygga och versionshantera projektet. Ert mål är att skapa ett API med CRUD-operationer, inom ett självvalt tema som gör projektet roligare och även dokumentera era endpoints på ett proffsigt sätt i en README-fil (med exempel på cURL-anrop både lokalt och mot er deployade server).

# Inlämning 
För att bli bedömda och få betyg ska ni lämna in följande i Canvas: 

En länk till ert GitHub-repo där all kod och dokumentation (README) finns. 
En 2-3 minuter lång video där ni demonstrerar ert REST-API:s CRUD-funktionalitet, gärna via cURL eller Insomnia. 
En länk till den deployade versionen av ert projekt, där API:et är åtkomligt externt. 
Eventuella övriga diagram eller skisser som förklarar er datamodell och struktur (valfritt).

# Mål
Skapa ett enkelt men engagerande tema för ert API (t.ex. filmer, böcker, resor, husdjur eller annat som intresserar er). 
Skapa ett API i Express som kan genomföra CRUD-operationer (Create, Read, Update, Delete) mot en MongoDB-databas. 
Bygga en professionell dokumentation i README, med kopierbara cURL-exempel både för en lokal server och för den deployade versionen. 
Deploya projektet till en molntjänst (t.ex. Render) och tillgängliggör det externt. 
Visa förståelse för felhantering genom att skicka meningsfulla felmeddelanden vid felaktiga förfrågningar. 
Förbereda API:et för framtida frontendprojekt, exempelvis genom att aktivera CORS och använda `.env`-fil för konfiguration. 

Rekommenderad Plan:

## Vecka 10: 
    Välj ett tema och planera vilka fält och endpoints ni behöver. 
    Designa erat RESTful API (https://restfulapi.net/rest-api-design-tutorial-with-example/Links to an external site., fast med JSON inte XML, och lägg in denna design I README (eller länkat till er README))
    Med Object modeling
    Resource URI:s
    Resource Representations
    Assigning of HTTP methods
    Sätt upp projektstruktur i Node/Express. 
    Gör era första commits till GitHub.
## Vecka 11: 
    Impleme tera grundläggande CRUD-endpoints: GET, POST, PUT/PATCH, DELETE med dummy data till att börja med. 
    Testa endpoints med curl eller insomnia och spara gärna en samling av anrop att visa upp i er video. 
    Konfigurera CORS så att ni enkelt kan anropa API:et från framtida webbklienter. 
    Påbörja deploy-processen (t.ex. skapa konto på valfri hostingtjänst).
    Påbörja processen att komma igång med er Mongo databas och skaffa ett konto på MongoDB Atlas.
## Vecka 12:    
    Koppla projektet till era MongoDB med Mongoose.
    Skapa ett MongoDB-schema för de data ni vill lagra.
    Skapa de ”riktiga” CRUD anropen och koppla till era funktionaliteter i API:et.   
    Dokumentera alla endpoints i er README, gärna med: 
    Beskrivning av varje endpoint. 
    Kopierbara cURL-exempel för att enkelt testa API:et både lokalt och mot den deployade versionen. 
    Felmeddelanden och statuskoder. 
    Extra: Infoga eventuella användarberättelser (user stories) i dokumentationen för att ge kontext.
## Vecka 13: 
    Sluttesta API:et, se över felhantering (skicka tydliga meddelanden vid t.ex. 400, 404, 500). 
    Deploya slutgiltiga versionen av API:et (om inte redan gjort) och kontrollera att det fungerar externt. 
    Spela in en kort video (2-3 minuter) där ni demonstrerar hur man anropar ert API. 
    Lämna in GitHub-länk, länk till er deployade server samt video i Canvas.
# Krav:

## Funktionalitet
    PI:t ska använda Node, Express och MongoDB (via Mongoose). 
    Minst fyra grundläggande endpoints för CRUD. 
    JSON-format för in- och utdata. 
    Tydlig koppling till det tema ni valt (t.ex. “/api/v1/movies”, “/api/v1/pets”). 
    Deploy: API:et ska finnas tillgängligt i ett externt nätverk (t.ex. https://ditt-api.onrender.com)Links to an external site..
    Designen bakom erat RESTFul API ska finnas med i dokumentationen.
    Dokumentation med cURL exempel för hur vi kan anropa API:et ska finnas med i README.
# Inlämningsinstruktioner
        Pusha all kod och dokumentation till ert GitHub-repo. 
        I README beskriver ni hur man installerar och startar projektet lokalt, samt vilka endpoints som finns (med cURL-exempel) lokalt och mot den deployade versionen, ha även med all övrig dokumentation som efterfrågats. 
        Spela in en 2-3 minuters video där ni demonstrerar API:et och dess huvudsakliga funktioner (CRUD). 
        Deploya ert API och ange länken till den körbara versionen i README. 
        Lämna in länken till ert GitHub-repo, länken till den deployade servern och videon i Canvas senast sista dagen.

