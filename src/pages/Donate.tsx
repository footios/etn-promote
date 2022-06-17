import React, { FC } from "react";

type Props = {
  language: string;
};

const Donate: FC<Props> = ({ language }) => {
  return (
    <section className="donate" id="donate">
      Donate
    </section>
  );
};

export default Donate;
