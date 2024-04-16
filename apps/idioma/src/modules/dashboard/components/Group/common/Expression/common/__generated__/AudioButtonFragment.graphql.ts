/**
 * @generated SignedSource<<21e345590cfc751ba28a6d680cec23bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AudioButtonFragment$data = {
  readonly audioUrl: string | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "AudioButtonFragment";
};
export type AudioButtonFragment$key = {
  readonly " $data"?: AudioButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AudioButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AudioButtonFragment",
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
      "name": "audioUrl",
      "storageKey": null
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "05b3f1316defda30a4a481a1f49f9891";

export default node;
