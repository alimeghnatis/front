/**
 * @generated SignedSource<<884f3e8dc40e4f88fc6bf1dc1bada8d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WordAnalysisStoriesQuery$variables = Record<PropertyKey, never>;
export type WordAnalysisStoriesQuery$data = {
  readonly expression: {
    readonly analysis: {
      readonly payloadV1: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"WordAnalysisFragment">;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type WordAnalysisStoriesQuery = {
  response: WordAnalysisStoriesQuery$data;
  variables: WordAnalysisStoriesQuery$variables;
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
    "name": "WordAnalysisStoriesQuery",
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
                    "name": "WordAnalysisFragment"
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
    "name": "WordAnalysisStoriesQuery",
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
    "cacheID": "3d5d067715562a2f64cc3306b7238a3a",
    "id": null,
    "metadata": {},
    "name": "WordAnalysisStoriesQuery",
    "operationKind": "query",
    "text": "query WordAnalysisStoriesQuery {\n  expression(id: \"1\") {\n    analysis {\n      payloadV1 {\n        ...WordAnalysisFragment\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment WordAnalysisFragment on Word {\n  word\n  lemma\n  pos\n  morphology {\n    tense\n    mood\n    voice\n    aspect\n    person\n    number\n    gender\n    case\n    politeness\n    clusivity\n    register\n  }\n  syntax {\n    function\n    head\n  }\n}\n"
  }
};
})();

(node as any).hash = "851ab49a57d043d3930a388946da9e12";

export default node;
