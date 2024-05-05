/**
 * @generated SignedSource<<910359f0820cc655e852789582b8c3fc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormTestPageValidationQuery$variables = {
  value: string;
};
export type FormTestPageValidationQuery$data = {
  readonly isUsernameAvailable: boolean | null | undefined;
};
export type FormTestPageValidationQuery = {
  response: FormTestPageValidationQuery$data;
  variables: FormTestPageValidationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "value"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      }
    ],
    "kind": "ScalarField",
    "name": "isUsernameAvailable",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormTestPageValidationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTestPageValidationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "80158b1a7e67d3ff8ea465e749d36bb6",
    "id": null,
    "metadata": {},
    "name": "FormTestPageValidationQuery",
    "operationKind": "query",
    "text": "query FormTestPageValidationQuery(\n  $value: String!\n) {\n  isUsernameAvailable(value: $value)\n}\n"
  }
};
})();

(node as any).hash = "c49748e2140c6bbf5f0a39490c293fdf";

export default node;
