/**
 * @generated SignedSource<<221ab011fe0c286bb5164e7726f7020a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderBoardStoriesRefetchQuery$variables = {
  id?: string | null | undefined;
};
export type ProviderBoardStoriesRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBoardStoriesFragment">;
};
export type ProviderBoardStoriesRefetchQuery = {
  response: ProviderBoardStoriesRefetchQuery$data;
  variables: ProviderBoardStoriesRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProviderBoardStoriesRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ProviderBoardStoriesFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProviderBoardStoriesRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updated",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d453c53c6e4fc9391036a15b6c1af7f2",
    "id": null,
    "metadata": {},
    "name": "ProviderBoardStoriesRefetchQuery",
    "operationKind": "query",
    "text": "query ProviderBoardStoriesRefetchQuery(\n  $id: ID\n) {\n  ...ProviderBoardStoriesFragment_1Bmzm5\n}\n\nfragment ProviderBoardStoriesFragment_1Bmzm5 on Query {\n  board(id: $id) {\n    id\n    name\n    created\n    updated\n  }\n}\n"
  }
};
})();

(node as any).hash = "84aaec93829760a8c4edae916f4594ea";

export default node;
