/**
 * @generated SignedSource<<2b9af3a9c3bb6a3ea386cf887919564b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ExpressionsBoardMembershipRoleChoices = "ADMIN" | "MEMBER" | "OWNER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type useBoardMembershipsFragment$data = {
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
  readonly " $fragmentType": "useBoardMembershipsFragment";
};
export type useBoardMembershipsFragment$key = {
  readonly " $data"?: useBoardMembershipsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useBoardMembershipsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "boardMemberships"
        ]
      }
    ]
  },
  "name": "useBoardMembershipsFragment",
  "selections": [
    {
      "alias": "boardMemberships",
      "args": null,
      "concreteType": "BoardMembershipNodeConnection",
      "kind": "LinkedField",
      "name": "__useBoardMembershipsFragment_boardMemberships_connection",
      "plural": false,
      "selections": [
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
      "storageKey": null
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};
})();

(node as any).hash = "ea1ec08bc99450667328760bfaebf4ce";

export default node;
