import * as React from 'react'
import {
  useCallback, useRef,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import { Button } from '@aztlan/ui'

import {
  graphql, useFragment,
} from 'react-relay'

const FRAGMENT = graphql`
  fragment AudioButtonFragment on ExpressionNode {
    id
    audioUrl
    isNew
    isProcessed
    iso6391
    iso6392
    iso6393
  }
`

function AudioButton(
  {
    data,
    playbackRate = 1,
    content = '<',
    ...props
  }: InferProps<typeof AudioButton.propTypes>,
  ref,
): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = useCallback(
    () => {
      const audio = audioRef.current

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
    }, [playbackRate],
  )

  const language = result.iso6391 || result.iso6392 || result.iso6393

  // const isNewAndUnprocessed = result.isNew && !result.isProcessed

  return (
    <>
      <Button
        onClick={playAudio}
        disabled={!result.audioUrl || result.isNew}
        // variant="borderless"
        className={[
          result.isNew && styleNames.modifierNew,
          //! result.isProcessed && styleNames.modifierLoading,
        ]
          .filter(Boolean)
          .join(' ')}
        ref={ref}
        title={
          result.audioUrl
            ? playbackRate < 1
              ? `Play audio at ${playbackRate}x speed`
              : 'Play audio'
            : `Language ${language} has no audio`
        }
        {...props}
      >
        {content}
      </Button>
      {result.audioUrl && (
        <audio ref={audioRef}>
          <source
            src={result.audioUrl}
            type="audio/mpeg"
          />
        </audio>
      )}
    </>
  )
}

AudioButton.propTypes = {
  data        :PropTypes.object.isRequired,
  playbackRate:PropTypes.number,
  content     :PropTypes.string,
}

export default React.memo(
  React.forwardRef(AudioButton as React.ForwardRefRenderFunction<HTMLButtonElement>),
  (
    prevProps, nextProps,
  ) => prevProps.data.id === nextProps.data.id,
)
