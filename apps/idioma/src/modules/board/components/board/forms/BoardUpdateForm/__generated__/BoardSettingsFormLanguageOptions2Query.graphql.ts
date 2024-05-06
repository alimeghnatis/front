/**
 * @generated SignedSource<<d20ce0c569b446e66cd0988e9d648cd0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BoardSettingsFormLanguageOptions2Query$variables = Record<PropertyKey, never>;
export type BoardSettingsFormLanguageOptions2Query$data = {
  readonly iso639pt2: ReadonlyArray<{
    readonly audio: boolean;
    readonly name: string;
    readonly pt2t: string;
  } | null | undefined> | null | undefined;
};
export type BoardSettingsFormLanguageOptions2Query = {
  response: BoardSettingsFormLanguageOptions2Query$data;
  variables: BoardSettingsFormLanguageOptions2Query$variables;
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
    "name": "BoardSettingsFormLanguageOptions2Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardSettingsFormLanguageOptions2Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "aba36a031a305953e5817289cf9b3c60",
    "id": null,
    "metadata": {},
    "name": "BoardSettingsFormLanguageOptions2Query",
    "operationKind": "query",
    "text": "query BoardSettingsFormLanguageOptions2Query {\n  iso639pt2 {\n    name\n    pt2t\n    audio\n  }\n}\n"
  }
};
})();

(node as any).hash = "6b7e2b5aaacae40a8db739ea985b9f8d";

export default node;
