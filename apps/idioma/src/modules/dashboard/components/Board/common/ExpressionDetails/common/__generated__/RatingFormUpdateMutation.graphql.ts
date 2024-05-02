/**
 * @generated SignedSource<<bf76a417e80620716c03ede911e74eb9>>
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
  clientMutationId?: string | null | undefined;
  content?: string | null | undefined;
  correctedContent?: string | null | undefined;
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
  translation?: string | null | undefined;
  variant?: string | null | undefined;
  variantFrom?: string | null | undefined;
  variantName?: string | null | undefined;
  variantWord?: string | null | undefined;
  voiceId?: string | null | undefined;
  wordsExplanation?: string | null | undefined;
};
export type RatingFormUpdateMutation$variables = {
  input: UpdateExpressionMutationInput;
};
export type RatingFormUpdateMutation$data = {
  readonly updateExpression: {
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly instance: {
      readonly id: string;
      readonly rating: number | null | undefined;
      readonly ratingComment: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type RatingFormUpdateMutation = {
  response: RatingFormUpdateMutation$data;
  variables: RatingFormUpdateMutation$variables;
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
            "name": "rating",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ratingComment",
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
    "name": "RatingFormUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RatingFormUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aef8275fafd6b9753eceadcedc00e280",
    "id": null,
    "metadata": {},
    "name": "RatingFormUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation RatingFormUpdateMutation(\n  $input: UpdateExpressionMutationInput!\n) {\n  updateExpression(input: $input) {\n    instance {\n      id\n      rating\n      ratingComment\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0349401a65a0b64cd26f95d905299c1c";

export default node;
