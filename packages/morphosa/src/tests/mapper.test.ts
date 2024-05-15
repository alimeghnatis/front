/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import mapper, {
  StyleAnnotatedWord,
  CSS_CLASSES,
  attributesToMap,
  getNestedProperty,
  // @ts-ignore
} from '../mapper.ts'
// @ts-ignore
import { Word } from '../types.ts'

// Helper function to read JSON files
function readJSONFile(filePath: string): any {
  const rawData = fs.readFileSync(
    path.resolve(
      __dirname, filePath,
    ), 'utf8',
  )
  return JSON.parse(rawData)
}

// Test data files
const testFiles = [
  'test1.json',
  'test2.json',
  'test3.json',
  'test4.json',
  'test5.json',
]

// Parameterized Jest test
describe(
  'Class Mapper Tests', () => {
    test.each(testFiles)(
      'Testing file %s', (testFilePath) => {
        const testData: { sentence: string; words: Word[] } = readJSONFile(testFilePath)
        const result: StyleAnnotatedWord[] = mapper(testData.words)

        result.forEach((
          styledWord, index,
        ) => {
          const originalWord = testData.words[index]
          // console.log(`Testing word: ${originalWord.word}`)

          // Verify that the part of speech class is correctly applied
          if (styledWord.classes.includes(CSS_CLASSES.pos[originalWord.pos])) {
            // console.log(`- POS class applied correctly: ${originalWord.pos}`)
          } else {
            console.error(`- POS class NOT applied correctly: ${originalWord.pos}`)
          }

          // Verify morphology classes
          attributesToMap.slice(1).forEach((attr) => {
            // Skipping the first element as it's POS
            const value = getNestedProperty(
              originalWord, attr,
            )
            if (value) {
              const [
                mainKey,
                subKey,
              ] = attr.split('.')
              if (subKey) {
                if (
                  styledWord.classes.includes(CSS_CLASSES[mainKey][subKey][value])
                ) {
                  // console.log(`- ${subKey} class applied correctly: ${value}`)
                } else {
                  console.error(`- ${subKey} class NOT applied correctly: ${value}`)
                }
              } else if (styledWord.classes.includes(CSS_CLASSES[mainKey][value])) {
                // console.log(`- ${mainKey} class applied correctly: ${value}`)
              } else {
                console.error(`- ${mainKey} class NOT applied correctly: ${value}`)
              }
            }
          })

          console.log()
        })
      },
    )
  },
)
