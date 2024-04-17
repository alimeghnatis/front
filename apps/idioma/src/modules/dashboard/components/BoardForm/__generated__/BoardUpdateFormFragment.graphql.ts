/**
 * @generated SignedSource<<1bf4cc57784d4b2612a880119735b87b>>
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
  readonly id: string;
  readonly isPublic: boolean;
  readonly name: string;
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

(node as any).hash = "9e959f6ec017f23f996da976f2f7a40c";

export default node;
