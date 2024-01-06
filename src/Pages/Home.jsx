import { Fragment } from "react";
import Landing from "../Components/Landing";
import Testimonials from "../Components/Testimonials";
import GetStarted from "../Components/GetStarted";
import StayProductives from "../Components/StayProductives";
import Features from "../Components/Features";
export default function Home() {
  return (
    <Fragment>
      <Landing/>
    <Features/>
    <StayProductives/>
    <Testimonials/>
    <GetStarted/>
    </Fragment>
  )
}
