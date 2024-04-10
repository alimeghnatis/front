/**
 * @generated SignedSource<<9120195ded454eb131ee6a1a98f074ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteExpressionMutationInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type ExpressionDeleteMutation$variables = {
  input: DeleteExpressionMutationInput;
};
export type ExpressionDeleteMutation$data = {
  readonly deleteExpression: {
    readonly success: boolean;
  } | null | undefined;
};
export type ExpressionDeleteMutation = {
  response: ExpressionDeleteMutation$data;
  variables: ExpressionDeleteMutation$variables;
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
    "concreteType": "DeleteExpressionMutationPayload",
    "kind": "LinkedField",
    "name": "deleteExpression",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "ExpressionDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExpressionDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "08ca067837b81cff8ecaf6d7d097c4b0",
    "id": null,
    "metadata": {},
    "name": "ExpressionDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ExpressionDeleteMutation(\n  $input: DeleteExpressionMutationInput!\n) {\n  deleteExpression(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "b9a6d54208847d791c0fbabf09226939";

export default node;
