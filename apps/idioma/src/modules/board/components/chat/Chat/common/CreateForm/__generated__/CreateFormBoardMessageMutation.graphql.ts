/**
 * @generated SignedSource<<2a037920f7f0bbb222afc1623a3150b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateBoardMessageInput = {
  boardId: string;
  clientMutationId?: string | null | undefined;
  content: string;
};
export type CreateFormBoardMessageMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateBoardMessageInput;
};
export type CreateFormBoardMessageMutation$data = {
  readonly createBoardMessage: {
    readonly errors: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly instances: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"MessageFragment">;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type CreateFormBoardMessageMutation = {
  response: CreateFormBoardMessageMutation$data;
  variables: CreateFormBoardMessageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "errors",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateFormBoardMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateBoardMessagePayload",
        "kind": "LinkedField",
        "name": "createBoardMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LanguageMessageType",
            "kind": "LinkedField",
            "name": "instances",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MessageFragment"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateFormBoardMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateBoardMessagePayload",
        "kind": "LinkedField",
        "name": "createBoardMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LanguageMessageType",
            "kind": "LinkedField",
            "name": "instances",
            "plural": true,
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
                "name": "runId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "threadId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "role",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "content",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "type": "UserLanguageMessageType",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "suggestions",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "iso6391",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "iso6392",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "iso6393",
                        "storageKey": null
                      }
                    ],
                    "type": "AssistantLanguageMessageType",
                    "abstractKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isLoading",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "instances",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "LanguageMessageTypeEdge"
              }
            ]
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4e3d254e200cae272f572cb3ffd4af22",
    "id": null,
    "metadata": {},
    "name": "CreateFormBoardMessageMutation",
    "operationKind": "mutation",
    "text": "mutation CreateFormBoardMessageMutation(\n  $input: CreateBoardMessageInput!\n) {\n  createBoardMessage(input: $input) {\n    instances {\n      ...MessageFragment\n      id\n    }\n    errors\n  }\n}\n\nfragment MessageFragment on LanguageMessageType {\n  id\n  runId\n  threadId\n  role\n  createdAt\n  content {\n    __typename\n    ... on UserLanguageMessageType {\n      content\n    }\n    ... on AssistantLanguageMessageType {\n      content\n      suggestions\n      ...SuggestionGroupFragment\n    }\n  }\n}\n\nfragment SuggestionGroupFragment on AssistantLanguageMessageType {\n  suggestions\n  iso6391\n  iso6392\n  iso6393\n}\n"
  }
};
})();

(node as any).hash = "b63b6768b805fd6d267c9f428c5af774";

export default node;
