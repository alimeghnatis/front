/**
 * @generated SignedSource<<33d7750bf60c38f5f84b1d7a9c86ae54>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Aspect = "IMPERFECTIVE" | "PERFECTIVE" | "PROGRESSIVE" | "%future added value";
export type Case = "ACCUSATIVE" | "DATIVE" | "GENITIVE" | "INSTRUMENTAL" | "LOCATIVE" | "NOMINATIVE" | "PREPOSITIONAL" | "VOCATIVE" | "%future added value";
export type Clusivity = "EXCLUSIVE" | "INCLUSIVE" | "%future added value";
export type Gender = "FEMININE" | "MASCULINE" | "NEUTER" | "%future added value";
export type Mood = "CONDITIONAL" | "GERUND" | "IMPERATIVE" | "INDICATIVE" | "INFINITIVE" | "OPTATIVE" | "PARTICIPLE" | "SUBJUNCTIVE" | "%future added value";
export type Number = "PLURAL" | "SINGULAR" | "%future added value";
export type PartOfSpeech = "ADJECTIVE" | "ADVERB" | "CLITIC" | "CONJUNCTION" | "DETERMINER" | "INTERJECTION" | "NOUN" | "PARTICLE" | "PREPOSITION" | "PRONOUN" | "VERB" | "%future added value";
export type Politeness = "FORMAL" | "HONORIFIC" | "INFORMAL" | "%future added value";
export type Register = "COLLOQUIAL" | "FORMAL" | "SLANG" | "STANDARD" | "TECHNICAL" | "%future added value";
export type SyntaxFunction = "ADVERBIAL" | "ADVERBIAL_CLAUSE" | "AUXILIARY_VERB" | "COMPLEMENT" | "COORDINATING_CONJUNCTION" | "DETERMINATIVE" | "INDIRECT_OBJECT" | "MAIN_VERB" | "MODAL_VERB" | "MODIFIER" | "NOMINAL_CLAUSE" | "OBJECT" | "PREDICATE" | "RELATIVE_CLAUSE" | "SUBJECT" | "%future added value";
export type Tense = "FUTURE" | "FUTURE_PERFECT" | "IMPERFECT" | "PAST" | "PERFECT" | "PLUPERFECT" | "PRESENT" | "%future added value";
export type Voice = "ACTIVE" | "MIDDLE" | "PASSIVE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type WordMorphosaFragment$data = {
  readonly lemma: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly morphology: {
    readonly aspect: Aspect | null | undefined;
    readonly case: Case | null | undefined;
    readonly clusivity: Clusivity | null | undefined;
    readonly gender: Gender | null | undefined;
    readonly mood: Mood | null | undefined;
    readonly number: Number | null | undefined;
    readonly person: number | null | undefined;
    readonly politeness: Politeness | null | undefined;
    readonly register: Register | null | undefined;
    readonly tense: Tense | null | undefined;
    readonly voice: Voice | null | undefined;
  } | null | undefined;
  readonly pos: PartOfSpeech | null | undefined;
  readonly syntax: {
    readonly function: SyntaxFunction | null | undefined;
    readonly head: number | null | undefined;
  } | null | undefined;
  readonly word: string | null | undefined;
  readonly " $fragmentType": "WordMorphosaFragment";
};
export type WordMorphosaFragment$key = {
  readonly " $data"?: WordMorphosaFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"WordMorphosaFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WordMorphosaFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "word",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lemma",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pos",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Morphology",
      "kind": "LinkedField",
      "name": "morphology",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "tense",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mood",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "voice",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "aspect",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "person",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "number",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "gender",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "case",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "politeness",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "clusivity",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "register",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Syntax",
      "kind": "LinkedField",
      "name": "syntax",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "function",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "head",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Word",
  "abstractKey": null
};

(node as any).hash = "f68351d3c63aee38f38159413e6a8493";

export default node;
