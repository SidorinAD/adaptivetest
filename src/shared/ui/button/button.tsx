import './button.css'

type ButtonProps = {
  buttonText: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button className="button">
      {props.buttonText}
    </button>
  )
}