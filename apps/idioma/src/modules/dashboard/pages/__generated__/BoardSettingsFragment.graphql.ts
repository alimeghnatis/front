/**
 * @generated SignedSource<<5b581152980c61f513d5578f53983e63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardSettingsFragment$data = {
  readonly enabledLanguages: any;
  readonly explanationsLanguage: string;
  readonly id: string;
  readonly isPublic: boolean;
  readonly name: string;
  readonly " $fragmentType": "BoardSettingsFragment";
};
export type BoardSettingsFragment$key = {
  readonly " $data"?: BoardSettingsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardSettingsFragment",
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
      "name": "isPublic",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "explanationsLanguage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enabledLanguages",
      "storageKey": null
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "e0a4c75a4c021e85d00c4a65b0dbf984";

export default node;
