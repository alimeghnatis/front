/**
 * @generated SignedSource<<5fa85f31e9f1ffa4b2f4a755a03b9547>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WordMorphosaStoriesQuery$variables = Record<PropertyKey, never>;
export type WordMorphosaStoriesQuery$data = {
  readonly expression: {
    readonly analysis: {
      readonly payloadV1: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"WordMorphosaFragment">;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type WordMorphosaStoriesQuery = {
  response: WordMorphosaStoriesQuery$data;
  variables: WordMorphosaStoriesQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "WordMorphosaStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ExpressionNode",
        "kind": "LinkedField",
        "name": "expression",
        "plural": false,
        "selections": [
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
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "WordMorphosaFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "expression(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "WordMorphosaStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ExpressionNode",
        "kind": "LinkedField",
        "name": "expression",
        "plural": false,
        "selections": [
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
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "expression(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "0b8fcabe36e49f29b06571379096855d",
    "id": null,
    "metadata": {},
    "name": "WordMorphosaStoriesQuery",
    "operationKind": "query",
    "text": "query WordMorphosaStoriesQuery {\n  expression(id: \"1\") {\n    analysis {\n      payloadV1 {\n        ...WordMorphosaFragment\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment WordMorphosaFragment on Word {\n  word\n  lemma\n  pos\n  morphology {\n    tense\n    mood\n    voice\n    aspect\n    person\n    number\n    gender\n    case\n    politeness\n    clusivity\n    register\n  }\n  syntax {\n    function\n    head\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb7197d620406bd62a04e0e1cb1e0947";

export default node;
