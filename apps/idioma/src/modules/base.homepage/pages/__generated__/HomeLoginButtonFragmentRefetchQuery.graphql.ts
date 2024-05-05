/**
 * @generated SignedSource<<c88893d209c07f256b99312f02cc64b3>>
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
  readonly " $fragmentSpreads": FragmentRefs<"HomePageLoginButtonFragment">;
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
        "name": "HomePageLoginButtonFragment"
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
    "cacheID": "75616b12a65e79f1a2998c88e1fceb12",
    "id": null,
    "metadata": {},
    "name": "HomeLoginButtonFragmentRefetchQuery",
    "operationKind": "query",
    "text": "query HomeLoginButtonFragmentRefetchQuery(\n  $resource: String!\n) {\n  ...HomePageLoginButtonFragment_1AFwKl\n}\n\nfragment HomePageLoginButtonFragment_1AFwKl on Query {\n  oAuth2Links(resource: $resource) {\n    google\n  }\n}\n"
  }
};
})();

(node as any).hash = "11e0aa9e3f45d0ab83f67baf8e2ee42a";

export default node;
