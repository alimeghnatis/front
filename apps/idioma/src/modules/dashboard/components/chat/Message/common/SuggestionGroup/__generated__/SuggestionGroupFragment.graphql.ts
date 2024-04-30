/**
 * @generated SignedSource<<d6d02df67cf9a663f6a6b7179d3496aa>>
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
  "type": "AssistantMessageType",
  "abstractKey": null
};

(node as any).hash = "a770ee3063dcb404689a25fa06beb800";

export default node;
