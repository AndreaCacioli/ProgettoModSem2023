{
  "users" : {
    "admin" : {
      "username" : "admin",
      "password" : "{bcrypt}$2a$10$MlZjaEJgcETZ1ErDU.oHhujmCJQzvdvJ5YTt/wDokVXcLlbKdVzW.",
      "grantedAuthorities" : [ "ROLE_ADMIN" ],
      "appSettings" : {
        "DEFAULT_INFERENCE" : true,
        "DEFAULT_VIS_GRAPH_SCHEMA" : true,
        "DEFAULT_SAMEAS" : true,
        "IGNORE_SHARED_QUERIES" : false,
        "EXECUTE_COUNT" : true
      },
      "dateCreated" : 1704274233487
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
      "Query 1" : {
        "name" : "Query 1",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect ?titolo where { \n\t?game a wd:Game .\n    ?saga a :Saga .\n    ?saga odp:hasItem ?game .\n    ?game :name ?titolo .\n    filter(lang(?titolo) = \"en\")\n} limit 100 \n",
        "shared" : false
      },
      "Query 2" : {
        "name" : "Query 2",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect ?seriesName where { \n    ?g a wd:Game .\n    ?series a :Saga .\n    ?series odp:hasItem ?g .\n    ?series :name ?seriesName .\n    ?g :name ?gName .\n    filter (lang(?seriesName) = \"en\") .\n    filter (lang(?gName) = \"en\") .\n    filter (str(?gName) = \"FIFA 2020\")\n\n} limit 100 \n",
        "shared" : false
      },
      "Query 3" : {
        "name" : "Query 3",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect ?studioName where { \n    ?g a wd:Game .\n    ?g :name ?gName .\n    filter (lang(?gName) = \"en\") .\n    filter (str(?gName) = \"Rocket League\") . \n\t?g :madeBy ?studio .\n    ?studio :name ?studioName\n} limit 100 \n",
        "shared" : false
      },
      "Query 4" : {
        "name" : "Query 4",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect (COUNT(?titles) as ?count) where { \n\t?series a :Saga .\n\t?series :name ?seriesName .\n    filter (lang(?seriesName) = \"en\") .\n    #filter (str(?seriesName) = \"The FIFA Saga\")\n    filter (str(?seriesName) = \"The Rocket League Saga\") .\n    ?series odp:hasItem ?titles\n} \nlimit 100 ",
        "shared" : false
      },
      "Query 5" : {
        "name" : "Query 5",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\nselect ?studioDate where { \n    ?studio a :Studio .\n    ?studio :name ?studioName .\n    filter (lang(?studioName) = \"en\") .\n    filter (str(?studioName) = \"Psyonix\") .\n    SERVICE <https://query.wikidata.org/sparql> {\n        ?studioWD wdt:P31 wd:Q210167 .\n        ?studioWD rdfs:label ?studioWDLabel .\n        filter (lang(?studioWDLabel) = \"en\") .\n        filter( str(?studioName) = str(?studioWDLabel)) .\n        ?studioWD wdt:P571 ?studioDate\n\t}\n} \nlimit 100 ",
        "shared" : false
      },
      "Query 6" : {
        "name" : "Query 6",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect ?protagonist where { \n\t?game a wd:Game .\n    ?game :name ?gameName .\n    filter (str(?gameName) = \"Martha is Dead\") . \n    filter (lang(?gameName) = \"en\") .\n    ?protagonist :isProtagonistOf ?game\n} limit 100 ",
        "shared" : false
      },
      "Query 7" : {
        "name" : "Query 7",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\nPREFIX wd: <http://www.wikidata.org/entity/>\nPREFIX wdt: <http://www.wikidata.org/prop/direct/>\nPREFIX wikibase: <http://wikiba.se/ontology#>\nPREFIX bd: <http://www.bigdata.com/rdf#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX odp: <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#>\n\nselect ?game ?series ?gameWDDate where { \n    ?series a :Saga .\n    ?series :name ?seriesName .\n    ?game a wd:Game .\n    ?saga odp:hasItem ?game .\n    ?game :name ?gameName .\n    filter (lang(?seriesName) = \"en\") .\n    filter (str(?seriesName) = \"The Rocket League Saga\") .\n    #SERVICE <https://query.wikidata.org/sparql> {\n        #Find the game on wikidata\n    #    ?gameWD wdt:P31 wd:Q7889 .\n    #    ?gameWD rdfs:label ?gameWDLabel .\n    #    filter (lang(?gameWDLabel) = \"en\") .\n    #    filter( str(?gameWDLabel) = str(?gameName)) .\n        #Get the game date\n     #   ?gameWD wdt:P577 ?gameWDDate\n\t#}\n} \nlimit 100 ",
        "shared" : false
      }
    }
  }
}