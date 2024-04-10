/**
 * @generated SignedSource<<ecb3455554be485eb9ac2a106b8f7dcb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionStoriesQuery$variables = Record<PropertyKey, never>;
export type ExpressionStoriesQuery$data = {
  readonly expression: {
    readonly " $fragmentSpreads": FragmentRefs<"ExpressionFragment">;
  } | null | undefined;
};
export type ExpressionStoriesQuery = {
  response: ExpressionStoriesQuery$data;
  variables: ExpressionStoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExpressionStoriesQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExpressionFragment"
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
    "name": "ExpressionStoriesQuery",
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
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
            "name": "iso6391",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "iso6392",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "iso6393",
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
            "name": "grammarExplanation",
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
            "name": "audioUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          }
        ],
        "storageKey": "expression(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "159d4ab1e51eb9d5064da8ec54e316f9",
    "id": null,
    "metadata": {},
    "name": "ExpressionStoriesQuery",
    "operationKind": "query",
    "text": "query ExpressionStoriesQuery {\n  expression(id: \"1\") {\n    ...ExpressionFragment\n    id\n  }\n}\n\nfragment ExpressionFragment on ExpressionNode {\n  id\n  content\n  iso6391\n  iso6392\n  iso6393\n  correctedContent\n  grammarExplanation\n  wordsExplanation\n  audioUrl\n  created\n}\n"
  }
};
})();

(node as any).hash = "588eda946a9db099ef098c19f77f802d";

export default node;
