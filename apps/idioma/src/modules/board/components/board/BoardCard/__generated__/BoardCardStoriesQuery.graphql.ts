/**
 * @generated SignedSource<<b2602a80ccebbb32df979904791b9e7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardCardStoriesQuery$variables = Record<PropertyKey, never>;
export type BoardCardStoriesQuery$data = {
  readonly board: {
    readonly " $fragmentSpreads": FragmentRefs<"BoardCardFragment">;
  } | null | undefined;
};
export type BoardCardStoriesQuery = {
  response: BoardCardStoriesQuery$data;
  variables: BoardCardStoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "count",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardCardStoriesQuery",
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
            "name": "BoardCardFragment"
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
    "name": "BoardCardStoriesQuery",
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "GroupNodeConnection",
            "kind": "LinkedField",
            "name": "groups",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ExpressionNodeConnection",
            "kind": "LinkedField",
            "name": "expressions",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": "board(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "31f967cf1def7c1da2670eb423f4167e",
    "id": null,
    "metadata": {},
    "name": "BoardCardStoriesQuery",
    "operationKind": "query",
    "text": "query BoardCardStoriesQuery {\n  board(id: \"1\") {\n    ...BoardCardFragment\n    id\n  }\n}\n\nfragment BoardCardFragment on BoardNode {\n  id\n  name\n  description\n  created\n  groups {\n    count\n  }\n  expressions {\n    count\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb1fd220d94dcac8d3e2e789a0b6f9d3";

export default node;
