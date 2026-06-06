/**
 * @generated SignedSource<<1bc292db1c5aac0d39ed219aaaffd008>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardStoriesQuery$variables = Record<PropertyKey, never>;
export type BoardStoriesQuery$data = {
  readonly board: {
    readonly " $fragmentSpreads": FragmentRefs<"BoardFragment">;
  } | null | undefined;
};
export type BoardStoriesQuery = {
  response: BoardStoriesQuery$data;
  variables: BoardStoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6391",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6392",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6393",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "BoardNode",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BoardFragment"
          }
        ],
        "storageKey": "board(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "BoardNode",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "GroupNodeConnection",
            "kind": "LinkedField",
            "name": "groups",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "GroupNodeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GroupNode",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": (v7/*: any*/),
                        "concreteType": "ExpressionNodeConnection",
                        "kind": "LinkedField",
                        "name": "expressions",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ExpressionNodeEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ExpressionNode",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isProcessed",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/),
                                  (v2/*: any*/),
                                  (v3/*: any*/),
                                  (v4/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "content",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "correctedContent",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isBookmarked",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "textDirection",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "audioUrl",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ClientExtension",
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isNew",
                                        "storageKey": null
                                      }
                                    ]
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "translation",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "grammarExplanation",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "generalExplanation",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "wordsExplanation",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "changes",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "rating",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "ratingComment",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ExpressionAnalysisNode",
                                    "kind": "LinkedField",
                                    "name": "analysis",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Word",
                                        "kind": "LinkedField",
                                        "name": "payloadV1",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "word",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "lemma",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "pos",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Morphology",
                                            "kind": "LinkedField",
                                            "name": "morphology",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "tense",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "mood",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "voice",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "aspect",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "person",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "number",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "gender",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "case",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "politeness",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "clusivity",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "register",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Syntax",
                                            "kind": "LinkedField",
                                            "name": "syntax",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "function",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "head",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v5/*: any*/),
                                      (v1/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v8/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v10/*: any*/)
                        ],
                        "storageKey": "expressions(first:50)"
                      },
                      {
                        "alias": null,
                        "args": (v7/*: any*/),
                        "filters": null,
                        "handle": "connection",
                        "key": "DefaultGroupFragment_expressions",
                        "kind": "LinkedHandle",
                        "name": "expressions"
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": "groups(first:20)"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "BoardFragment_groups",
            "kind": "LinkedHandle",
            "name": "groups"
          },
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "newExpressionsCount",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": "board(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "f41737df3de5a696536515a4acdf5085",
    "id": null,
    "metadata": {},
    "name": "BoardStoriesQuery",
    "operationKind": "query",
    "text": "query BoardStoriesQuery {\n  board(id: \"1\") {\n    ...BoardFragment\n    id\n  }\n}\n\nfragment AudioButtonFragment on ExpressionNode {\n  id\n  audioUrl\n  isProcessed\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment BoardFragment on BoardNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  created\n  groups(first: 20) {\n    edges {\n      node {\n        ...DefaultGroupFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment BookmarkButtonFragment on ExpressionNode {\n  id\n  isBookmarked\n  isProcessed\n}\n\nfragment DefaultExpressionFragment on ExpressionNode {\n  id\n  isProcessed\n  created\n  iso6391\n  iso6392\n  iso6393\n  ...ExpressionFragment\n}\n\nfragment DefaultGroupFragment on GroupNode {\n  id\n  created\n  expressions(first: 50) {\n    edges {\n      node {\n        ...DefaultExpressionFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment DeleteButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment DetailsButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment DetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  translation\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  isProcessed\n  audioUrl\n  created\n  changes\n  ...RatingFormFragment\n  ...MorphosaFragment\n}\n\nfragment ExpressionFragment on ExpressionNode {\n  id\n  content\n  iso6391\n  iso6392\n  iso6393\n  correctedContent\n  created\n  isProcessed\n  isBookmarked\n  textDirection\n  ...AudioButtonFragment\n  ...DeleteButtonFragment\n  ...BookmarkButtonFragment\n  ...DetailsButtonFragment\n  ...VariantButtonFragment\n  ...DetailsFragment\n  ...VariantFragment\n}\n\nfragment MorphosaFragment on ExpressionNode {\n  id\n  textDirection\n  analysis {\n    payloadV1 {\n      word\n      lemma\n      pos\n      morphology {\n        tense\n        mood\n        voice\n        aspect\n        person\n        number\n        gender\n        case\n        politeness\n        clusivity\n        register\n      }\n      syntax {\n        function\n        head\n      }\n      ...WordAnalysisFragment\n    }\n    created\n    id\n  }\n}\n\nfragment RatingFormFragment on ExpressionNode {\n  id\n  rating\n  ratingComment\n}\n\nfragment VariantButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment VariantFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  created\n}\n\nfragment WordAnalysisFragment on Word {\n  word\n  lemma\n  pos\n  morphology {\n    tense\n    mood\n    voice\n    aspect\n    person\n    number\n    gender\n    case\n    politeness\n    clusivity\n    register\n  }\n  syntax {\n    function\n    head\n  }\n}\n"
  }
};
})();

(node as any).hash = "09b011704ca3c12e1f7ce1c0a4c41b2b";

export default node;
