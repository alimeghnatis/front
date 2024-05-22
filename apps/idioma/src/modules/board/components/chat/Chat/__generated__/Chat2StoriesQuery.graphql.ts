/**
 * @generated SignedSource<<ab85286e51bdcff81a3c59f3c527d3f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Chat2StoriesQuery$variables = Record<PropertyKey, never>;
export type Chat2StoriesQuery$data = {
  readonly board: {
    readonly " $fragmentSpreads": FragmentRefs<"Chat2Fragment">;
  } | null | undefined;
};
export type Chat2StoriesQuery = {
  response: Chat2StoriesQuery$data;
  variables: Chat2StoriesQuery$variables;
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
    "name": "Chat2StoriesQuery",
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
            "name": "Chat2Fragment"
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
    "name": "Chat2StoriesQuery",
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
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "openaiThreadId",
            "storageKey": null
          }
        ],
        "storageKey": "board(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "5e3351c221dac4dd6a666c3b8d01b535",
    "id": null,
    "metadata": {},
    "name": "Chat2StoriesQuery",
    "operationKind": "query",
    "text": "query Chat2StoriesQuery {\n  board(id: \"1\") {\n    ...Chat2Fragment\n    id\n  }\n}\n\nfragment Chat2Fragment on BoardNode {\n  id\n  openaiThreadId\n}\n"
  }
};
})();

(node as any).hash = "0555bff2a6eae450868c8dd4879e5cd3";

export default node;
