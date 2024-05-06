/**
 * @generated SignedSource<<5bfdd7a7556e643f8c34983c0fcaa15c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BoardUpdateFormLanguageOptions2Query$variables = Record<PropertyKey, never>;
export type BoardUpdateFormLanguageOptions2Query$data = {
  readonly iso639pt2: ReadonlyArray<{
    readonly audio: boolean;
    readonly name: string;
    readonly pt2t: string;
  } | null | undefined> | null | undefined;
};
export type BoardUpdateFormLanguageOptions2Query = {
  response: BoardUpdateFormLanguageOptions2Query$data;
  variables: BoardUpdateFormLanguageOptions2Query$variables;
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
    "name": "BoardUpdateFormLanguageOptions2Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardUpdateFormLanguageOptions2Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6080a4399e80391027f78ee2f8074ed9",
    "id": null,
    "metadata": {},
    "name": "BoardUpdateFormLanguageOptions2Query",
    "operationKind": "query",
    "text": "query BoardUpdateFormLanguageOptions2Query {\n  iso639pt2 {\n    name\n    pt2t\n    audio\n  }\n}\n"
  }
};
})();

(node as any).hash = "bd5b9d4ac52d65445e64ee3d337cecd8";

export default node;
