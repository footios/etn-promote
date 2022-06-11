import React, { FC } from "react";

interface Props {
  mailto: any;
  label: any;
}
const ButtonMailto: FC<Props> = ({ mailto, label }) => {
  return (
    <a
      href="#"
      target="_blank"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </a>
  );
};

export default ButtonMailto;
