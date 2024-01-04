{
  "users" : {
    "admin" : {
      "username" : "admin",
      "password" : "{bcrypt}$2a$10$8TyZWYfDjn3xbK2UuZf.KeXa6wIQYS9rBFB2e5ZOACEUzcPXNXPaO",
      "grantedAuthorities" : [ "ROLE_ADMIN" ],
      "appSettings" : {
        "DEFAULT_INFERENCE" : true,
        "DEFAULT_VIS_GRAPH_SCHEMA" : true,
        "DEFAULT_SAMEAS" : true,
        "IGNORE_SHARED_QUERIES" : false,
        "EXECUTE_COUNT" : true
      },
      "dateCreated" : 1704361537727
    }
  },
  "user_queries" : {
    "admin" : {
      "SPARQL Select template" : {
        "name" : "SPARQL Select template",
        "body" : "SELECT ?s ?p ?o\nWHERE {\n\t?s ?p ?o .\n} LIMIT 100",
        "shared" : false
      },
      "Clear graph" : {
        "name" : "Clear graph",
        "body" : "CLEAR GRAPH <http://example>",
        "shared" : false
      },
      "Add statements" : {
        "name" : "Add statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nINSERT DATA\n      {\n      GRAPH <http://example> {\n          <http://example/book1> dc:title \"A new book\" ;\n                                 dc:creator \"A.N.Other\" .\n          }\n      }",
        "shared" : false
      },
      "Remove statements" : {
        "name" : "Remove statements",
        "body" : "PREFIX dc: <http://purl.org/dc/elements/1.1/>\nDELETE DATA\n{\nGRAPH <http://example> {\n    <http://example/book1> dc:title \"A new book\" ;\n                           dc:creator \"A.N.Other\" .\n    }\n}",
        "shared" : false
      },
      "Query 7" : {
        "name" : "Query 7",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology>\nPREFIX bd: <http://www.bigdata.com/rdf>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl>\n\nselect ?game ?series ?gameWDDate where { \n    ?series a :Saga .\n    ?series :name ?seriesName .\n    ?game a wd:Game .\n    ?series odp:hasItem ?game .\n    ?game :name ?gameName .\n    filter (lang(?seriesName) = \"en\") .\n    filter (str(?seriesName) = \"The Rocket League Saga\") .\n    SERVICE <https://query.wikidata.org/sparql> {\n        #Find the game on wikidata\n        ?gameWD wdt:P31 wd:Q7889 .\n        ?gameWD rdfs:label ?gameWDLabel .\n        filter (lang(?gameWDLabel) = \"en\") .\n        filter( str(?gameWDLabel) = str(?gameName)) .\n        #Get the game date\n        ?gameWD wdt:P577 ?gameWDDate\n    }\n} \nlimit 100",
        "shared" : false
      },
      "Query 7 - Final" : {
        "name" : "Query 7 - Final",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology>\nPREFIX bd: <http://www.bigdata.com/rdf>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect ?game ?series ?gameWDDate where { \n    ?series a :Saga .\n    ?series :name ?seriesName .\n    filter (lang(?seriesName) = \"en\") .\n    filter (str(?seriesName) = \"The Rocket League Saga\") .\n    ?game a wd:Game .\n    ?series odp:hasItem ?game .\n    ?game :name ?gameName .\n    SERVICE <https://query.wikidata.org/sparql> {         \n        #Find the game on wikidata         \n        ?gameWD wdt:P31 wd:Q7889 .         \n        ?gameWD rdfs:label ?gameWDLabel .         \n        filter (lang(?gameWDLabel) = \"en\") .         \n        filter( str(?gameWDLabel) = str(?gameName)) .         \n        #Get the game date         \n        ?gameWD wdt:P577 ?gameWDDate     \n    }\n   \n} \nlimit 100",
        "shared" : false
      },
      "Query 7 -Finalissima" : {
        "name" : "Query 7 -Finalissima",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect ?game ?series ?gameWDDate where { \n    ?series a :Saga .\n    ?series :name ?seriesName .\n    filter (lang(?seriesName) = \"en\") .\n    filter (str(?seriesName) = \"The Rocket League Saga\") .\n    ?game a wd:Game .\n    ?series odp:hasItem ?game .\n    ?game :name ?gameName .\n    SERVICE <https://query.wikidata.org/sparql> {         \n        #Find the game on wikidata         \n        ?gameWD wdt:P31 wd:Q7889 .         \n        ?gameWD rdfs:label ?gameWDLabel .         \n        filter (lang(?gameWDLabel) = \"en\") .         \n        filter( str(?gameWDLabel) = str(?gameName)) .         \n        #Get the game date         \n        ?gameWD wdt:P577 ?gameWDDate     \n    }\n   \n} \nlimit 100",
        "shared" : false
      },
      "Query 7 -Finalissimaissima" : {
        "name" : "Query 7 -Finalissimaissima",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect ?game ?gameWDDate where { \n    ?series a :Saga .\n    ?series :name ?seriesName .\n    filter (lang(?seriesName) = \"en\") .\n    filter (str(?seriesName) = \"The Rocket League Saga\") .\n    ?game a wd:Game .\n    ?series odp:hasItem ?game .\n    ?game :name ?gameName .\n    filter (lang(?gameName) = \"en\") .\n    SERVICE <https://query.wikidata.org/sparql> {         \n        #Find the game on wikidata         \n        ?gameWD wdt:P31 wd:Q7889 .         \n        ?gameWD rdfs:label ?gameWDLabel .         \n        filter (lang(?gameWDLabel) = \"en\") .         \n        filter( str(?gameWDLabel) = str(?gameName)) .         \n        #Get the game date         \n        ?gameWD wdt:P577 ?gameWDDate     \n    }\n   \n} \nlimit 100",
        "shared" : false
      }
    }
  }
}