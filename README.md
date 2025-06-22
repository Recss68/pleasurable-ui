# Drop & Heal (Pleasurable UI) 💡

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
**Drop & Heal** is een ondersteunende website voor mensen die recentelijk een dierbare verloren hebben. Gebruikers worden begeleid door een reeks rouwtaken en reflectie-opdrachten, kunnen hun inzichten delen in een communitypagina en hebben toegang tot een AI-chatbot als digitale steun.  
🌐 Live website: *https://dropnheal-pleasurable-ui.onrender.com *

---

## Gebruik
**User story:**  
Als gebruiker wil ik een veilige plek hebben om mijn rouwproces te volgen, te reflecteren en me verbonden te voelen met anderen die hetzelfde ervaren.

**Functionaliteit:**
1. **Taken & Reflectie:**  
   Je doorloopt verschillende stappen met oefeningen en reflectievragen om je gevoelens te verwerken en je rouwproces beter te begrijpen.
2. **Communitypagina:**  
   Je kunt ervaringen lezen van anderen — of zelf berichten delen om steun te vinden en te geven.

---

## Kenmerken
- **HTML / Liquid templates:**  
  Modulaire opbouw met includes voor taken, community-berichten en chat-sectie.
- **CSS:**  
  Rustige, toegankelijke styling; loader- en succesmeldingen voor interactie-feedback; responsive design voor mobiel en desktop.
- **JavaScript:**  
  - **Form submit controle:** toont een loader tijdens verzenden en een succesmelding na return van server.  
- **Back-end (Node.js + Express):**  
  - Behandelt rountes zoals `/tasks`, `/community`, `/chat`, `/favorites`.  
  - Gebruikt JSON-endpoints (Directus/andere API) voor opslag en ophalen van community posts en gebruikersinvoer.
- **Authenticatie & state:**  
  - Je hebt de keuze om alleen te lezen of zelf te posten.  
  - Gelogde success-state bij plaatsen van berichten of favorieten.

---

## Installatie
Volg deze stappen om lokaal te starten of verder te werken:

Bij het clonen of forken van de repo, kan je de server niet gelijk starten en de pagina bekijken, hier zal ik het stap voor stap uitleggen. Aller eerst clone je de repo naar je desktop, open de code in vs code > Navigeer naar het terminal tab en open een nieuwe terminal > Als je ziet dat je in de juiste folder path zit, dan zullen we de node_modules installeren om de express server te laten draaien. Voer hier de command 'npm install' uit ( alle benodigde bestanden worden dan geinstalleerd ) > nu kun je de server starten door de command 'npm start' uit, als het goed is zie nu een tekst zoals 'Application started on https://localhost:800' GEFELICITEERD, nou kun je via dit URL op je browser de website bekijken.


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
