/**
 * @generated SignedSource<<ff90e84957428691116e6a089db8ac2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Provider2BoardRefetchQuery$variables = {
  id: string;
};
export type Provider2BoardRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBoard2Fragment">;
};
export type Provider2BoardRefetchQuery = {
  response: Provider2BoardRefetchQuery$data;
  variables: Provider2BoardRefetchQuery$variables;
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
    "name": "Provider2BoardRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ProviderBoard2Fragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Provider2BoardRefetchQuery",
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
    "cacheID": "1d23d6fc220fc96e2355d575639f5898",
    "id": null,
    "metadata": {},
    "name": "Provider2BoardRefetchQuery",
    "operationKind": "query",
    "text": "query Provider2BoardRefetchQuery(\n  $id: ID!\n) {\n  ...ProviderBoard2Fragment_1Bmzm5\n}\n\nfragment ProviderBoard2Fragment_1Bmzm5 on Query {\n  board(id: $id) {\n    id\n    name\n    created\n    updated\n  }\n}\n"
  }
};
})();

(node as any).hash = "bf95c182ab52c3307b8a2bca6711d766";

export default node;
