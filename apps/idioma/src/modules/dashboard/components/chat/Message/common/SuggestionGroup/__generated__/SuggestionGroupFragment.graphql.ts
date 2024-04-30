/**
 * @generated SignedSource<<e6e3aace11ac303b7a998f5d53e5a4a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SuggestionGroupFragment$data = {
  readonly iso6391: string | null | undefined;
  readonly iso6392: string | null | undefined;
  readonly iso6393: string | null | undefined;
  readonly suggestions: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly " $fragmentType": "SuggestionGroupFragment";
};
export type SuggestionGroupFragment$key = {
  readonly " $data"?: SuggestionGroupFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SuggestionGroupFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SuggestionGroupFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "suggestions",
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
    }
  ],
  "type": "AssistantLanguageMessageType",
  "abstractKey": null
};

(node as any).hash = "6c8b5835e3cf4c40d6e24a5284c8c6b7";

export default node;
