/**
 * @generated SignedSource<<ae352e06cc2d1bcf377c89dcbab84922>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsageStateLoaderQuery$variables = Record<PropertyKey, never>;
export type UsageStateLoaderQuery$data = {
  readonly viewer: {
    readonly currentUsageState: {
      readonly " $fragmentSpreads": FragmentRefs<"UsageStateFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type UsageStateLoaderQuery = {
  response: UsageStateLoaderQuery$data;
  variables: UsageStateLoaderQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "UsageStateLoaderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UsageStateNode",
            "kind": "LinkedField",
            "name": "currentUsageState",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UsageStateFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsageStateLoaderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UsageStateNode",
            "kind": "LinkedField",
            "name": "currentUsageState",
            "plural": false,
            "selections": [
              (v0/*: any*/),
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
                  (v0/*: any*/),
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
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "eaff304f7874f4437519a595ea8db009",
    "id": null,
    "metadata": {},
    "name": "UsageStateLoaderQuery",
    "operationKind": "query",
    "text": "query UsageStateLoaderQuery {\n  viewer {\n    currentUsageState {\n      ...UsageStateFragment\n      id\n    }\n    id\n  }\n}\n\nfragment UsageStateFragment on UsageStateNode {\n  id\n  periodStart\n  periodEnd\n  usedCharacters\n  usedTokens\n  usedExpressions\n  leftoverCharacters\n  leftoverTokens\n  leftoverExpressions\n  remainingCharacters\n  remainingTokens\n  remainingExpressions\n  boardCount\n  plan {\n    id\n    name\n    maxCharacters\n    maxTokens\n    maxExpressions\n    maxBoards\n    version\n  }\n}\n"
  }
};
})();

(node as any).hash = "dfffd921d7553ccb9e5d3f167d12dd09";

export default node;
