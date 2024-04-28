/**
 * @generated SignedSource<<d4558ee8ff91fb1f566b8489cbd176d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeLoginButtonFragmentRefetchQuery$variables = {
  resource: string;
};
export type HomeLoginButtonFragmentRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"HomeLoginButtonFragment">;
};
export type HomeLoginButtonFragmentRefetchQuery = {
  response: HomeLoginButtonFragmentRefetchQuery$data;
  variables: HomeLoginButtonFragmentRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "resource"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "resource",
    "variableName": "resource"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeLoginButtonFragmentRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "HomeLoginButtonFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeLoginButtonFragmentRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "OAuth2LinksProvider",
        "kind": "LinkedField",
        "name": "oAuth2Links",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "google",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e40c83919c9b661d74366dc8d38fbaaa",
    "id": null,
    "metadata": {},
    "name": "HomeLoginButtonFragmentRefetchQuery",
    "operationKind": "query",
    "text": "query HomeLoginButtonFragmentRefetchQuery(\n  $resource: String!\n) {\n  ...HomeLoginButtonFragment_1AFwKl\n}\n\nfragment HomeLoginButtonFragment_1AFwKl on Query {\n  oAuth2Links(resource: $resource) {\n    google\n  }\n}\n"
  }
};
})();

(node as any).hash = "ebe49853a25785ac05dda3c2d748565d";

export default node;
