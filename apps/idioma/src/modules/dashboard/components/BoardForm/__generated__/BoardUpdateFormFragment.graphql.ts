/**
 * @generated SignedSource<<2d3f1dd1858d2a8930ec423760ac141d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardUpdateFormFragment$data = {
  readonly enabledLanguages: any;
  readonly explanationsLanguage: string;
  readonly explanationsLength: string;
  readonly id: string;
  readonly isDefault: boolean;
  readonly isPublic: boolean;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"DeleteBoardButtonFragment">;
  readonly " $fragmentType": "BoardUpdateFormFragment";
};
export type BoardUpdateFormFragment$key = {
  readonly " $data"?: BoardUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardUpdateFormFragment",
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
      "name": "isDefault",
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
      "name": "explanationsLength",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enabledLanguages",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DeleteBoardButtonFragment"
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "f9a3940f7bcc55aacf6aff62f203f1f9";

export default node;
