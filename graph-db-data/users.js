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
      "Test" : {
        "name" : "Test",
        "body" : "PREFIX ontogames:<http://localhost:7200/resource?uri=http%3A%2F%2Fwww.semanticweb.org%2Fcava%2Fontologies%2F2023%2F11%2FOntoGames_Ontology>\n\nselect * where { \n\t?s ?p ?o .\n} limit 100 \n",
        "shared" : false
      },
      "Ricerca di titoli in una Saga" : {
        "name" : "Ricerca di titoli in una Saga",
        "body" : "PREFIX : <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/>\n\nselect ?t where { \n\t?t a <http://www.semanticweb.org/cava/ontologies/2023/11/OntoGames_Ontology/Game_http://www.wikidata.org/entity/Game>.\n    ?s a :Saga.\n    ?s <http://www.ontologydesignpatterns.org/cp/owl/bag.owl#hasItem> ?t\n    \n} limit 100 \n",
        "shared" : false
      }
    }
  }
}