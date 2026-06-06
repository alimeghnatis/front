/**
 * @generated SignedSource<<f8b586ea935e85a6ceefb004838c1ae9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionsBoardMembershipRoleChoices = "ADMIN" | "MEMBER" | "OWNER" | "%future added value";
export type BoardCardGroupStoriesQuery$variables = Record<PropertyKey, never>;
export type BoardCardGroupStoriesQuery$data = {
  readonly viewer: {
    readonly boardMemberships: {
      readonly count: number;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly board: {
            readonly id: string;
            readonly isDefault: boolean;
            readonly name: string;
            readonly newExpressionsCount: number | null | undefined;
            readonly " $fragmentSpreads": FragmentRefs<"BoardCardFragment">;
          };
          readonly id: string;
          readonly role: ExpressionsBoardMembershipRoleChoices;
        } | null | undefined;
      } | null | undefined>;
    };
  } | null | undefined;
};
export type BoardCardGroupStoriesQuery = {
  response: BoardCardGroupStoriesQuery$data;
  variables: BoardCardGroupStoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDefault",
  "storageKey": null
},
v5 = {
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
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = {
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
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v10 = [
  (v0/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardCardGroupStoriesQuery",
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
            "selections": [
              (v0/*: any*/),
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
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "BoardNode",
                        "kind": "LinkedField",
                        "name": "board",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "BoardCardFragment"
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
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
    "name": "BoardCardGroupStoriesQuery",
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
            "args": (v9/*: any*/),
            "concreteType": "BoardMembershipNodeConnection",
            "kind": "LinkedField",
            "name": "boardMemberships",
            "plural": false,
            "selections": [
              (v0/*: any*/),
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
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "BoardNode",
                        "kind": "LinkedField",
                        "name": "board",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "created",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "GroupNodeConnection",
                            "kind": "LinkedField",
                            "name": "groups",
                            "plural": false,
                            "selections": (v10/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ExpressionNodeConnection",
                            "kind": "LinkedField",
                            "name": "expressions",
                            "plural": false,
                            "selections": (v10/*: any*/),
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": "boardMemberships(first:50)"
          },
          {
            "alias": null,
            "args": (v9/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "useBoardMembershipsFragment_boardMemberships",
            "kind": "LinkedHandle",
            "name": "boardMemberships"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "af881862978423fd14cacc624f20edb1",
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
    "name": "BoardCardGroupStoriesQuery",
    "operationKind": "query",
    "text": "query BoardCardGroupStoriesQuery {\n  viewer {\n    boardMemberships(first: 50) {\n      count\n      edges {\n        node {\n          id\n          role\n          board {\n            id\n            name\n            isDefault\n            ...BoardCardFragment\n          }\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    id\n  }\n}\n\nfragment BoardCardFragment on BoardNode {\n  id\n  name\n  description\n  created\n  groups {\n    count\n  }\n  expressions {\n    count\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0881426bfb1328c42d72fa266f2b5ec";

export default node;
