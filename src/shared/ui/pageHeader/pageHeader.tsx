import './pageHeader.css'

type PageHeaderProps = {
  headerText: string;
}

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className="pageHeaderContainer">
      <p className="pageHeaderText">
        {`< ${props.headerText}`}
      </p>
    </div>
  )
}