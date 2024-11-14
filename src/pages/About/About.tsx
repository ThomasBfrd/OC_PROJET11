import { useEffect, useState } from "react";
import CollapseDetails from "../../components/CollapseDetails/CollapseDetails";
import "./About.scss";

export interface About {
  content: string;
  title: string;
}
export default function About() {
  const [aboutContent, setAboutContent] = useState<Array<About>>([]);

  useEffect(() => {
    fetch("/public/about.json")
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data: Array<About>) => {
        return setAboutContent(data);
      })
      .catch((error) => {
        throw Error(error)
      });

    return () => {};
  }, []);

  return (
    <div className="about__main">
      <div className="about__main__cover">
        <img
          src="../../../public/Image source 2.png"
          className="about__main__cover-img"
        />
      </div>
      <ul className="about__main__list about__main__list-padding">
        {aboutContent.map((content, index) => (
          <li key={index} className="about__main__list__item">
            <CollapseDetails
              content={content.content}
              arrayContent={[]}
              title={content.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
