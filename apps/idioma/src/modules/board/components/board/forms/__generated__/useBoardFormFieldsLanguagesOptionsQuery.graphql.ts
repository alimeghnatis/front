/**
 * @generated SignedSource<<265e67fe09cf1963034912871c81d274>>
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
    readonly pt1: string | null | undefined;
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
        "name": "pt1",
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
    "cacheID": "b3266b5bcae9dea137b3df512a2070c1",
    "id": null,
    "metadata": {},
    "name": "useBoardFormFieldsLanguagesOptionsQuery",
    "operationKind": "query",
    "text": "query useBoardFormFieldsLanguagesOptionsQuery {\n  iso639pt2 {\n    name\n    pt1\n    pt2t\n    audio\n  }\n}\n"
  }
};
})();

(node as any).hash = "6f5a559261d3d25378bc570b446dc0f2";

export default node;
