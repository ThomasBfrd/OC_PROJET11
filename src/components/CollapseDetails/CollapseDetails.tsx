import { useEffect, useState } from "react";
import "./CollapseDetails.scss";

export default function CollapseDetails({
  content,
  title,
  arrayContent,
}: {
  content: string | undefined;
  title: string;
  arrayContent: Array<string> | undefined;
}) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [hasClosed, setHasClosed] = useState<boolean>(false);

  useEffect(() => {
    return () => {};
  }, [isOpened]);

  let collapseBody;
  if (content) {
    collapseBody = (
      <p
        className={`collapse__content-text ${
          isOpened ? "is-revealing-text" : ""
        }`}
      >
        {content}
      </p>
    );
  }
  if (arrayContent && arrayContent?.length > 0) {
    collapseBody = (
      <ul className={`stuff__list ${isOpened ? "is-revealing-text" : ""}`}>
        {arrayContent &&
          arrayContent?.map((equipment, index) => (
            <li key={index} className={`stuff__list-text`}>
              {equipment}
            </li>
          ))}
      </ul>
    );
  }

  return (
    <div className="collapse">
      <div
        className="collapse__header"
        onClick={() => {
          setIsOpened(!isOpened);
          setHasClosed(!isOpened ? false : true);
        }}
      >
        <h3 className="collapse__header-title">{title}</h3>
        <img
          src="/public/chevron.png"
          alt="chevron"
          className={`
            ${isOpened ? "is-opening" : ""}
            ${!isOpened && hasClosed ? "is-closing" : ""}
            `}
        ></img>
      </div>

      <div
        className={`
          collapse__content
          ${!isOpened && hasClosed ? "collapse__content-hiding" : ""}
          ${isOpened ? "collapse__content-displaying" : ""}
        `}
      >
        {isOpened ? collapseBody : null}
      </div>
    </div>
  );
}
