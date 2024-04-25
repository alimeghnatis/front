/**
 * @generated SignedSource<<e2e59ef2fef9763774aef43ff48cc8fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DebugGroupFragment$data = {
  readonly expressions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"DebugExpressionFragment">;
      } | null | undefined;
    } | null | undefined>;
  } | null | undefined;
  readonly " $fragmentType": "DebugGroupFragment";
};
export type DebugGroupFragment$key = {
  readonly " $data"?: DebugGroupFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DebugGroupFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "expressions"
        ]
      }
    ]
  },
  "name": "DebugGroupFragment",
  "selections": [
    {
      "alias": "expressions",
      "args": [
        {
          "kind": "Literal",
          "name": "rating_Lte",
          "value": 4
        }
      ],
      "concreteType": "ExpressionNodeConnection",
      "kind": "LinkedField",
      "name": "__DebugGroupFragment_expressions_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ExpressionNodeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ExpressionNode",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "DebugExpressionFragment"
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
      "storageKey": "__DebugGroupFragment_expressions_connection(rating_Lte:4)"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "ac702e03d67074b0eaebf30e7d009381";

export default node;
