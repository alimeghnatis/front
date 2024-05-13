/**
 * @generated SignedSource<<af4a0a3f26f5e88a76ff347eca0aef37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionsBoardMembershipRoleChoices = "ADMIN" | "MEMBER" | "OWNER" | "%future added value";
export type CreateBoardMutationInput = {
  clientMutationId?: string | null | undefined;
  defaultForUser?: string | null | undefined;
  displayTranslations?: boolean | null | undefined;
  enabledLanguages?: any | null | undefined;
  explanationsLanguage?: string | null | undefined;
  explanationsLength?: string | null | undefined;
  id?: string | null | undefined;
  isDefault?: boolean | null | undefined;
  isPublic?: boolean | null | undefined;
  iso6391?: string | null | undefined;
  iso6392?: string | null | undefined;
  iso6393?: string | null | undefined;
  name: string;
  openaiThreadId?: string | null | undefined;
};
export type BoardCreateFormCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateBoardMutationInput;
};
export type BoardCreateFormCreateMutation$data = {
  readonly createBoard: {
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly instance: {
      readonly created: any;
      readonly displayTranslations: boolean;
      readonly enabledLanguages: any;
      readonly explanationsLanguage: string;
      readonly explanationsLength: string;
      readonly id: string;
      readonly isDefault: boolean;
      readonly isPublic: boolean;
      readonly memberships: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly board: {
              readonly id: string;
              readonly name: string;
            };
            readonly id: string;
            readonly role: ExpressionsBoardMembershipRoleChoices;
          } | null | undefined;
        } | null | undefined>;
      };
      readonly name: string;
      readonly newExpressionsCount: number | null | undefined;
      readonly updated: any;
      readonly " $fragmentSpreads": FragmentRefs<"BoardFragment" | "BoardUpdateFormFragment" | "ChatFragment" | "ModeSelectorFragment" | "VariantBoardFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type BoardCreateFormCreateMutation = {
  response: BoardCreateFormCreateMutation$data;
  variables: BoardCreateFormCreateMutation$variables;
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isPublic",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDefault",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updated",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayTranslations",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "explanationsLanguage",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "explanationsLength",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "enabledLanguages",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "BoardMembershipNode",
  "kind": "LinkedField",
  "name": "node",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v13/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "BoardNode",
      "kind": "LinkedField",
      "name": "board",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v15 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "newExpressionsCount",
      "storageKey": null
    }
  ]
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "ErrorType",
  "kind": "LinkedField",
  "name": "errors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "messages",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6391",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6392",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6393",
  "storageKey": null
},
v20 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v21 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v27 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 4
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardCreateFormCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateBoardMutationPayload",
        "kind": "LinkedField",
        "name": "createBoard",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BoardNode",
            "kind": "LinkedField",
            "name": "instance",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BoardMembershipNodeConnection",
                "kind": "LinkedField",
                "name": "memberships",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BoardMembershipNodeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "BoardFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "BoardUpdateFormFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "VariantBoardFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ChatFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ModeSelectorFragment"
              },
              (v15/*: any*/)
            ],
            "storageKey": null
          },
          (v16/*: any*/)
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
    "name": "BoardCreateFormCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateBoardMutationPayload",
        "kind": "LinkedField",
        "name": "createBoard",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BoardNode",
            "kind": "LinkedField",
            "name": "instance",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BoardMembershipNodeConnection",
                "kind": "LinkedField",
                "name": "memberships",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BoardMembershipNodeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "filters": null,
                        "handle": "appendNode",
                        "key": "",
                        "kind": "LinkedHandle",
                        "name": "node",
                        "handleArgs": [
                          {
                            "kind": "Variable",
                            "name": "connections",
                            "variableName": "connections"
                          },
                          {
                            "kind": "Literal",
                            "name": "edgeTypeName",
                            "value": "BoardMembershipNodeEdge"
                          }
                        ]
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              {
                "alias": null,
                "args": (v20/*: any*/),
                "concreteType": "GroupNodeConnection",
                "kind": "LinkedField",
                "name": "groups",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GroupNodeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "GroupNode",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": (v21/*: any*/),
                            "concreteType": "ExpressionNodeConnection",
                            "kind": "LinkedField",
                            "name": "expressions",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ExpressionNodeEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ExpressionNode",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v3/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isProcessed",
                                        "storageKey": null
                                      },
                                      (v7/*: any*/),
                                      (v17/*: any*/),
                                      (v18/*: any*/),
                                      (v19/*: any*/),
                                      (v22/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "correctedContent",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isBookmarked",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "audioUrl",
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ClientExtension",
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "isNew",
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "translation",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "grammarExplanation",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "generalExplanation",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "wordsExplanation",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "changes",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "rating",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "ratingComment",
                                        "storageKey": null
                                      },
                                      (v23/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v24/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v25/*: any*/)
                            ],
                            "storageKey": "expressions(first:50)"
                          },
                          {
                            "alias": null,
                            "args": (v21/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "DefaultGroupFragment_expressions",
                            "kind": "LinkedHandle",
                            "name": "expressions"
                          },
                          (v23/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v25/*: any*/)
                ],
                "storageKey": "groups(first:20)"
              },
              {
                "alias": null,
                "args": (v20/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "BoardFragment_groups",
                "kind": "LinkedHandle",
                "name": "groups"
              },
              (v15/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "openaiThreadId",
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
                  (v3/*: any*/),
                  (v26/*: any*/),
                  {
                    "alias": null,
                    "args": (v27/*: any*/),
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
                            "concreteType": "LanguageMessageType",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
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
                              (v13/*: any*/),
                              (v26/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "content",
                                "plural": false,
                                "selections": [
                                  (v23/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v22/*: any*/)
                                    ],
                                    "type": "UserLanguageMessageType",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v22/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "suggestions",
                                        "storageKey": null
                                      },
                                      (v17/*: any*/),
                                      (v18/*: any*/),
                                      (v19/*: any*/)
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
                              },
                              (v23/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v24/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PageInfo",
                        "kind": "LinkedField",
                        "name": "pageInfo",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hasPreviousPage",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "startCursor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "messages(last:4)"
                  },
                  {
                    "alias": null,
                    "args": (v27/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "ThreadFragment_messages",
                    "kind": "LinkedHandle",
                    "name": "messages"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v16/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "97422ec0209642f2cd063244f6349445",
    "id": null,
    "metadata": {},
    "name": "BoardCreateFormCreateMutation",
    "operationKind": "mutation",
    "text": "mutation BoardCreateFormCreateMutation(\n  $input: CreateBoardMutationInput!\n) {\n  createBoard(input: $input) {\n    instance {\n      id\n      name\n      isPublic\n      isDefault\n      created\n      updated\n      displayTranslations\n      explanationsLanguage\n      explanationsLength\n      enabledLanguages\n      memberships {\n        edges {\n          node {\n            id\n            role\n            board {\n              id\n              name\n            }\n          }\n        }\n      }\n      ...BoardFragment\n      ...BoardUpdateFormFragment\n      ...VariantBoardFragment\n      ...ChatFragment\n      ...ModeSelectorFragment\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n\nfragment ActionsBarFragment on ThreadNode {\n  id\n  messages(last: 4) {\n    edges {\n      cursor\n    }\n  }\n}\n\nfragment AudioButtonFragment on ExpressionNode {\n  id\n  audioUrl\n  isProcessed\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment BoardFragment on BoardNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  created\n  groups(first: 20) {\n    edges {\n      node {\n        ...DefaultGroupFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment BoardUpdateFormFragment on BoardNode {\n  id\n  name\n  isPublic\n  isDefault\n  explanationsLanguage\n  explanationsLength\n  displayTranslations\n  enabledLanguages\n  ...DeleteBoardButtonFragment\n}\n\nfragment BookmarkButtonFragment on ExpressionNode {\n  id\n  isBookmarked\n  isProcessed\n}\n\nfragment ChatFragment on BoardNode {\n  id\n  openaiThreadId\n  thread {\n    ...ThreadFragment\n    ...ActionsBarFragment\n    id\n  }\n  ...CreateFormFragment\n}\n\nfragment CreateFormFragment on BoardNode {\n  openaiThreadId\n}\n\nfragment DefaultExpressionFragment on ExpressionNode {\n  id\n  isProcessed\n  created\n  iso6391\n  iso6392\n  iso6393\n  ...ExpressionFragment\n}\n\nfragment DefaultGroupFragment on GroupNode {\n  id\n  created\n  expressions(first: 50) {\n    edges {\n      node {\n        ...DefaultExpressionFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment DeleteBoardButtonFragment on BoardNode {\n  id\n}\n\nfragment DeleteButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment DetailsButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment DetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  translation\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  audioUrl\n  created\n  changes\n  ...RatingFormFragment\n}\n\nfragment ExpressionFragment on ExpressionNode {\n  id\n  content\n  iso6391\n  iso6392\n  iso6393\n  correctedContent\n  created\n  isProcessed\n  isBookmarked\n  ...AudioButtonFragment\n  ...DeleteButtonFragment\n  ...BookmarkButtonFragment\n  ...DetailsButtonFragment\n  ...VariantButtonFragment\n  ...DetailsFragment\n  ...VariantFragment\n}\n\nfragment MessageFragment on LanguageMessageType {\n  id\n  runId\n  threadId\n  role\n  createdAt\n  content {\n    __typename\n    ... on UserLanguageMessageType {\n      content\n    }\n    ... on AssistantLanguageMessageType {\n      content\n      suggestions\n      ...SuggestionGroupFragment\n    }\n  }\n}\n\nfragment ModeSelectorFragment on BoardNode {\n  id\n}\n\nfragment RatingFormFragment on ExpressionNode {\n  id\n  rating\n  ratingComment\n}\n\nfragment SuggestionGroupFragment on AssistantLanguageMessageType {\n  suggestions\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment ThreadFragment on ThreadNode {\n  id\n  createdAt\n  messages(last: 4) {\n    edges {\n      node {\n        id\n        ...MessageFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment VariantBoardFragment on BoardNode {\n  id\n  enabledLanguages\n}\n\nfragment VariantButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment VariantFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  created\n}\n"
  }
};
})();

(node as any).hash = "45b09d069b6f1107a19ba39d2d0710cb";

export default node;
