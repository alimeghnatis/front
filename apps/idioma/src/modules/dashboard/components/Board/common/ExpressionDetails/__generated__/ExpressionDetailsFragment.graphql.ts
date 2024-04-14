/**
 * @generated SignedSource<<e61be91850dc896ab8c9d7e4b3640643>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionDetailsFragment$data = {
  readonly audioUrl: string | null | undefined;
  readonly changes: string | null | undefined;
  readonly content: string;
  readonly correctedContent: string | null | undefined;
  readonly created: any;
  readonly generalExplanation: string | null | undefined;
  readonly grammarExplanation: string | null | undefined;
  readonly id: string;
  readonly iso6391: string | null | undefined;
  readonly iso6392: string | null | undefined;
  readonly iso6393: string;
  readonly wordsExplanation: string | null | undefined;
  readonly " $fragmentType": "ExpressionDetailsFragment";
};
export type ExpressionDetailsFragment$key = {
  readonly " $data"?: ExpressionDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExpressionDetailsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExpressionDetailsFragment",
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
      "name": "generalExplanation",
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
      "name": "audioUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "changes",
      "storageKey": null
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "f74c787d91755c973f3d36b21c9b306c";

export default node;
