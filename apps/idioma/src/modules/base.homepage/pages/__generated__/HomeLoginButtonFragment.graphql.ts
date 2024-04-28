/**
 * @generated SignedSource<<d440c27f35fde0d4967790a543e20580>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeLoginButtonFragment$data = {
  readonly oAuth2Links: {
    readonly google: string;
  } | null | undefined;
  readonly " $fragmentType": "HomeLoginButtonFragment";
};
export type HomeLoginButtonFragment$key = {
  readonly " $data"?: HomeLoginButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomeLoginButtonFragment">;
};

import HomeLoginButtonFragmentRefetchQuery_graphql from './HomeLoginButtonFragmentRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "resource"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": HomeLoginButtonFragmentRefetchQuery_graphql
    }
  },
  "name": "HomeLoginButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "resource",
          "variableName": "resource"
        }
      ],
      "concreteType": "OAuth2LinksProvider",
      "kind": "LinkedField",
      "name": "oAuth2Links",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "google",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "ebe49853a25785ac05dda3c2d748565d";

export default node;
