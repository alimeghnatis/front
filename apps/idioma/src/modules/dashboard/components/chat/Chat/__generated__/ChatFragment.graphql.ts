/**
 * @generated SignedSource<<a956b98e8f8079b9f8b0cb178d062864>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ChatFragment$data = {
  readonly id: string;
  readonly openaiThreadId: string | null | undefined;
  readonly thread: {
    readonly " $fragmentSpreads": FragmentRefs<"ThreadFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"CreateFormFragment">;
  readonly " $fragmentType": "ChatFragment";
};
export type ChatFragment$key = {
  readonly " $data"?: ChatFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ChatFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChatFragment",
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
      "name": "openaiThreadId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ThreadNode",
      "kind": "LinkedField",
      "name": "thread",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ThreadFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreateFormFragment"
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "e493414ccb11fad8542def7e2f16ca24";

export default node;
