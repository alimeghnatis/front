/**
 * @generated SignedSource<<05b52c1bd134108e0f016e5b99e3ba6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type useBoardFormFieldsLanguagesOptionsQuery$variables = Record<PropertyKey, never>;
export type useBoardFormFieldsLanguagesOptionsQuery$data = {
  readonly iso639pt2: ReadonlyArray<{
    readonly name: string;
    readonly pt2t: string;
  } | null | undefined> | null | undefined;
};
export type useBoardFormFieldsLanguagesOptionsQuery = {
  response: useBoardFormFieldsLanguagesOptionsQuery$data;
  variables: useBoardFormFieldsLanguagesOptionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "LanguageType",
    "kind": "LinkedField",
    "name": "iso639pt2",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pt2t",
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
    "name": "useBoardFormFieldsLanguagesOptionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useBoardFormFieldsLanguagesOptionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "196dfbc9a0ea09573dea3fd0d83f9a41",
    "id": null,
    "metadata": {},
    "name": "useBoardFormFieldsLanguagesOptionsQuery",
    "operationKind": "query",
    "text": "query useBoardFormFieldsLanguagesOptionsQuery {\n  iso639pt2 {\n    name\n    pt2t\n  }\n}\n"
  }
};
})();

(node as any).hash = "c2493e8c7ddb4b77975867d5d0636084";

export default node;
