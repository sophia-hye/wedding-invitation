import { Fragment } from "react";
import Title from "../molecules/Title";
import GROOM from "@/constants/en/groom";
import BRIDE from "@/constants/en/bride";

export default function BrideGroom() {

  return (
    <Fragment>
      <Title type={'Default'}>{GROOM.FirstName.toUpperCase()}</Title>
      <Title type={'Default'}>{BRIDE.FirstName.toUpperCase()}</Title>
    </Fragment>
  )
}
