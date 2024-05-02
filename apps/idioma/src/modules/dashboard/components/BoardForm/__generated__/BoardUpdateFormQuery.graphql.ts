/**
 * @generated SignedSource<<31d1840531c93fb7e45e8eac9a9a4b7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardUpdateFormQuery$variables = Record<PropertyKey, never>;
export type BoardUpdateFormQuery$data = {
  readonly board: {
    readonly " $fragmentSpreads": FragmentRefs<"BoardUpdateFormFragment">;
  } | null | undefined;
};
export type BoardUpdateFormQuery = {
  response: BoardUpdateFormQuery$data;
  variables: BoardUpdateFormQuery$variables;
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
    "name": "BoardUpdateFormQuery",
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
            "name": "BoardUpdateFormFragment"
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
    "name": "BoardUpdateFormQuery",
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
            "name": "isDefault",
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
            "name": "explanationsLength",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "displayTranslations",
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
    "cacheID": "5fd0a7bd67e188d22e0510412fd383bc",
    "id": null,
    "metadata": {},
    "name": "BoardUpdateFormQuery",
    "operationKind": "query",
    "text": "query BoardUpdateFormQuery {\n  board(id: \"1\") {\n    ...BoardUpdateFormFragment\n    id\n  }\n}\n\nfragment BoardUpdateFormFragment on BoardNode {\n  id\n  name\n  isPublic\n  isDefault\n  explanationsLanguage\n  explanationsLength\n  displayTranslations\n  enabledLanguages\n  ...DeleteBoardButtonFragment\n}\n\nfragment DeleteBoardButtonFragment on BoardNode {\n  id\n}\n"
  }
};
})();

(node as any).hash = "54800850a7fcd18c0986d6a91e53ce33";

export default node;
