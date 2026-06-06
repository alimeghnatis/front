/**
 * @generated SignedSource<<af96165510024fac07814114bda7e9fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ModeSelectorStoriesQuery$variables = Record<PropertyKey, never>;
export type ModeSelectorStoriesQuery$data = {
  readonly board: {
    readonly " $fragmentSpreads": FragmentRefs<"ModeSelectorFragment">;
  } | null | undefined;
};
export type ModeSelectorStoriesQuery = {
  response: ModeSelectorStoriesQuery$data;
  variables: ModeSelectorStoriesQuery$variables;
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
    "name": "ModeSelectorStoriesQuery",
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
            "name": "ModeSelectorFragment"
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
    "name": "ModeSelectorStoriesQuery",
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
    "cacheID": "6f65ebd1ca5c75864051d94df32e48c8",
    "id": null,
    "metadata": {},
    "name": "ModeSelectorStoriesQuery",
    "operationKind": "query",
    "text": "query ModeSelectorStoriesQuery {\n  board(id: \"1\") {\n    ...ModeSelectorFragment\n    id\n  }\n}\n\nfragment ModeSelectorFragment on BoardNode {\n  id\n}\n"
  }
};
})();

(node as any).hash = "e6c1646413209a84becd49bb08cf5728";

export default node;
