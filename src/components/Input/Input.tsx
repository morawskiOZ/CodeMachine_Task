import * as React from 'react'
import { ReactElement, useState, memo } from 'react'

interface Props {
  onSearch: (phrase: string) => void
}

export const ContactInput = memo(
  ({ onSearch }: Props): ReactElement => {
    const [phrase, setPhrase] = useState('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPhrase(e.target.value)
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.keyCode === 13) {
        onSearch(phrase)
      }
    }

    const submitHandler = (): void => {
      onSearch(phrase)
    }

    return <input />
  },
)
