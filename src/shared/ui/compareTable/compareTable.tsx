import VolumeSvg from '../../../assets/volume';
import './compareTable.css';

type CompareTableProps = {
  leftSide: {
    text: string;
    svgLeft: boolean;
    svgRight: boolean;
  }[];
  rightSide: {
    text: string;
    svgLeft: boolean;
    svgRight: boolean;
  }[];
};

export const CompareTable = (props: CompareTableProps) => {
  return (
    <div className="compareTableContainer">
      <p className="compareTableContainerTitle"> texttextextextext</p>

      <div className="compareTableContent">
        <div className="compareTableColumn">
          {props.leftSide.map((data) => (
            <div
              className="compareTableRow"
              key={data.text}
            >
              {data.svgLeft === true ? <VolumeSvg /> : <></>}

              <p className="compareTableRowText">{data.text}</p>

              {data.svgRight === true ? <VolumeSvg /> : <></>}
            </div>
          ))}
        </div>

        <div className="compareTableDivider" />

        <div className="compareTableColumn">
          {props.rightSide.map((data) => (
            <div
              className="compareTableRow"
              key={data.text}
            >
              {data.svgLeft === true ? <VolumeSvg /> : <></>}

              <p className="compareTableRowText">{data.text}</p>

              {data.svgRight === true ? <VolumeSvg /> : <></>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
