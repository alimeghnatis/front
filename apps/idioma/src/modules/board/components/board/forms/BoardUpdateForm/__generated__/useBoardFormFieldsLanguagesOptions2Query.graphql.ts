/**
 * @generated SignedSource<<3a0b4840fe2b1674671737fd4d709263>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type useBoardFormFieldsLanguagesOptions2Query$variables = Record<PropertyKey, never>;
export type useBoardFormFieldsLanguagesOptions2Query$data = {
  readonly iso639pt2: ReadonlyArray<{
    readonly audio: boolean;
    readonly name: string;
    readonly pt2t: string;
  } | null | undefined> | null | undefined;
};
export type useBoardFormFieldsLanguagesOptions2Query = {
  response: useBoardFormFieldsLanguagesOptions2Query$data;
  variables: useBoardFormFieldsLanguagesOptions2Query$variables;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "audio",
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
    "name": "useBoardFormFieldsLanguagesOptions2Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useBoardFormFieldsLanguagesOptions2Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c02318cf444495f36a4ab9dd7d7edbed",
    "id": null,
    "metadata": {},
    "name": "useBoardFormFieldsLanguagesOptions2Query",
    "operationKind": "query",
    "text": "query useBoardFormFieldsLanguagesOptions2Query {\n  iso639pt2 {\n    name\n    pt2t\n    audio\n  }\n}\n"
  }
};
})();

(node as any).hash = "4c1342ea4cbb482a8ab5fe87051a743a";

export default node;
