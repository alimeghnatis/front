/**
 * @generated SignedSource<<f522c039d2e9c3801d3e24adcefdb07d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardSettingsFormFragment$data = {
  readonly enabledLanguages: any;
  readonly explanationsLanguage: string;
  readonly id: string;
  readonly isPublic: boolean;
  readonly name: string;
  readonly " $fragmentType": "BoardSettingsFormFragment";
};
export type BoardSettingsFormFragment$key = {
  readonly " $data"?: BoardSettingsFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardSettingsFormFragment",
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

(node as any).hash = "45e8b854891845d38e6e119f2d34d39e";

export default node;
