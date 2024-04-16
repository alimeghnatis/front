/**
 * @generated SignedSource<<22dccd34fd81de447b3dba7d59e39bd0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateExpressionMutationInput = {
  audioKey?: string | null | undefined;
  audioUrl?: string | null | undefined;
  board?: string | null | undefined;
  category?: string | null | undefined;
  changes?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  content?: string | null | undefined;
  correctedContent?: string | null | undefined;
  generalExplanation?: string | null | undefined;
  grammarExplanation?: string | null | undefined;
  group?: string | null | undefined;
  id?: string | null | undefined;
  iso6391?: string | null | undefined;
  iso6392?: string | null | undefined;
  iso6393?: string | null | undefined;
  variant?: string | null | undefined;
  variantFrom?: string | null | undefined;
  variantName?: string | null | undefined;
  variantWord?: string | null | undefined;
  wordsExplanation?: string | null | undefined;
};
export type AdditionFormCreateExpressionMutation$variables = {
  input: CreateExpressionMutationInput;
};
export type AdditionFormCreateExpressionMutation$data = {
  readonly createExpression: {
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly instance: {
      readonly audioKey: string | null | undefined;
      readonly audioUrl: string | null | undefined;
      readonly content: string;
      readonly correctedContent: string | null | undefined;
      readonly created: any;
      readonly generalExplanation: string | null | undefined;
      readonly grammarExplanation: string | null | undefined;
      readonly group: {
        readonly " $fragmentSpreads": FragmentRefs<"GroupFragment">;
      };
      readonly id: string;
      readonly wordsExplanation: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type AdditionFormCreateExpressionMutation = {
  response: AdditionFormCreateExpressionMutation$data;
  variables: AdditionFormCreateExpressionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "name": "content",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "correctedContent",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "generalExplanation",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "grammarExplanation",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "wordsExplanation",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "audioUrl",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "audioKey",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
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
v12 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AdditionFormCreateExpressionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateExpressionMutationPayload",
        "kind": "LinkedField",
        "name": "createExpression",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ExpressionNode",
            "kind": "LinkedField",
            "name": "instance",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "GroupNode",
                "kind": "LinkedField",
                "name": "group",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "GroupFragment"
                  }
                ],
                "storageKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AdditionFormCreateExpressionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateExpressionMutationPayload",
        "kind": "LinkedField",
        "name": "createExpression",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ExpressionNode",
            "kind": "LinkedField",
            "name": "instance",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "GroupNode",
                "kind": "LinkedField",
                "name": "group",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": (v12/*: any*/),
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
                              (v3/*: any*/),
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
                              },
                              (v4/*: any*/),
                              (v8/*: any*/),
                              (v10/*: any*/),
                              (v6/*: any*/),
                              (v5/*: any*/),
                              (v7/*: any*/),
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
                                "name": "__typename",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "cursor",
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
                      }
                    ],
                    "storageKey": "expressions(first:50)"
                  },
                  {
                    "alias": null,
                    "args": (v12/*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "GroupFragment_expressions",
                    "kind": "LinkedHandle",
                    "name": "expressions"
                  }
                ],
                "storageKey": null
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
    "cacheID": "ff338cbb2f3424ea8cb02ddc6c55c4d2",
    "id": null,
    "metadata": {},
    "name": "AdditionFormCreateExpressionMutation",
    "operationKind": "mutation",
    "text": "mutation AdditionFormCreateExpressionMutation(\n  $input: CreateExpressionMutationInput!\n) {\n  createExpression(input: $input) {\n    instance {\n      id\n      content\n      correctedContent\n      generalExplanation\n      grammarExplanation\n      wordsExplanation\n      audioUrl\n      audioKey\n      created\n      group {\n        ...GroupFragment\n        id\n      }\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n\nfragment ExpressionDetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  audioUrl\n  created\n  changes\n}\n\nfragment ExpressionFragment on ExpressionNode {\n  id\n  content\n  iso6391\n  iso6392\n  iso6393\n  correctedContent\n  audioUrl\n  created\n  ...ExpressionDetailsFragment\n  ...ExpressionVariantFragment\n}\n\nfragment ExpressionVariantFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  created\n}\n\nfragment GroupFragment on GroupNode {\n  id\n  created\n  expressions(first: 50) {\n    edges {\n      node {\n        ...ExpressionFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6e167ab00a4168f82bd926474862d08e";

export default node;
