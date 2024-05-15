// Enums for various linguistic attributes, providing clear categorization of linguistic properties.

// TODO add verb aspects

export enum PartOfSpeech {
  NOUN = 'NOUN',
  VERB = 'VERB',
  ADJECTIVE = 'ADJECTIVE',
  ADVERB = 'ADVERB',
  PRONOUN = 'PRONOUN',
  PREPOSITION = 'PREPOSITION',
  CONJUNCTION = 'CONJUNCTION',
  DETERMINER = 'DETERMINER',
  INTERJECTION = 'INTERJECTION',
  PARTICLE = 'PARTICLE',
  CLITIC = 'CLITIC', // Added CLITIC as a part of speech
}

export enum Tense {
  PRESENT = 'PRESENT',
  PAST = 'PAST',
  FUTURE = 'FUTURE',
  PERFECT = 'PERFECT',
  PLUPERFECT = 'PLUPERFECT',
  FUTURE_PERFECT = 'FUTURE_PERFECT',
  IMPERFECT = 'IMPERFECT',
}

export enum Mood {
  INDICATIVE = 'INDICATIVE',
  IMPERATIVE = 'IMPERATIVE',
  SUBJUNCTIVE = 'SUBJUNCTIVE',
  CONDITIONAL = 'CONDITIONAL',
  OPTATIVE = 'OPTATIVE',
  INFINITIVE = 'INFINITIVE',
  PARTICIPLE = 'PARTICIPLE',
  GERUND = 'GERUND',
}

export enum Gender {
  MASCULINE = 'MASCULINE',
  FEMININE = 'FEMININE',
  NEUTER = 'NEUTER',
}

export enum Number {
  SINGULAR = 'SINGULAR',
  PLURAL = 'PLURAL',
}

export enum Case {
  NOMINATIVE = 'NOMINATIVE',
  ACCUSATIVE = 'ACCUSATIVE',
  DATIVE = 'DATIVE',
  GENITIVE = 'GENITIVE',
  LOCATIVE = 'LOCATIVE',
  INSTRUMENTAL = 'INSTRUMENTAL',
  PREPOSITIONAL = 'PREPOSITIONAL',
  VOCATIVE = 'VOCATIVE',
}

export enum Voice {
  ACTIVE = 'ACTIVE',
  PASSIVE = 'PASSIVE',
  MIDDLE = 'MIDDLE',
}

export enum Aspect {
  IMPERFECTIVE = 'IMPERFECTIVE',
  PERFECTIVE = 'PERFECTIVE',
  PROGRESSIVE = 'PROGRESSIVE',
}

export enum Politeness {
  INFORMAL = 'INFORMAL',
  FORMAL = 'FORMAL',
  HONORIFIC = 'HONORIFIC',
}

export enum Clusivity {
  INCLUSIVE = 'INCLUSIVE',
  EXCLUSIVE = 'EXCLUSIVE',
}

export enum Evidentiality {
  WITNESSED = 'WITNESSED',
  REPORTED = 'REPORTED',
  INFERRED = 'INFERRED',
  ASSUMED = 'ASSUMED',
}

export enum Register {
  SLANG = 'SLANG',
  COLLOQUIAL = 'COLLOQUIAL',
  STANDARD = 'STANDARD',
  FORMAL = 'FORMAL',
  TECHNICAL = 'TECHNICAL',
}

export enum Valency {
  INTRANSITIVE = 'INTRANSITIVE',
  TRANSITIVE = 'TRANSITIVE',
  DITRANSITIVE = 'DITRANSITIVE',
}

// Enums for German verb prefixes and their lexical senses.

export enum PrefixType {
  SEPARABLE = 'SEPARABLE',
  INSEPARABLE = 'INSEPARABLE',
}

export enum PrefixLexicalSense {
  DIRECTIONAL = 'DIRECTIONAL',
  COMPLETION = 'COMPLETION',
  INTENSIFICATION = 'INTENSIFICATION',
  REVERSAL = 'REVERSAL',
  BEGINNING = 'BEGINNING',
}

// Enum for syntax functions, offering a detailed list of syntactic roles.

export enum SyntaxFunction {
  SUBJECT = 'SUBJECT',
  OBJECT = 'OBJECT',
  INDIRECT_OBJECT = 'INDIRECT_OBJECT',
  PREDICATE = 'PREDICATE',
  ADVERBIAL = 'ADVERBIAL',
  DETERMINATIVE = 'DETERMINATIVE',
  COMPLEMENT = 'COMPLEMENT',
  MODIFIER = 'MODIFIER',
  MAIN_VERB = 'MAIN_VERB',
  AUXILIARY_VERB = 'AUXILIARY_VERB',
  MODAL_VERB = 'MODAL_VERB',
  RELATIVE_CLAUSE = 'RELATIVE_CLAUSE',
  NOMINAL_CLAUSE = 'NOMINAL_CLAUSE',
  ADVERBIAL_CLAUSE = 'ADVERBIAL_CLAUSE',
}

// Types defining the structure of linguistic features within the schema.

export type Morphology = {
  tense?        :Tense; // The tense of the verb (if applicable)
  mood?         :Mood; // The mood of the verb (if applicable)
  voice?        :Voice; // The voice of the verb (active, passive, middle)
  aspect?       :Aspect; // The aspect of the verb (imperfective, perfective, etc.)
  person?       :number; // The grammatical person (first, second, third as integer)
  number?       :Number; // Singular or plural form
  gender?       :Gender; // Masculine, feminine, or neuter gender
  case?         :Case; // Grammatical case (nominative, accusative, etc.)
  evidentiality?:Evidentiality; // Indicates the source of the speaker's knowledge
  politeness?   :Politeness; // Level of formality or respect
  clusivity?    :Clusivity; // Inclusivity or exclusivity of 'we'
  register?     :Register; // Language register (slang, formal, etc.)
  valency?      :Valency; // Valency of the verb (transitive, intransitive, etc.)
  variantForm?  :string; // Variant form of the word (e.g., for Russian verbs)
}

export type Syntax = {
  function:SyntaxFunction; // The functional role of the word in the sentence
  head    :number; // Index pointing to the syntactic head in the expression array
}

export type Clitic = {
  clitic    :string; // The clitic itself
  pos       :PartOfSpeech; // Part of speech of the clitic
  morphology:Morphology; // Morphological details of the clitic
  syntax    :Syntax; // Syntactic details and relationships of the clitic
}

export type ComposedWord = {
  word      :string; // The composed word text
  components:Word[]; // Array of components that make up the composed word
}

export type Word = {
  word      :string; // The actual word text
  lemma     :string[]; // Array of lemmas or dictionary forms of the word
  pos       :PartOfSpeech; // Part of speech (noun, verb, etc.)
  morphology:Morphology; // Morphological details
  syntax    :Syntax; // Syntactic details and relationships
  clitics?  :Clitic[]; // Optional array of clitics attached to the word
  composed? :ComposedWord; // Optional composed word details
  prefix?: {
    prefix:string; // The prefix itself
    type  :PrefixType; // Type of the prefix (separable, inseparable)
    sense :PrefixLexicalSense; // Lexical sense of the prefix
  };
}

export type Expression = {
  expression:string; // The full sentence or expression
  language  :string; // Language of the expression
  words     :Word[]; // Array of words constituting the expression
}
