/**
 * @generated SignedSource<<5e6af2aa8bf25615079b822a795c8850>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoginButtonFragmentRefetchQuery$variables = {
  resource: string;
};
export type LoginButtonFragmentRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"LoginPageButtonFragment">;
};
export type LoginButtonFragmentRefetchQuery = {
  response: LoginButtonFragmentRefetchQuery$data;
  variables: LoginButtonFragmentRefetchQuery$variables;
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
    "name": "LoginButtonFragmentRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "LoginPageButtonFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginButtonFragmentRefetchQuery",
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
    "cacheID": "050f4f8d4844caa20d5d14936436d73d",
    "id": null,
    "metadata": {},
    "name": "LoginButtonFragmentRefetchQuery",
    "operationKind": "query",
    "text": "query LoginButtonFragmentRefetchQuery(\n  $resource: String!\n) {\n  ...LoginPageButtonFragment_1AFwKl\n}\n\nfragment LoginPageButtonFragment_1AFwKl on Query {\n  oAuth2Links(resource: $resource) {\n    google\n  }\n}\n"
  }
};
})();

(node as any).hash = "7d110401c74c34e56799931e7b09fc1f";

export default node;
