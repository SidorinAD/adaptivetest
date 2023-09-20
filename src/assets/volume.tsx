function VolumeSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 48 48"
    >
      <g>
        <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 01-2-2V17.01a2 2 0 012-2h5.799S17 6 24 6z"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M32 15h0a11.91 11.91 0 011.684 1.859A12.07 12.07 0 0136 24c0 2.654-.846 5.107-2.278 7.09-.505.698-1.083 1.34-1.722 1.91"
        ></path>
      </g>
    </svg>
  );
}

export default VolumeSvg;