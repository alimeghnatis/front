/**
 * @generated SignedSource<<163a162570dcfb48a828daa96695a784>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewerUpdateFormQuery$variables = Record<PropertyKey, never>;
export type ViewerUpdateFormQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewerUpdateFormFragment">;
  } | null | undefined;
};
export type ViewerUpdateFormQuery = {
  response: ViewerUpdateFormQuery$data;
  variables: ViewerUpdateFormQuery$variables;
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
    "name": "ViewerUpdateFormQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ViewerUpdateFormFragment"
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
    "name": "ViewerUpdateFormQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "profilePicture",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isSuperuser",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UserPreferencesNode",
            "kind": "LinkedField",
            "name": "preferences",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "actionOnExpressionClick",
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "de275cae32f7dce2a70dfaa8b47f3aae",
    "id": null,
    "metadata": {},
    "name": "ViewerUpdateFormQuery",
    "operationKind": "query",
    "text": "query ViewerUpdateFormQuery {\n  viewer {\n    ...ViewerUpdateFormFragment\n    id\n  }\n}\n\nfragment ViewerUpdateFormFragment on UserNode {\n  id\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  isSuperuser\n  preferences {\n    actionOnExpressionClick\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a217619944913fa01a61fab1862707c7";

export default node;
