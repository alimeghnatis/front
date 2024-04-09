/**
 * @generated SignedSource<<24c0f3e63b6a2023aea18dd36f804f88>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupExpressionFragment$data = {
  readonly content: string;
  readonly correctedContent: string | null | undefined;
  readonly created: any;
  readonly grammarExplanation: string | null | undefined;
  readonly id: string;
  readonly wordsExplanation: string | null | undefined;
  readonly " $fragmentType": "GroupExpressionFragment";
};
export type GroupExpressionFragment$key = {
  readonly " $data"?: GroupExpressionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupExpressionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupExpressionFragment",
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
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "correctedContent",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "grammarExplanation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "wordsExplanation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "cfea410c659bbbc21e0f7ada55b236fe";

export default node;
