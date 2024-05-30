/**
 * @generated SignedSource<<dc843ac7bad6cf87b8050c309bb281b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardUpdateFormStoriesQuery$variables = Record<PropertyKey, never>;
export type BoardUpdateFormStoriesQuery$data = {
  readonly board: {
    readonly " $fragmentSpreads": FragmentRefs<"BoardUpdateFormFragment">;
  } | null | undefined;
};
export type BoardUpdateFormStoriesQuery = {
  response: BoardUpdateFormStoriesQuery$data;
  variables: BoardUpdateFormStoriesQuery$variables;
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
    "name": "BoardUpdateFormStoriesQuery",
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
    "name": "BoardUpdateFormStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "BoardNode",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "name": "displayGeneral",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "displayGrammar",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "displayWords",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "enabledLanguages",
            "storageKey": null
          },
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
          }
        ],
        "storageKey": "board(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "fbda7a396717fab49299602cfdf21ac9",
    "id": null,
    "metadata": {},
    "name": "BoardUpdateFormStoriesQuery",
    "operationKind": "query",
    "text": "query BoardUpdateFormStoriesQuery {\n  board(id: \"1\") {\n    ...BoardUpdateFormFragment\n    id\n  }\n}\n\nfragment BoardUpdateFormFragment on BoardNode {\n  id\n  name\n  isPublic\n  isDefault\n  explanationsLanguage\n  explanationsLength\n  displayTranslations\n  displayGeneral\n  displayGrammar\n  displayWords\n  enabledLanguages\n  ...DeleteBoardButtonFragment\n  thread {\n    ...ResetChatButtonFragment\n    id\n  }\n}\n\nfragment DeleteBoardButtonFragment on BoardNode {\n  id\n}\n\nfragment ResetChatButtonFragment on ThreadNode {\n  id\n  messages(last: 4) {\n    edges {\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d480268a09713e84ee65b351be164291";

export default node;
