/**
 * @generated SignedSource<<6cb9f35018d986824dc53bd266af1814>>
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
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonFragment">;
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
        "name": "LoginButtonFragment"
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
    "cacheID": "dd8b56497cb9cfcf95cfd4a36b62d7d8",
    "id": null,
    "metadata": {},
    "name": "LoginButtonFragmentRefetchQuery",
    "operationKind": "query",
    "text": "query LoginButtonFragmentRefetchQuery(\n  $resource: String!\n) {\n  ...LoginButtonFragment_1AFwKl\n}\n\nfragment LoginButtonFragment_1AFwKl on Query {\n  oAuth2Links(resource: $resource) {\n    google\n  }\n}\n"
  }
};
})();

(node as any).hash = "ba86836c995f320bdca20d2966c3b2a4";

export default node;
