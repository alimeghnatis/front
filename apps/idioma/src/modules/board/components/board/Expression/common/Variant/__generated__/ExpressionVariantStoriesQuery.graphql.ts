/**
 * @generated SignedSource<<2e22002fefbdd8549b9d5be361e4375e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionVariantStoriesQuery$variables = Record<PropertyKey, never>;
export type ExpressionVariantStoriesQuery$data = {
  readonly expression: {
    readonly " $fragmentSpreads": FragmentRefs<"ExpressionVariantFragment">;
  } | null | undefined;
};
export type ExpressionVariantStoriesQuery = {
  response: ExpressionVariantStoriesQuery$data;
  variables: ExpressionVariantStoriesQuery$variables;
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
    "name": "ExpressionVariantStoriesQuery",
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
            "name": "ExpressionVariantFragment"
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
    "name": "ExpressionVariantStoriesQuery",
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
            "name": "content",
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
    "cacheID": "387d7650559eac88c2064eb0f7424f0c",
    "id": null,
    "metadata": {},
    "name": "ExpressionVariantStoriesQuery",
    "operationKind": "query",
    "text": "query ExpressionVariantStoriesQuery {\n  expression(id: \"1\") {\n    ...ExpressionVariantFragment\n    id\n  }\n}\n\nfragment ExpressionVariantFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  created\n}\n"
  }
};
})();

(node as any).hash = "30513312bcb9e7e76bad3f5efd8742b9";

export default node;
