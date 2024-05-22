/**
 * @generated SignedSource<<66d6b9b228fb9330e50f97cf5611e91a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderBoardFragment$data = {
  readonly board: {
    readonly created: any;
    readonly displayGeneral: boolean;
    readonly displayGrammar: boolean;
    readonly displayTranslations: boolean;
    readonly displayWords: boolean;
    readonly id: string;
    readonly name: string;
    readonly newExpressionsCount: number | null | undefined;
    readonly updated: any;
    readonly " $fragmentSpreads": FragmentRefs<"BoardFragment" | "BoardUpdateFormFragment" | "ChatFragment" | "ModeSelectorFragment" | "VariantBoardFragment">;
  } | null | undefined;
  readonly " $fragmentType": "ProviderBoardFragment";
};
export type ProviderBoardFragment$key = {
  readonly " $data"?: ProviderBoardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBoardFragment">;
};

import ProviderBoardRefetchQuery_graphql from './ProviderBoardRefetchQuery.graphql';

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
      "operation": ProviderBoardRefetchQuery_graphql
    }
  },
  "name": "ProviderBoardFragment",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayGeneral",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayGrammar",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayWords",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "ModeSelectorFragment"
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

(node as any).hash = "8c2e290faff3cadd03d111fdcfc3b21f";

export default node;
