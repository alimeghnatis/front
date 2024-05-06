/**
 * @generated SignedSource<<57709370cc5603a69831c510c7435fed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteBoardMutationInput = {
  clientMutationId?: string | null | undefined;
  id: string;
};
export type DeleteBoardButtonMutation$variables = {
  input: DeleteBoardMutationInput;
};
export type DeleteBoardButtonMutation$data = {
  readonly deleteBoard: {
    readonly success: boolean;
  } | null | undefined;
};
export type DeleteBoardButtonMutation = {
  response: DeleteBoardButtonMutation$data;
  variables: DeleteBoardButtonMutation$variables;
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
    "concreteType": "DeleteBoardMutationPayload",
    "kind": "LinkedField",
    "name": "deleteBoard",
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
    "name": "DeleteBoardButtonMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteBoardButtonMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bf520391386d5eae839ba023d836cc8b",
    "id": null,
    "metadata": {},
    "name": "DeleteBoardButtonMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteBoardButtonMutation(\n  $input: DeleteBoardMutationInput!\n) {\n  deleteBoard(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "44a26ad8f7fd361e76607723677d6f43";

export default node;
