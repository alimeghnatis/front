/**
 * @generated SignedSource<<7891b74c409c321008b4410d508503d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BoardUpdateFormLanguageOptionsQuery$variables = Record<PropertyKey, never>;
export type BoardUpdateFormLanguageOptionsQuery$data = {
  readonly iso639pt2: ReadonlyArray<{
    readonly name: string;
    readonly pt2t: string;
  } | null | undefined> | null | undefined;
};
export type BoardUpdateFormLanguageOptionsQuery = {
  response: BoardUpdateFormLanguageOptionsQuery$data;
  variables: BoardUpdateFormLanguageOptionsQuery$variables;
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
    "name": "BoardUpdateFormLanguageOptionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardUpdateFormLanguageOptionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "73a2412b0825c083bfd597555c3a9e0e",
    "id": null,
    "metadata": {},
    "name": "BoardUpdateFormLanguageOptionsQuery",
    "operationKind": "query",
    "text": "query BoardUpdateFormLanguageOptionsQuery {\n  iso639pt2 {\n    name\n    pt2t\n  }\n}\n"
  }
};
})();

(node as any).hash = "147dace6213305e666371b181eff917e";

export default node;
