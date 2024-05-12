/**
 * @generated SignedSource<<c31a037739c10a613d02607ff7f7fd1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateExpressionMutationInput = {
  audioKey?: string | null | undefined;
  audioUrl?: string | null | undefined;
  board?: string | null | undefined;
  category?: string | null | undefined;
  changes?: string | null | undefined;
  charactersUsed?: number | null | undefined;
  clientMutationId?: string | null | undefined;
  content?: string | null | undefined;
  correctedContent?: string | null | undefined;
  createdBy?: string | null | undefined;
  flagComment?: string | null | undefined;
  flagIsProcessed?: boolean | null | undefined;
  generalExplanation?: string | null | undefined;
  grammarExplanation?: string | null | undefined;
  group?: string | null | undefined;
  id?: string | null | undefined;
  isBookmarked?: boolean | null | undefined;
  isProcessed?: boolean | null | undefined;
  iso6391?: string | null | undefined;
  iso6392?: string | null | undefined;
  iso6393?: string | null | undefined;
  rated?: any | null | undefined;
  rating?: number | null | undefined;
  ratingComment?: string | null | undefined;
  retriesGeneration?: number | null | undefined;
  tokensUsedCompletion?: number | null | undefined;
  tokensUsedPrompt?: number | null | undefined;
  tokensUsedTotal?: number | null | undefined;
  translation?: string | null | undefined;
  variant?: string | null | undefined;
  variantFrom?: string | null | undefined;
  variantName?: string | null | undefined;
  variantWord?: string | null | undefined;
  voiceId?: string | null | undefined;
  wordsExplanation?: string | null | undefined;
};
export type BookmarkButtonMutation$variables = {
  input: UpdateExpressionMutationInput;
};
export type BookmarkButtonMutation$data = {
  readonly updateExpression: {
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly instance: {
      readonly id: string;
      readonly isBookmarked: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type BookmarkButtonMutation = {
  response: BookmarkButtonMutation$data;
  variables: BookmarkButtonMutation$variables;
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
    "concreteType": "UpdateExpressionMutationPayload",
    "kind": "LinkedField",
    "name": "updateExpression",
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
            "name": "isBookmarked",
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
    "name": "BookmarkButtonMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookmarkButtonMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "28e05d70cf5a5c34353c0f27c741a16d",
    "id": null,
    "metadata": {},
    "name": "BookmarkButtonMutation",
    "operationKind": "mutation",
    "text": "mutation BookmarkButtonMutation(\n  $input: UpdateExpressionMutationInput!\n) {\n  updateExpression(input: $input) {\n    instance {\n      id\n      isBookmarked\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "37609259b5d558ed8d4cd63f010b979f";

export default node;
