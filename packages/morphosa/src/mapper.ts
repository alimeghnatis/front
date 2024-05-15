import type { Word } from './types.js'

// Constants for CSS class names organized by grammatical attributes
export const CSS_CLASSES = {
  pos:{
    NOUN        :'noun',
    VERB        :'verb',
    ADJECTIVE   :'adjective',
    ADVERB      :'adverb',
    PRONOUN     :'pronoun',
    PREPOSITION :'preposition',
    PARTICLE    :'particle',
    CONJUNCTION :'conjunction',
    DETERMINER  :'determiner',
    INTERJECTION:'interjection',
    CLITIC      :'clitic',
  },
  morphology:{
    tense:{
      PRESENT       :'present',
      PAST          :'past',
      FUTURE        :'future',
      PERFECT       :'perfect',
      PLUPERFECT    :'pluperfect',
      FUTURE_PERFECT:'future-perfect',
      IMPERFECT     :'imperfect',
    },
    mood:{
      INDICATIVE :'indicative',
      IMPERATIVE :'imperative',
      SUBJUNCTIVE:'subjunctive',
      CONDITIONAL:'conditional',
      OPTATIVE   :'optative',
      INFINITIVE :'infinitive',
      PARTICIPLE :'participle',
      GERUND     :'gerund',
    },
    gender:{
      MASCULINE:'masculine',
      FEMININE :'feminine',
      NEUTER   :'neuter',
    },
    number:{
      SINGULAR:'singular',
      PLURAL  :'plural',
    },
    case:{
      NOMINATIVE   :'nominative',
      ACCUSATIVE   :'accusative',
      DATIVE       :'dative',
      GENITIVE     :'genitive',
      LOCATIVE     :'locative',
      INSTRUMENTAL :'instrumental',
      PREPOSITIONAL:'prepositional',
      VOCATIVE     :'vocative',
    },
  },
}

// Define the StyleAnnotatedWord type
export type StyleAnnotatedWord = {
  string :string; // The actual word text
  classes:string[];
  head   :number;
  word   :Word; // The original Word object
}

// List of attributes to map
export const attributesToMap = [
  'pos',
  'morphology.tense',
  'morphology.mood',
  'morphology.gender',
  'morphology.number',
  'morphology.case',
]

// Helper function to get nested property value
export function getNestedProperty(
  obj: any, path: string,
): any {
  return path.split('.').reduce(
    (
      o, p,
    ) => (o ? o[p] : undefined), obj,
  )
}

// Mapper function to transform Word array to StyleAnnotatedWord array
function mapper(
  AnalyzedText: Word[], exclude:string[] = [],
): StyleAnnotatedWord[] {
  return AnalyzedText.map((word) => {
    const classes: string[] = []

    // Iterate over the attributes to map and add classes dynamically
    attributesToMap.forEach((attr) => {
      const value = getNestedProperty(
        word, attr,
      )
      if (value) {
        const [
          mainKey,
          subKey,
        ] = attr.split('.')
        if (subKey && !exclude.includes(subKey) && !exclude.includes(value)) {
          classes.push(subKey)
          classes.push(CSS_CLASSES[mainKey][subKey][value])
        } else if (!exclude.includes(value)) {
          classes.push(CSS_CLASSES[mainKey][value])
        }
      }
    })

    return {
      string:word.word,
      classes,
      head  :word.syntax.head,
      word,
    }
  })
}

export default mapper
