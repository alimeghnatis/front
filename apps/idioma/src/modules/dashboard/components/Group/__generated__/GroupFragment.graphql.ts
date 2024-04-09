/**
 * @generated SignedSource<<73a9c2661a4848ac9e4cd385864563cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupFragment$data = {
  readonly created: any;
  readonly expressions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"GroupExpressionFragment">;
      } | null | undefined;
    } | null | undefined>;
  };
  readonly id: string;
  readonly " $fragmentType": "GroupFragment";
};
export type GroupFragment$key = {
  readonly " $data"?: GroupFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupFragment",
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
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ExpressionNodeConnection",
      "kind": "LinkedField",
      "name": "expressions",
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
                  "name": "GroupExpressionFragment"
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
  ],
  "type": "GroupNode",
  "abstractKey": null
};

(node as any).hash = "74de73a94daf6098151dc7d4b30f7770";

export default node;
