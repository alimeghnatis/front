/**
 * @generated SignedSource<<d50095a8b7cfe2ffe7494c0cc3dfbf8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardCardFragment$data = {
  readonly created: any;
  readonly description: string | null | undefined;
  readonly expressions: {
    readonly count: number;
  };
  readonly groups: {
    readonly count: number;
  };
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "BoardCardFragment";
};
export type BoardCardFragment$key = {
  readonly " $data"?: BoardCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardCardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "count",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardCardFragment",
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
      "name": "description",
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
      "concreteType": "GroupNodeConnection",
      "kind": "LinkedField",
      "name": "groups",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ExpressionNodeConnection",
      "kind": "LinkedField",
      "name": "expressions",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};
})();

(node as any).hash = "582189e1f96bef416890540521f1a948";

export default node;
