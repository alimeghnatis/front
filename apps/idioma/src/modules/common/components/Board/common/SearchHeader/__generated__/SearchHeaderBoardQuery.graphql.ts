/**
 * @generated SignedSource<<65c5473b6f415f044d6234878681d507>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SearchHeaderBoardQuery$variables = {
  value: string;
};
export type SearchHeaderBoardQuery$data = {
  readonly boards: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      } | null | undefined;
    } | null | undefined>;
  } | null | undefined;
};
export type SearchHeaderBoardQuery = {
  response: SearchHeaderBoardQuery$data;
  variables: SearchHeaderBoardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "value"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "search",
        "variableName": "value"
      }
    ],
    "concreteType": "BoardNodeConnection",
    "kind": "LinkedField",
    "name": "boards",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BoardNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BoardNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "SearchHeaderBoardQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchHeaderBoardQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f9c200f76cebb5093c13bb0fe126ae6c",
    "id": null,
    "metadata": {},
    "name": "SearchHeaderBoardQuery",
    "operationKind": "query",
    "text": "query SearchHeaderBoardQuery(\n  $value: String!\n) {\n  boards(search: $value) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7db21cd965a5b1f66026e96734b20330";

export default node;
