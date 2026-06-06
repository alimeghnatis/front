/**
 * @generated SignedSource<<820342ba530efa3a641c92a461db58f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FileInput = {
  file: any;
};
export type FileUploadPageMutation$variables = {
  input: FileInput;
};
export type FileUploadPageMutation$data = {
  readonly upload3: {
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type FileUploadPageMutation = {
  response: FileUploadPageMutation$data;
  variables: FileUploadPageMutation$variables;
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
    "concreteType": "Upload3Mutation",
    "kind": "LinkedField",
    "name": "upload3",
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
    "name": "FileUploadPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FileUploadPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "491d18485c162a41ca7eb41ac2e72fe2",
    "id": null,
    "metadata": {},
    "name": "FileUploadPageMutation",
    "operationKind": "mutation",
    "text": "mutation FileUploadPageMutation(\n  $input: FileInput!\n) {\n  upload3(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "f8dba4c69c270e031bcbf9a02382b2a2";

export default node;
