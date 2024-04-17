/**
 * @generated SignedSource<<22866d7f987e4accdeefed290abb8eb1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardSettingsDashboardFragment$data = {
  readonly enabledLanguages: any;
  readonly explanationsLanguage: string;
  readonly id: string;
  readonly isPublic: boolean;
  readonly name: string;
  readonly " $fragmentType": "BoardSettingsDashboardFragment";
};
export type BoardSettingsDashboardFragment$key = {
  readonly " $data"?: BoardSettingsDashboardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsDashboardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardSettingsDashboardFragment",
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

(node as any).hash = "e731362dda138f8f4f740ee846483c81";

export default node;
