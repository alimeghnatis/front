/**
 * @generated SignedSource<<4789888008a14bc4dadf87b88418b76f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResetChatButtonStoriesQuery$variables = Record<PropertyKey, never>;
export type ResetChatButtonStoriesQuery$data = {
  readonly board: {
    readonly thread: {
      readonly " $fragmentSpreads": FragmentRefs<"ResetChatButtonFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type ResetChatButtonStoriesQuery = {
  response: ResetChatButtonStoriesQuery$data;
  variables: ResetChatButtonStoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
],
v1 = {
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
    "name": "ResetChatButtonStoriesQuery",
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
            "concreteType": "ThreadNode",
            "kind": "LinkedField",
            "name": "thread",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ResetChatButtonFragment"
              }
            ],
            "storageKey": null
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
    "name": "ResetChatButtonStoriesQuery",
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
            "concreteType": "ThreadNode",
            "kind": "LinkedField",
            "name": "thread",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 4
                  }
                ],
                "concreteType": "LanguageMessageTypeConnection",
                "kind": "LinkedField",
                "name": "messages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "LanguageMessageTypeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "messages(last:4)"
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "board(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "8f9e10ac99bb92d1a8ee722bcb17a50b",
    "id": null,
    "metadata": {},
    "name": "ResetChatButtonStoriesQuery",
    "operationKind": "query",
    "text": "query ResetChatButtonStoriesQuery {\n  board(id: \"1\") {\n    thread {\n      ...ResetChatButtonFragment\n      id\n    }\n    id\n  }\n}\n\nfragment ResetChatButtonFragment on ThreadNode {\n  id\n  messages(last: 4) {\n    edges {\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7223e8adf49218512306c03b32215f53";

export default node;
