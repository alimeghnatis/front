/**
 * @generated SignedSource<<e7e493e292a34b82fd49e8f71321f18f>>
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
  clientMutationId?: string | null | undefined;
  content?: string | null | undefined;
  correctedContent?: string | null | undefined;
  correction?: string | null | undefined;
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
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
      {
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExpressionVariantCreateExpressionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExpressionVariantCreateExpressionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "079b5d76ef87f10fb81402dd1bf8f3f8",
    "id": null,
    "metadata": {},
    "name": "ExpressionVariantCreateExpressionMutation",
    "operationKind": "mutation",
    "text": "mutation ExpressionVariantCreateExpressionMutation(\n  $input: CreateExpressionMutationInput!\n) {\n  createExpression(input: $input) {\n    instance {\n      id\n      content\n      correctedContent\n      generalExplanation\n      grammarExplanation\n      wordsExplanation\n      audioUrl\n      audioKey\n      created\n      variantName\n      variantWord\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e83f0e6c3ece3bec4d033eb2b3db230";

export default node;
