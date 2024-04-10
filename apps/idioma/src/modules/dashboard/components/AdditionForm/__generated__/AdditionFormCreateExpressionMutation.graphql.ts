/**
 * @generated SignedSource<<c82d55b0b83c58e5f0de1d7a7f21a208>>
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
  content: string;
  correctedContent?: string | null | undefined;
  generalExplanation?: string | null | undefined;
  grammarExplanation?: string | null | undefined;
  group?: string | null | undefined;
  id?: string | null | undefined;
  iso6391?: string | null | undefined;
  iso6392?: string | null | undefined;
  iso6393: string;
  variant?: string | null | undefined;
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
      readonly created: any;
      readonly generalExplanation: string | null | undefined;
      readonly grammarExplanation: string | null | undefined;
      readonly id: string;
      readonly updated: any;
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
            "name": "updated",
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
    "name": "AdditionFormCreateExpressionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AdditionFormCreateExpressionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "79ffa9ea9d309411657e20a5cd5085a0",
    "id": null,
    "metadata": {},
    "name": "AdditionFormCreateExpressionMutation",
    "operationKind": "mutation",
    "text": "mutation AdditionFormCreateExpressionMutation(\n  $input: CreateExpressionMutationInput!\n) {\n  createExpression(input: $input) {\n    instance {\n      id\n      generalExplanation\n      grammarExplanation\n      wordsExplanation\n      audioUrl\n      audioKey\n      created\n      updated\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9cb22f0a655d544bd39bbdfaf239c9db";

export default node;
