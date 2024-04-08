/**
 * @generated SignedSource<<0efa23b0a6c4ac2ab2ce70836fb2e778>>
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
  language?: string | null | undefined;
  variant?: string | null | undefined;
  wordsExplanation?: string | null | undefined;
};
export type AdditionFormCreateExpressionMutation$variables = {
  input: CreateExpressionMutationInput;
};
export type AdditionFormCreateExpressionMutation$data = {
  readonly createExpression: {
    readonly audioKey: string | null | undefined;
    readonly audioUrl: string | null | undefined;
    readonly created: any | null | undefined;
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly generalExplanation: string | null | undefined;
    readonly grammarExplanation: string | null | undefined;
    readonly id: string | null | undefined;
    readonly updated: any | null | undefined;
    readonly wordsExplanation: string | null | undefined;
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
    "cacheID": "f0293395b0c12555b23e8653bfa1b128",
    "id": null,
    "metadata": {},
    "name": "AdditionFormCreateExpressionMutation",
    "operationKind": "mutation",
    "text": "mutation AdditionFormCreateExpressionMutation(\n  $input: CreateExpressionMutationInput!\n) {\n  createExpression(input: $input) {\n    id\n    generalExplanation\n    grammarExplanation\n    wordsExplanation\n    audioUrl\n    audioKey\n    created\n    updated\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "761f0ab4669a106ad19da6b84c9d9315";

export default node;
