/**
 * @generated SignedSource<<9ff71d390f0d73efa84ccaa2429cc0eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainLayerBoardProviderFragment$data = {
  readonly board: {
    readonly created: any;
    readonly displayTranslations: boolean;
    readonly id: string;
    readonly name: string;
    readonly newExpressionsCount: number | null | undefined;
    readonly updated: any;
    readonly " $fragmentSpreads": FragmentRefs<"BoardFragment" | "BoardUpdateFormFragment" | "ChatFragment" | "VariantBoardFragment">;
  } | null | undefined;
  readonly " $fragmentType": "MainLayerBoardProviderFragment";
};
export type MainLayerBoardProviderFragment$key = {
  readonly " $data"?: MainLayerBoardProviderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainLayerBoardProviderFragment">;
};

import MainLayerBoardProviderRefetchQuery_graphql from './MainLayerBoardProviderRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": MainLayerBoardProviderRefetchQuery_graphql
    }
  },
  "name": "MainLayerBoardProviderFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id"
        }
      ],
      "concreteType": "BoardNode",
      "kind": "LinkedField",
      "name": "board",
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
          "kind": "ScalarField",
          "name": "updated",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayTranslations",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BoardFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BoardUpdateFormFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "VariantBoardFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ChatFragment"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "1aac87d56dfdb01e13a1fec4dfa05874";

export default node;
