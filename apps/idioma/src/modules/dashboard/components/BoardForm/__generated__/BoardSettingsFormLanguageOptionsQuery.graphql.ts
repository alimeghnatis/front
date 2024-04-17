/**
 * @generated SignedSource<<947b0cd30bd127e6106b1d9f7a1af898>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BoardSettingsFormLanguageOptionsQuery$variables = Record<PropertyKey, never>;
export type BoardSettingsFormLanguageOptionsQuery$data = {
  readonly iso639pt2: ReadonlyArray<{
    readonly name: string;
    readonly pt2t: string;
  } | null | undefined> | null | undefined;
};
export type BoardSettingsFormLanguageOptionsQuery = {
  response: BoardSettingsFormLanguageOptionsQuery$data;
  variables: BoardSettingsFormLanguageOptionsQuery$variables;
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
    "name": "BoardSettingsFormLanguageOptionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardSettingsFormLanguageOptionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "da84b35c517657889b337eed78cb401a",
    "id": null,
    "metadata": {},
    "name": "BoardSettingsFormLanguageOptionsQuery",
    "operationKind": "query",
    "text": "query BoardSettingsFormLanguageOptionsQuery {\n  iso639pt2 {\n    name\n    pt2t\n  }\n}\n"
  }
};
})();

(node as any).hash = "eab96ede9491523c064eff0cd7b90a63";

export default node;
