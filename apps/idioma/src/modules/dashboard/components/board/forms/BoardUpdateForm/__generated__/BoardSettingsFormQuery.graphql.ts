/**
 * @generated SignedSource<<40829488c1afe2e1c1dd1d08cb4bcb53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardSettingsFormQuery$variables = Record<PropertyKey, never>;
export type BoardSettingsFormQuery$data = {
  readonly board: {
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFormFragment">;
  } | null | undefined;
};
export type BoardSettingsFormQuery = {
  response: BoardSettingsFormQuery$data;
  variables: BoardSettingsFormQuery$variables;
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
    "name": "BoardSettingsFormQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "BoardNode",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BoardSettingsFormFragment"
          }
        ],
        "storageKey": "board(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardSettingsFormQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
            "name": "isPublic",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "explanationsLanguage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "enabledLanguages",
            "storageKey": null
          }
        ],
        "storageKey": "board(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "01a8dddda250bca057311e81b0a04a26",
    "id": null,
    "metadata": {},
    "name": "BoardSettingsFormQuery",
    "operationKind": "query",
    "text": "query BoardSettingsFormQuery {\n  board(id: \"1\") {\n    ...BoardSettingsFormFragment\n    id\n  }\n}\n\nfragment BoardSettingsFormFragment on BoardNode {\n  id\n  name\n  isPublic\n  explanationsLanguage\n  enabledLanguages\n}\n"
  }
};
})();

(node as any).hash = "aa88150ea421a57c5768a22da271ebab";

export default node;
