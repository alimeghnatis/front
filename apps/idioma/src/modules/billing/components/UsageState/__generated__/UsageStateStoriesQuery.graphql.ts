/**
 * @generated SignedSource<<42d648c9d73517bea99dc5387dd97ce5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsageStateStoriesQuery$variables = Record<PropertyKey, never>;
export type UsageStateStoriesQuery$data = {
  readonly usageState: {
    readonly " $fragmentSpreads": FragmentRefs<"UsageStateFragment">;
  } | null | undefined;
};
export type UsageStateStoriesQuery = {
  response: UsageStateStoriesQuery$data;
  variables: UsageStateStoriesQuery$variables;
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
    "name": "UsageStateStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "UsageStateNode",
        "kind": "LinkedField",
        "name": "usageState",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UsageStateFragment"
          }
        ],
        "storageKey": "usageState(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsageStateStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "UsageStateNode",
        "kind": "LinkedField",
        "name": "usageState",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "periodStart",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "periodEnd",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "usedCharacters",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "usedTokens",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "usedExpressions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "leftoverCharacters",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "leftoverTokens",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "leftoverExpressions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "remainingCharacters",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "remainingTokens",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "remainingExpressions",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "boardCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PlanNode",
            "kind": "LinkedField",
            "name": "plan",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
                "name": "maxCharacters",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "maxTokens",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "maxExpressions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "maxBoards",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "version",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "usageState(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "ec5107fa46417fe91736a5e86e88f74d",
    "id": null,
    "metadata": {},
    "name": "UsageStateStoriesQuery",
    "operationKind": "query",
    "text": "query UsageStateStoriesQuery {\n  usageState(id: \"1\") {\n    ...UsageStateFragment\n    id\n  }\n}\n\nfragment UsageStateFragment on UsageStateNode {\n  id\n  periodStart\n  periodEnd\n  usedCharacters\n  usedTokens\n  usedExpressions\n  leftoverCharacters\n  leftoverTokens\n  leftoverExpressions\n  remainingCharacters\n  remainingTokens\n  remainingExpressions\n  boardCount\n  plan {\n    id\n    name\n    maxCharacters\n    maxTokens\n    maxExpressions\n    maxBoards\n    version\n  }\n}\n"
  }
};
})();

(node as any).hash = "ae99ea2517d0aedf5db9d1c0fd8d98d7";

export default node;
