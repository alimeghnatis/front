/**
 * @generated SignedSource<<7693d7824b117d38060f9f4382aa856c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionFragment$data = {
  readonly content: string;
  readonly correctedContent: string | null | undefined;
  readonly created: any;
  readonly id: string;
  readonly isBookmarked: boolean;
  readonly isProcessed: boolean;
  readonly iso6391: string | null | undefined;
  readonly iso6392: string | null | undefined;
  readonly iso6393: string;
  readonly " $fragmentSpreads": FragmentRefs<"AudioButtonFragment" | "BookmarkButtonFragment" | "DeleteButtonFragment" | "DetailsFragment" | "VariantFragment">;
  readonly " $fragmentType": "ExpressionFragment";
};
export type ExpressionFragment$key = {
  readonly " $data"?: ExpressionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExpressionFragment">;
};

import ExpressionRefetchQuery_graphql from './ExpressionRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ExpressionRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ExpressionFragment",
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
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6391",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6392",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6393",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "correctedContent",
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
      "name": "isProcessed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isBookmarked",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AudioButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DeleteButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BookmarkButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VariantFragment"
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "0fde4328f0739fce6d4dc3d61ae2386e";

export default node;
