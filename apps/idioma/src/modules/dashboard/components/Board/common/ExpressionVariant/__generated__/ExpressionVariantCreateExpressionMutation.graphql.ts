/**
 * @generated SignedSource<<4168a8bf2e24646bb35e33240dde7162>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
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
export type ExpressionVariantCreateExpressionMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateExpressionMutationInput;
};
export type ExpressionVariantCreateExpressionMutation$data = {
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
      readonly id: string;
      readonly iso6391: string | null | undefined;
      readonly iso6392: string | null | undefined;
      readonly iso6393: string;
      readonly variantName: string | null | undefined;
      readonly variantWord: string | null | undefined;
      readonly wordsExplanation: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ExpressionVariantCreateExpressionMutation = {
  response: ExpressionVariantCreateExpressionMutation$data;
  variables: ExpressionVariantCreateExpressionMutation$variables;
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
  "concreteType": "ExpressionNode",
  "kind": "LinkedField",
  "name": "instance",
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
      "name": "generalExplanation",
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
      "name": "wordsExplanation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6393",
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
      "name": "iso6391",
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
      "name": "audioKey",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "variantName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "variantWord",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExpressionVariantCreateExpressionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateExpressionMutationPayload",
        "kind": "LinkedField",
        "name": "createExpression",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "ExpressionVariantCreateExpressionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateExpressionMutationPayload",
        "kind": "LinkedField",
        "name": "createExpression",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "instance",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "ExpressionNodeEdge"
              }
            ]
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "664a23de76de45cbaca0a0089a6dea1f",
    "id": null,
    "metadata": {},
    "name": "ExpressionVariantCreateExpressionMutation",
    "operationKind": "mutation",
    "text": "mutation ExpressionVariantCreateExpressionMutation(\n  $input: CreateExpressionMutationInput!\n) {\n  createExpression(input: $input) {\n    instance {\n      id\n      content\n      correctedContent\n      generalExplanation\n      grammarExplanation\n      wordsExplanation\n      iso6393\n      iso6392\n      iso6391\n      audioUrl\n      audioKey\n      created\n      variantName\n      variantWord\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "18a365884a28e749bc3379190088c047";

export default node;
