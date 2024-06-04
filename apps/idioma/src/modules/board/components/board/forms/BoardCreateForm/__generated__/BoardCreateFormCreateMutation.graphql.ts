/**
 * @generated SignedSource<<511fbc3665c4ef0c512e85ddcd1099cc>>
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
  description?: string | null | undefined;
  displayGeneral?: boolean | null | undefined;
  displayGrammar?: boolean | null | undefined;
  displayTranslations?: boolean | null | undefined;
  displayWords?: boolean | null | undefined;
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
      readonly description: string | null | undefined;
      readonly displayGeneral: boolean;
      readonly displayGrammar: boolean;
      readonly displayTranslations: boolean;
      readonly displayWords: boolean;
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
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isPublic",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDefault",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updated",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayTranslations",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayGeneral",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayGrammar",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayWords",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "explanationsLanguage",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "explanationsLength",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "enabledLanguages",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "BoardMembershipNodeEdge",
  "kind": "LinkedField",
  "name": "edges",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BoardMembershipNode",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v17/*: any*/),
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
    }
  ],
  "storageKey": null
},
v19 = {
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
v20 = {
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
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6391",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6392",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6393",
  "storageKey": null
},
v24 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v25 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v29 = {
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
v30 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 4
  }
],
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
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
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BoardMembershipNodeConnection",
                "kind": "LinkedField",
                "name": "memberships",
                "plural": false,
                "selections": [
                  (v18/*: any*/)
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
              (v19/*: any*/)
            ],
            "storageKey": null
          },
          (v20/*: any*/)
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
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BoardMembershipNodeConnection",
                "kind": "LinkedField",
                "name": "memberships",
                "plural": false,
                "selections": [
                  (v18/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "filters": null,
                    "handle": "appendEdge",
                    "key": "",
                    "kind": "LinkedHandle",
                    "name": "edges",
                    "handleArgs": [
                      {
                        "kind": "Variable",
                        "name": "connections",
                        "variableName": "connections"
                      }
                    ]
                  }
                ],
                "storageKey": null
              },
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              {
                "alias": null,
                "args": (v24/*: any*/),
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
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": (v25/*: any*/),
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
                                      (v8/*: any*/),
                                      (v21/*: any*/),
                                      (v22/*: any*/),
                                      (v23/*: any*/),
                                      (v26/*: any*/),
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
                                        "name": "textDirection",
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
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ExpressionAnalysisNode",
                                        "kind": "LinkedField",
                                        "name": "analysis",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Word",
                                            "kind": "LinkedField",
                                            "name": "payloadV1",
                                            "plural": true,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "word",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "lemma",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "pos",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "Morphology",
                                                "kind": "LinkedField",
                                                "name": "morphology",
                                                "plural": false,
                                                "selections": [
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "tense",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "mood",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "voice",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "aspect",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "person",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "number",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "gender",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "case",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "politeness",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "clusivity",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "register",
                                                    "storageKey": null
                                                  }
                                                ],
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "Syntax",
                                                "kind": "LinkedField",
                                                "name": "syntax",
                                                "plural": false,
                                                "selections": [
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "function",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "head",
                                                    "storageKey": null
                                                  }
                                                ],
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          },
                                          (v8/*: any*/),
                                          (v3/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v27/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v28/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v29/*: any*/)
                            ],
                            "storageKey": "expressions(first:50)"
                          },
                          {
                            "alias": null,
                            "args": (v25/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "DefaultGroupFragment_expressions",
                            "kind": "LinkedHandle",
                            "name": "expressions"
                          },
                          (v27/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v28/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v29/*: any*/)
                ],
                "storageKey": "groups(first:20)"
              },
              {
                "alias": null,
                "args": (v24/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "BoardFragment_groups",
                "kind": "LinkedHandle",
                "name": "groups"
              },
              (v19/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ThreadNode",
                "kind": "LinkedField",
                "name": "thread",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": (v30/*: any*/),
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
                          (v28/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "LanguageMessageType",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v27/*: any*/),
                              (v3/*: any*/),
                              (v31/*: any*/),
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
                              (v17/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "content",
                                "plural": false,
                                "selections": [
                                  (v27/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v26/*: any*/)
                                    ],
                                    "type": "UserLanguageMessageType",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v26/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "suggestions",
                                        "storageKey": null
                                      },
                                      (v21/*: any*/),
                                      (v22/*: any*/),
                                      (v23/*: any*/)
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
                          }
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
                      },
                      {
                        "kind": "ClientExtension",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__id",
                            "storageKey": null
                          }
                        ]
                      }
                    ],
                    "storageKey": "messages(last:4)"
                  },
                  {
                    "alias": null,
                    "args": (v30/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "ResetChatButtonFragment_messages",
                    "kind": "LinkedHandle",
                    "name": "messages"
                  },
                  {
                    "alias": null,
                    "args": (v30/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "ThreadFragment_messages",
                    "kind": "LinkedHandle",
                    "name": "messages"
                  },
                  (v31/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "openaiThreadId",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v20/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "eb82959b23702bc2333f762421eece65",
    "id": null,
    "metadata": {},
    "name": "BoardCreateFormCreateMutation",
    "operationKind": "mutation",
    "text": "mutation BoardCreateFormCreateMutation(\n  $input: CreateBoardMutationInput!\n) {\n  createBoard(input: $input) {\n    instance {\n      id\n      name\n      description\n      isPublic\n      isDefault\n      created\n      updated\n      displayTranslations\n      displayGeneral\n      displayGrammar\n      displayWords\n      explanationsLanguage\n      explanationsLength\n      enabledLanguages\n      memberships {\n        edges {\n          node {\n            id\n            role\n            board {\n              id\n              name\n            }\n          }\n        }\n      }\n      ...BoardFragment\n      ...BoardUpdateFormFragment\n      ...VariantBoardFragment\n      ...ChatFragment\n      ...ModeSelectorFragment\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n\nfragment ActionsBarFragment on ThreadNode {\n  id\n  messages(last: 4) {\n    edges {\n      cursor\n    }\n  }\n}\n\nfragment AudioButtonFragment on ExpressionNode {\n  id\n  audioUrl\n  isProcessed\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment BoardFragment on BoardNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  created\n  groups(first: 20) {\n    edges {\n      node {\n        ...DefaultGroupFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment BoardUpdateFormFragment on BoardNode {\n  id\n  name\n  description\n  isPublic\n  isDefault\n  explanationsLanguage\n  explanationsLength\n  displayTranslations\n  displayGeneral\n  displayGrammar\n  displayWords\n  enabledLanguages\n  ...DeleteBoardButtonFragment\n  thread {\n    ...ResetChatButtonFragment\n    id\n  }\n}\n\nfragment BookmarkButtonFragment on ExpressionNode {\n  id\n  isBookmarked\n  isProcessed\n}\n\nfragment ChatFragment on BoardNode {\n  id\n  openaiThreadId\n  thread {\n    ...ThreadFragment\n    ...ActionsBarFragment\n    id\n  }\n  ...CreateFormFragment\n}\n\nfragment CreateFormFragment on BoardNode {\n  openaiThreadId\n}\n\nfragment DefaultExpressionFragment on ExpressionNode {\n  id\n  isProcessed\n  created\n  iso6391\n  iso6392\n  iso6393\n  ...ExpressionFragment\n}\n\nfragment DefaultGroupFragment on GroupNode {\n  id\n  created\n  expressions(first: 50) {\n    edges {\n      node {\n        ...DefaultExpressionFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment DeleteBoardButtonFragment on BoardNode {\n  id\n}\n\nfragment DeleteButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment DetailsButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment DetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  translation\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  audioUrl\n  created\n  changes\n  ...RatingFormFragment\n  ...MorphosaFragment\n}\n\nfragment ExpressionFragment on ExpressionNode {\n  id\n  content\n  iso6391\n  iso6392\n  iso6393\n  correctedContent\n  created\n  isProcessed\n  isBookmarked\n  textDirection\n  ...AudioButtonFragment\n  ...DeleteButtonFragment\n  ...BookmarkButtonFragment\n  ...DetailsButtonFragment\n  ...VariantButtonFragment\n  ...DetailsFragment\n  ...VariantFragment\n}\n\nfragment MessageFragment on LanguageMessageType {\n  id\n  runId\n  threadId\n  role\n  createdAt\n  content {\n    __typename\n    ... on UserLanguageMessageType {\n      content\n    }\n    ... on AssistantLanguageMessageType {\n      content\n      suggestions\n      ...SuggestionGroupFragment\n    }\n  }\n}\n\nfragment ModeSelectorFragment on BoardNode {\n  id\n}\n\nfragment MorphosaFragment on ExpressionNode {\n  id\n  textDirection\n  analysis {\n    payloadV1 {\n      word\n      lemma\n      pos\n      morphology {\n        tense\n        mood\n        voice\n        aspect\n        person\n        number\n        gender\n        case\n        politeness\n        clusivity\n        register\n      }\n      syntax {\n        function\n        head\n      }\n      ...WordAnalysisFragment\n    }\n    created\n    id\n  }\n}\n\nfragment RatingFormFragment on ExpressionNode {\n  id\n  rating\n  ratingComment\n}\n\nfragment ResetChatButtonFragment on ThreadNode {\n  id\n  messages(last: 4) {\n    edges {\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment SuggestionGroupFragment on AssistantLanguageMessageType {\n  suggestions\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment ThreadFragment on ThreadNode {\n  id\n  createdAt\n  messages(last: 4) {\n    edges {\n      node {\n        id\n        createdAt\n        ...MessageFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment VariantBoardFragment on BoardNode {\n  id\n  enabledLanguages\n}\n\nfragment VariantButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment VariantFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  created\n}\n\nfragment WordAnalysisFragment on Word {\n  word\n  lemma\n  pos\n  morphology {\n    tense\n    mood\n    voice\n    aspect\n    person\n    number\n    gender\n    case\n    politeness\n    clusivity\n    register\n  }\n  syntax {\n    function\n    head\n  }\n}\n"
  }
};
})();

(node as any).hash = "1aacea1f4c17434ee0e7678a72c5d25b";

export default node;
