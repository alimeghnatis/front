/**
 * @generated SignedSource<<198d157c24e7ad44862f71802e8ae3db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormTestPageSearchFruitsQuery$variables = {
  value: string;
};
export type FormTestPageSearchFruitsQuery$data = {
  readonly searchFruits: ReadonlyArray<{
    readonly disabled: boolean;
    readonly label: string | null | undefined;
    readonly value: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type FormTestPageSearchFruitsQuery = {
  response: FormTestPageSearchFruitsQuery$data;
  variables: FormTestPageSearchFruitsQuery$variables;
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
        "name": "search",
        "variableName": "value"
      }
    ],
    "concreteType": "FruitType",
    "kind": "LinkedField",
    "name": "searchFruits",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "value",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "disabled",
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
    "name": "FormTestPageSearchFruitsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormTestPageSearchFruitsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "77d7a644f5dbfc64b0d243e4945c2f09",
    "id": null,
    "metadata": {},
    "name": "FormTestPageSearchFruitsQuery",
    "operationKind": "query",
    "text": "query FormTestPageSearchFruitsQuery(\n  $value: String!\n) {\n  searchFruits(search: $value) {\n    value\n    label\n    disabled\n  }\n}\n"
  }
};
})();

(node as any).hash = "7752276e79fe448a4d837d9937688373";

export default node;
