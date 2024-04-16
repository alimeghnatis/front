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
        {...props}
      >
        &lt;
      </button>
    </>
  )
}

AudioButton.propTypes = { data: PropTypes.object.isRequired }

export default AudioButton
