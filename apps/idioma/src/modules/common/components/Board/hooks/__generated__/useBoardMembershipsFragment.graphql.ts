/**
 * @generated SignedSource<<77225fe97b1924ffc6a88f22a2b06790>>
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
    readonly count: number;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly board: {
          readonly description: string | null | undefined;
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
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        },
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
                      "name": "description",
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
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "BoardCardFragment"
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

(node as any).hash = "10e304552d280444cf5caf60fe8d8ea4";

export default node;
