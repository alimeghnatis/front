/**
 * @generated SignedSource<<033e8467450de21a2a1a4d749b6c88b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoginButtonFragment$data = {
  readonly oAuth2Links: {
    readonly google: string;
  } | null | undefined;
  readonly " $fragmentType": "LoginButtonFragment";
};
export type LoginButtonFragment$key = {
  readonly " $data"?: LoginButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LoginButtonFragment">;
};

import LoginButtonFragmentRefetchQuery_graphql from './LoginButtonFragmentRefetchQuery.graphql';

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
      "operation": LoginButtonFragmentRefetchQuery_graphql
    }
  },
  "name": "LoginButtonFragment",
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

(node as any).hash = "ba86836c995f320bdca20d2966c3b2a4";

export default node;
