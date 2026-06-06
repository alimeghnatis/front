/**
 * @generated SignedSource<<dc799c3f5e0a7883b49b7a6570671e21>>
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
    readonly " $fragmentSpreads": FragmentRefs<"ActionsBarFragment" | "ThreadFragment">;
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ActionsBarFragment"
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

(node as any).hash = "c3ca9de1013555d1fdba3890fe453327";

export default node;
