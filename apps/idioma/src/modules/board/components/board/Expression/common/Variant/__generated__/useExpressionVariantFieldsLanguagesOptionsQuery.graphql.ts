/**
 * @generated SignedSource<<8cd620248f28ceb70cc3fb17b9bf15ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type useExpressionVariantFieldsLanguagesOptionsQuery$variables = {
  payload?: ReadonlyArray<string> | null | undefined;
};
export type useExpressionVariantFieldsLanguagesOptionsQuery$data = {
  readonly iso639pt2: ReadonlyArray<{
    readonly audio: boolean;
    readonly name: string;
    readonly pt2t: string;
  } | null | undefined> | null | undefined;
};
export type useExpressionVariantFieldsLanguagesOptionsQuery = {
  response: useExpressionVariantFieldsLanguagesOptionsQuery$data;
  variables: useExpressionVariantFieldsLanguagesOptionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "payload"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "codes_In",
        "variableName": "payload"
      }
    ],
    "concreteType": "LanguageType",
    "kind": "LinkedField",
    "name": "iso639pt2",
    "plural": true,
    "selections": [
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
        "name": "name",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useExpressionVariantFieldsLanguagesOptionsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useExpressionVariantFieldsLanguagesOptionsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8c9b6e55cb1b385fb029202c62fb3631",
    "id": null,
    "metadata": {},
    "name": "useExpressionVariantFieldsLanguagesOptionsQuery",
    "operationKind": "query",
    "text": "query useExpressionVariantFieldsLanguagesOptionsQuery(\n  $payload: [String!]\n) {\n  iso639pt2(codes_In: $payload) {\n    pt2t\n    name\n    audio\n  }\n}\n"
  }
};
})();

(node as any).hash = "e10828ae6dffd518c3910d809cb39fc9";

export default node;
