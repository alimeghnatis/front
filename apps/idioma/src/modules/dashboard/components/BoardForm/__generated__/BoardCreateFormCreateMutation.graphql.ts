/**
 * @generated SignedSource<<07284380faa555bdad3932b0510b8ac8>>
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
      readonly " $fragmentSpreads": FragmentRefs<"BoardFragment" | "BoardUpdateFormFragment" | "ExpressionVariantBoardFragment">;
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
  "name": "explanationsLanguage",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "explanationsLength",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "enabledLanguages",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "BoardMembershipNode",
  "kind": "LinkedField",
  "name": "node",
  "plural": false,
  "selections": [
    (v3/*: any*/),
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
v11 = {
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
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6391",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6392",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6393",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v16 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v17 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v20 = {
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
                      (v10/*: any*/)
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
                "name": "ExpressionVariantBoardFragment"
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/)
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
                      (v10/*: any*/),
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
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              {
                "alias": null,
                "args": (v16/*: any*/),
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
                          (v15/*: any*/),
                          {
                            "alias": null,
                            "args": (v17/*: any*/),
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
                                      (v15/*: any*/),
                                      (v12/*: any*/),
                                      (v13/*: any*/),
                                      (v14/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "content",
                                        "storageKey": null
                                      },
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
                                      (v18/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v19/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v20/*: any*/)
                            ],
                            "storageKey": "expressions(first:50)"
                          },
                          {
                            "alias": null,
                            "args": (v17/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "DefaultGroupFragment_expressions",
                            "kind": "LinkedHandle",
                            "name": "expressions"
                          },
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v19/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v20/*: any*/)
                ],
                "storageKey": "groups(first:20)"
              },
              {
                "alias": null,
                "args": (v16/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "BoardFragment_groups",
                "kind": "LinkedHandle",
                "name": "groups"
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0dfaa8157e75528b04668af9b68b28ca",
    "id": null,
    "metadata": {},
    "name": "BoardCreateFormCreateMutation",
    "operationKind": "mutation",
    "text": "mutation BoardCreateFormCreateMutation(\n  $input: CreateBoardMutationInput!\n) {\n  createBoard(input: $input) {\n    instance {\n      id\n      name\n      isPublic\n      isDefault\n      explanationsLanguage\n      explanationsLength\n      enabledLanguages\n      memberships {\n        edges {\n          node {\n            id\n            role\n            board {\n              id\n              name\n            }\n          }\n        }\n      }\n      ...BoardFragment\n      ...BoardUpdateFormFragment\n      ...ExpressionVariantBoardFragment\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n\nfragment AudioButtonFragment on ExpressionNode {\n  id\n  audioUrl\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment BoardFragment on BoardNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  created\n  groups(first: 20) {\n    edges {\n      node {\n        ...DefaultGroupFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment BoardUpdateFormFragment on BoardNode {\n  id\n  name\n  isPublic\n  isDefault\n  explanationsLanguage\n  explanationsLength\n  enabledLanguages\n  ...DeleteBoardButtonFragment\n}\n\nfragment BookmarkButtonFragment on ExpressionNode {\n  id\n  isBookmarked\n}\n\nfragment DefaultExpressionFragment on ExpressionNode {\n  id\n  isProcessed\n  created\n  iso6391\n  iso6392\n  iso6393\n  ...ExpressionFragment\n}\n\nfragment DefaultGroupFragment on GroupNode {\n  id\n  created\n  expressions(first: 50) {\n    edges {\n      node {\n        ...DefaultExpressionFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment DeleteBoardButtonFragment on BoardNode {\n  id\n}\n\nfragment DeleteButtonFragment on ExpressionNode {\n  id\n}\n\nfragment ExpressionDetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  audioUrl\n  created\n  changes\n  ...RatingFormFragment\n}\n\nfragment ExpressionFragment on ExpressionNode {\n  id\n  content\n  iso6391\n  iso6392\n  iso6393\n  correctedContent\n  created\n  isProcessed\n  isBookmarked\n  ...AudioButtonFragment\n  ...DeleteButtonFragment\n  ...BookmarkButtonFragment\n  ...ExpressionDetailsFragment\n  ...ExpressionVariantFragment\n}\n\nfragment ExpressionVariantBoardFragment on BoardNode {\n  id\n  enabledLanguages\n}\n\nfragment ExpressionVariantFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  created\n}\n\nfragment RatingFormFragment on ExpressionNode {\n  id\n  rating\n  ratingComment\n}\n"
  }
};
})();

(node as any).hash = "aabeb9756f7799743763732bb2bccbe8";

export default node;
