/**
 * @generated SignedSource<<9d1340cdc76aba55bdbc782f649d63c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ExpressionsBoardMembershipRoleChoices = "ADMIN" | "MEMBER" | "OWNER" | "%future added value";
export type SelectHeaderBoardStoriesQuery$variables = Record<PropertyKey, never>;
export type SelectHeaderBoardStoriesQuery$data = {
  readonly viewer: {
    readonly boardMemberships: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly board: {
            readonly id: string;
            readonly isDefault: boolean;
            readonly name: string;
            readonly newExpressionsCount: number | null | undefined;
          };
          readonly id: string;
          readonly role: ExpressionsBoardMembershipRoleChoices;
        } | null | undefined;
      } | null | undefined>;
    };
  } | null | undefined;
};
export type SelectHeaderBoardStoriesQuery = {
  response: SelectHeaderBoardStoriesQuery$data;
  variables: SelectHeaderBoardStoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BoardMembershipNodeEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BoardMembershipNode",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "role",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BoardNode",
            "kind": "LinkedField",
            "name": "board",
            "plural": false,
            "selections": [
              (v0/*: any*/),
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
                "name": "isDefault",
                "storageKey": null
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "newExpressionsCount",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectHeaderBoardStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": "boardMemberships",
            "args": null,
            "concreteType": "BoardMembershipNodeConnection",
            "kind": "LinkedField",
            "name": "__useBoardMembershipsFragment_boardMemberships_connection",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SelectHeaderBoardStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "BoardMembershipNodeConnection",
            "kind": "LinkedField",
            "name": "boardMemberships",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": "boardMemberships(first:50)"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "useBoardMembershipsFragment_boardMemberships",
            "kind": "LinkedHandle",
            "name": "boardMemberships"
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bfccf6bc4f72fe899fd2ae52ca7cdd41",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "viewer",
            "boardMemberships"
          ]
        }
      ]
    },
    "name": "SelectHeaderBoardStoriesQuery",
    "operationKind": "query",
    "text": "query SelectHeaderBoardStoriesQuery {\n  viewer {\n    boardMemberships(first: 50) {\n      edges {\n        node {\n          id\n          role\n          board {\n            id\n            name\n            isDefault\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d380f553c8028282e5ad5429c4c522a7";

export default node;
