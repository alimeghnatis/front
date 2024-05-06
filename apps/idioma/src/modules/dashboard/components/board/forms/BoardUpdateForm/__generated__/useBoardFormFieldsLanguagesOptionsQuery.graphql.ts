/**
 * @generated SignedSource<<d1a8a8dc60eea4e314d7a85b4d742eb1>>
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
    readonly audio: boolean;
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
    "cacheID": "5eba004e540267e5017c1655bbaacee2",
    "id": null,
    "metadata": {},
    "name": "useBoardFormFieldsLanguagesOptionsQuery",
    "operationKind": "query",
    "text": "query useBoardFormFieldsLanguagesOptionsQuery {\n  iso639pt2 {\n    name\n    pt2t\n    audio\n  }\n}\n"
  }
};
})();

(node as any).hash = "9ed9fd3c2a910085d1b7f719307d83dc";

export default node;
