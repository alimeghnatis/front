/**
 * @generated SignedSource<<1d70676c979f5646c6ae0469d7f705fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateFormMessageStoriesQuery$variables = Record<PropertyKey, never>;
export type CreateFormMessageStoriesQuery$data = {
  readonly board: {
    readonly " $fragmentSpreads": FragmentRefs<"CreateFormFragment">;
  } | null | undefined;
};
export type CreateFormMessageStoriesQuery = {
  response: CreateFormMessageStoriesQuery$data;
  variables: CreateFormMessageStoriesQuery$variables;
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
    "name": "CreateFormMessageStoriesQuery",
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
            "name": "CreateFormFragment"
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
    "name": "CreateFormMessageStoriesQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "openaiThreadId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "board(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "148e7b4a09e0d32400f3573e606c77f0",
    "id": null,
    "metadata": {},
    "name": "CreateFormMessageStoriesQuery",
    "operationKind": "query",
    "text": "query CreateFormMessageStoriesQuery {\n  board(id: \"1\") {\n    ...CreateFormFragment\n    id\n  }\n}\n\nfragment CreateFormFragment on BoardNode {\n  openaiThreadId\n}\n"
  }
};
})();

(node as any).hash = "7e8c2aa58e0d87f534b8a6cd0850aa10";

export default node;
