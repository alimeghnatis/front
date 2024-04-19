import * as React from 'react'
import {
  useCallback, useRef,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  graphql, useFragment,
} from 'react-relay'

const FRAGMENT = graphql`
  fragment AudioButtonFragment on ExpressionNode {
    id
    audioUrl
    iso6391
    iso6392
    iso6393
  }
`

function AudioButton({
  data,
  ...props
}: InferProps<typeof AudioButton.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = useCallback(
    (): void => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }, [audioRef],
  )

  const playAudioSlow = useCallback(
    (): void => {
      if (audioRef.current) {
        audioRef.current.playbackRate = 0.65
        audioRef.current.play()
      }
    }, [audioRef],
  )

  const language = result.iso6391 || result.iso6392 || result.iso6393
  //
  //
  return (
    <>
      {result.audioUrl && (
        <audio ref={audioRef}>
          <source
            src={result.audioUrl}
            type="audio/mpeg"
          />
        </audio>
      )}

      <button
        onClick={playAudio}
        disabled={!result.audioUrl}
        title={
          result.audioUrl ? 'Play audio' : `Language ${language} has no audio`
        }
        {...props}
      >
        &lt;
      </button>
      <button
        onClick={playAudioSlow}
        disabled={!result.audioUrl}
        title={
          result.audioUrl
            ? 'Play audio at 65% speed'
            : `Language ${language} has no audio`
        }
        {...props}
      >
        65
      </button>
    </>
  )
}

AudioButton.propTypes = { data: PropTypes.object.isRequired }

export default AudioButton
