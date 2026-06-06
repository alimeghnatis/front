/**
 * @generated SignedSource<<ccd9cb95cb9c87f593ee31efc49da269>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateFormFragment$data = {
  readonly openaiThreadId: string | null | undefined;
  readonly " $fragmentType": "CreateFormFragment";
};
export type CreateFormFragment$key = {
  readonly " $data"?: CreateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CreateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "openaiThreadId",
      "storageKey": null
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "bc8b01bcea1757d1c56bdd683b8e2515";

export default node;
