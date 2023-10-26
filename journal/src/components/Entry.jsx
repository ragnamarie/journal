/* eslint-disable react/prop-types */
import { Image } from "./Image";
import star from "../resources/star.svg";

export function Entry({ title, date, text }) {
  return (
    <article>
      <Image src={star} alt="starIcon"></Image>
      <h2>{date}</h2>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
}
