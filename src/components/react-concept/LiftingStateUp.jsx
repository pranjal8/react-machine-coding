import { useState } from "react";
const PANEL = [
  {
    id: 0,
    title: "About",
    content:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.",
  },
  {
    id: 1,
    title: "",
    content: (
      <>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </>
    ),
  },
];

const LiftingStateUp = () => {
  const [activeIndex, setActiveIndex] = useState(PANEL[0].id);

  return (
    <div>
      <h2> Almaty, Kazakhstan </h2>
      {PANEL.map((item) => (
        <>
          <Panel
            key={item.id}
            title={item.title}
            isActive={activeIndex === item.id}
            onShow={() => setActiveIndex(item.id)}
          >
            {item.content}
          </Panel>
          <hr />
        </>
      ))}
    </div>
  );
};

export default LiftingStateUp;

function Panel({ title, children, isActive, onShow }) {
  return (
    <>
      <section>
        <h3>{title} </h3>
        {isActive ? (
          <p> {children}</p>
        ) : (
          <button onClick={onShow}> Show</button>
        )}
      </section>
    </>
  );
}
