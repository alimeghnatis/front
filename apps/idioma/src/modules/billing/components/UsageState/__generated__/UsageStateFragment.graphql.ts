/**
 * @generated SignedSource<<25853031d74f72100d894364428e8ae0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsageStateFragment$data = {
  readonly boardCount: number | null | undefined;
  readonly id: string;
  readonly leftoverCharacters: number | null | undefined;
  readonly leftoverExpressions: number | null | undefined;
  readonly leftoverTokens: number | null | undefined;
  readonly periodEnd: any;
  readonly periodStart: any;
  readonly plan: {
    readonly id: string;
    readonly maxBoards: number | null | undefined;
    readonly maxCharacters: number | null | undefined;
    readonly maxExpressions: number | null | undefined;
    readonly maxTokens: number | null | undefined;
    readonly name: string;
    readonly version: number;
  };
  readonly remainingCharacters: number | null | undefined;
  readonly remainingExpressions: number | null | undefined;
  readonly remainingTokens: number | null | undefined;
  readonly usedCharacters: number;
  readonly usedExpressions: number;
  readonly usedTokens: number;
  readonly " $fragmentType": "UsageStateFragment";
};
export type UsageStateFragment$key = {
  readonly " $data"?: UsageStateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UsageStateFragment">;
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
  "metadata": null,
  "name": "UsageStateFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "periodStart",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "periodEnd",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "usedCharacters",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "usedTokens",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "usedExpressions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "leftoverCharacters",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "leftoverTokens",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "leftoverExpressions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "remainingCharacters",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "remainingTokens",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "remainingExpressions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "boardCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PlanNode",
      "kind": "LinkedField",
      "name": "plan",
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
          "name": "maxCharacters",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "maxTokens",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "maxExpressions",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "maxBoards",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "version",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UsageStateNode",
  "abstractKey": null
};
})();

(node as any).hash = "01459e77fde406383c88637d2815b1e6";

export default node;
