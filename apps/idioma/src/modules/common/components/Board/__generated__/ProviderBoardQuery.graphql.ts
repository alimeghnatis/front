/**
 * @generated SignedSource<<7e5d1967d2c1b4c6e83a4f6c94537c61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderBoardQuery$variables = {
  id: string;
};
export type ProviderBoardQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBoardFragment">;
};
export type ProviderBoardQuery = {
  response: ProviderBoardQuery$data;
  variables: ProviderBoardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6391",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6392",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iso6393",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v12 = {
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
v13 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 4
  }
],
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProviderBoardQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ProviderBoardFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProviderBoardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BoardNode",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v3/*: any*/),
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
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": (v7/*: any*/),
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
                      (v2/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": (v8/*: any*/),
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
                                  (v2/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "isProcessed",
                                    "storageKey": null
                                  },
                                  (v3/*: any*/),
                                  (v4/*: any*/),
                                  (v5/*: any*/),
                                  (v6/*: any*/),
                                  (v9/*: any*/),
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
                                      (v3/*: any*/),
                                      (v2/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/)
                        ],
                        "storageKey": "expressions(first:50)"
                      },
                      {
                        "alias": null,
                        "args": (v8/*: any*/),
                        "filters": null,
                        "handle": "connection",
                        "key": "DefaultGroupFragment_expressions",
                        "kind": "LinkedHandle",
                        "name": "expressions"
                      },
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              (v12/*: any*/)
            ],
            "storageKey": "groups(first:20)"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "BoardFragment_groups",
            "kind": "LinkedHandle",
            "name": "groups"
          },
          {
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": (v13/*: any*/),
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
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "LanguageMessageType",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          (v2/*: any*/),
                          (v14/*: any*/),
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
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "content",
                            "plural": false,
                            "selections": [
                              (v10/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v9/*: any*/)
                                ],
                                "type": "UserLanguageMessageType",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v9/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "suggestions",
                                    "storageKey": null
                                  },
                                  (v4/*: any*/),
                                  (v5/*: any*/),
                                  (v6/*: any*/)
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
                "args": (v13/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ResetChatButtonFragment_messages",
                "kind": "LinkedHandle",
                "name": "messages"
              },
              {
                "alias": null,
                "args": (v13/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ThreadFragment_messages",
                "kind": "LinkedHandle",
                "name": "messages"
              },
              (v14/*: any*/)
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
      }
    ]
  },
  "params": {
    "cacheID": "9b72cfdccc114585170cd9ba7934de4a",
    "id": null,
    "metadata": {},
    "name": "ProviderBoardQuery",
    "operationKind": "query",
    "text": "query ProviderBoardQuery(\n  $id: ID!\n) {\n  ...ProviderBoardFragment_1Bmzm5\n}\n\nfragment ActionsBarFragment on ThreadNode {\n  id\n  messages(last: 4) {\n    edges {\n      cursor\n    }\n  }\n}\n\nfragment AudioButtonFragment on ExpressionNode {\n  id\n  audioUrl\n  isProcessed\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment BoardFragment on BoardNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  created\n  groups(first: 20) {\n    edges {\n      node {\n        ...DefaultGroupFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment BoardUpdateFormFragment on BoardNode {\n  id\n  name\n  description\n  isPublic\n  isDefault\n  explanationsLanguage\n  explanationsLength\n  displayTranslations\n  displayGeneral\n  displayGrammar\n  displayWords\n  enabledLanguages\n  ...DeleteBoardButtonFragment\n  thread {\n    ...ResetChatButtonFragment\n    id\n  }\n}\n\nfragment BookmarkButtonFragment on ExpressionNode {\n  id\n  isBookmarked\n  isProcessed\n}\n\nfragment ChatFragment on BoardNode {\n  id\n  openaiThreadId\n  thread {\n    ...ThreadFragment\n    ...ActionsBarFragment\n    id\n  }\n  ...CreateFormFragment\n}\n\nfragment CreateFormFragment on BoardNode {\n  openaiThreadId\n}\n\nfragment DefaultExpressionFragment on ExpressionNode {\n  id\n  isProcessed\n  created\n  iso6391\n  iso6392\n  iso6393\n  ...ExpressionFragment\n}\n\nfragment DefaultGroupFragment on GroupNode {\n  id\n  created\n  expressions(first: 50) {\n    edges {\n      node {\n        ...DefaultExpressionFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment DeleteBoardButtonFragment on BoardNode {\n  id\n}\n\nfragment DeleteButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment DetailsButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment DetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  translation\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  audioUrl\n  created\n  changes\n  ...RatingFormFragment\n  ...MorphosaFragment\n}\n\nfragment ExpressionFragment on ExpressionNode {\n  id\n  content\n  iso6391\n  iso6392\n  iso6393\n  correctedContent\n  created\n  isProcessed\n  isBookmarked\n  ...AudioButtonFragment\n  ...DeleteButtonFragment\n  ...BookmarkButtonFragment\n  ...DetailsButtonFragment\n  ...VariantButtonFragment\n  ...DetailsFragment\n  ...VariantFragment\n}\n\nfragment MessageFragment on LanguageMessageType {\n  id\n  runId\n  threadId\n  role\n  createdAt\n  content {\n    __typename\n    ... on UserLanguageMessageType {\n      content\n    }\n    ... on AssistantLanguageMessageType {\n      content\n      suggestions\n      ...SuggestionGroupFragment\n    }\n  }\n}\n\nfragment ModeSelectorFragment on BoardNode {\n  id\n}\n\nfragment MorphosaFragment on ExpressionNode {\n  id\n  analysis {\n    payloadV1 {\n      word\n      lemma\n      pos\n      morphology {\n        tense\n        mood\n        voice\n        aspect\n        person\n        number\n        gender\n        case\n        politeness\n        clusivity\n        register\n      }\n      syntax {\n        function\n        head\n      }\n      ...WordAnalysisFragment\n    }\n    created\n    id\n  }\n}\n\nfragment ProviderBoardFragment_1Bmzm5 on Query {\n  board(id: $id) {\n    id\n    name\n    created\n    updated\n    displayTranslations\n    displayGeneral\n    displayGrammar\n    displayWords\n    ...BoardFragment\n    ...BoardUpdateFormFragment\n    ...VariantBoardFragment\n    ...ChatFragment\n    ...ModeSelectorFragment\n  }\n}\n\nfragment RatingFormFragment on ExpressionNode {\n  id\n  rating\n  ratingComment\n}\n\nfragment ResetChatButtonFragment on ThreadNode {\n  id\n  messages(last: 4) {\n    edges {\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment SuggestionGroupFragment on AssistantLanguageMessageType {\n  suggestions\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment ThreadFragment on ThreadNode {\n  id\n  createdAt\n  messages(last: 4) {\n    edges {\n      node {\n        id\n        createdAt\n        ...MessageFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment VariantBoardFragment on BoardNode {\n  id\n  enabledLanguages\n}\n\nfragment VariantButtonFragment on ExpressionNode {\n  id\n  isProcessed\n}\n\nfragment VariantFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  created\n}\n\nfragment WordAnalysisFragment on Word {\n  word\n  lemma\n  pos\n  morphology {\n    tense\n    mood\n    voice\n    aspect\n    person\n    number\n    gender\n    case\n    politeness\n    clusivity\n    register\n  }\n  syntax {\n    function\n    head\n  }\n}\n"
  }
};
})();

(node as any).hash = "e791df30302895de676d8737f6286545";

export default node;
