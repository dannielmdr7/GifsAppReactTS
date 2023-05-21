import { useState } from "react"
interface Props {
  onNewCategory: (value:string) => void

}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChage = (value: string) => {
    setInputValue(value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
    setInputValue('');
  }
  return (
    <form onSubmit={(event) => onSubmit(event)} >
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChage(event.target.value)}
      />
    </form>
  )
}
