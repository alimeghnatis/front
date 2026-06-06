/**
 * @generated SignedSource<<0818f3788e8527b9e9a8c258a9b69018>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FormTestPageFruitsQuery$variables = Record<PropertyKey, never>;
export type FormTestPageFruitsQuery$data = {
  readonly fruits: ReadonlyArray<{
    readonly disabled: boolean;
    readonly label: string | null | undefined;
    readonly value: string | null | undefined;
  } | null | undefined> | null | undefined;
};
export type FormTestPageFruitsQuery = {
  response: FormTestPageFruitsQuery$data;
  variables: FormTestPageFruitsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FruitType",
    "kind": "LinkedField",
    "name": "fruits",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FormTestPageFruitsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FormTestPageFruitsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "63260bee631e694ae9e8ce348aceb60e",
    "id": null,
    "metadata": {},
    "name": "FormTestPageFruitsQuery",
    "operationKind": "query",
    "text": "query FormTestPageFruitsQuery {\n  fruits {\n    value\n    label\n    disabled\n  }\n}\n"
  }
};
})();

(node as any).hash = "dada1b5757c5be119b164c0ef1c734ec";

export default node;
