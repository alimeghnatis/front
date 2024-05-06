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
  const audioSlowRef = useRef<HTMLAudioElement>(null)

  const playAudio = useCallback(
    (
      playbackRate, ref,
    ) => {
      const audio = ref.current

      document.querySelectorAll('audio').forEach((a) => {
        if (a !== audio) {
          a.pause()
          a.currentTime = 0
        }
      })

      if (audio) {
        if (!audio.paused) {
          audio.pause()
          audio.currentTime = 0 // Reset the audio position to the start
        } else {
          audio.playbackRate = playbackRate
          audio.play()
        }
      }
    }, [],
  )

  const playAudioNormal = useCallback(
    (): void => {
      playAudio(
        1, audioRef,
      )
    }, [
      playAudio,
      audioRef,
    ],
  )

  const playAudioSlow = useCallback(
    (): void => {
      playAudio(
        0.65, audioSlowRef,
      )
    }, [
      playAudio,
      audioSlowRef,
    ],
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
      {result.audioUrl && (
        <audio ref={audioSlowRef}>
          <source
            src={result.audioUrl}
            type="audio/mpeg"
          />
        </audio>
      )}

      <button
        onClick={playAudioNormal}
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
