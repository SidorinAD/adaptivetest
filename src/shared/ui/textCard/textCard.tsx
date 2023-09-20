import './textCard.css'

type TextCardProps = {
  titleText: string,
  text?: string,
  transparent?: boolean
}

export const TextCard = ({ titleText, text, transparent = true }: TextCardProps) => {
  if( transparent === true) {
    return (
      <div className="textCardTransparentContainer">
        <p className="headerText">
          {titleText}
        </p>

        <p className="regularText">
          {text}
        </p>
      </div>
    )
  } else {
    return (
      <div className="textCardContainer">
        <p className="headerText">
          {titleText}
        </p>

        <p className="regularText">
          {text}
        </p>
      </div>
    )
  }
}