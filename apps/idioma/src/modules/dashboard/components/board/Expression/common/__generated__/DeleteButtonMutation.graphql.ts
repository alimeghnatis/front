/**
 * @generated SignedSource<<3f585fe7b5b9d02b53335631eb6e9160>>
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
export type DeleteButtonMutation$variables = {
  input: DeleteExpressionMutationInput;
};
export type DeleteButtonMutation$data = {
  readonly deleteExpression: {
    readonly success: boolean;
  } | null | undefined;
};
export type DeleteButtonMutation = {
  response: DeleteButtonMutation$data;
  variables: DeleteButtonMutation$variables;
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
    "name": "DeleteButtonMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteButtonMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a760df701ec571ba7a346e376b29d9ff",
    "id": null,
    "metadata": {},
    "name": "DeleteButtonMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteButtonMutation(\n  $input: DeleteExpressionMutationInput!\n) {\n  deleteExpression(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "91a6c51d8de3349f0278dfd34e3dd1c4";

export default node;
