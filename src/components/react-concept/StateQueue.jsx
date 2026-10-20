function increment(n) {
  return n + 1;
}
function multiplyByThree(n){
  return n *3
}

increment.toString = () => "n => n+1";
multiplyByThree.toString =()=>'n=> n*3'

export default function StateQueue() {
  return (
    <div>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
      <hr />
      <TestCase baseState={1} queue={[6, multiplyByThree,]} expected={18} />
      <hr />
    </div>
  );
}

function TestCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);

  return (
    <>
      <p>
        Base State: <b> {baseState} </b>
      </p>
      <p>
        {" "}
        Queue: <b> [{queue.join(", ")}] </b>{" "}
      </p>
      <p>
        Expected: <b> {expected} </b>{" "}
      </p>

      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        Your result: <b> {actual} </b>(
        {actual === expected ? "correct" : "wrong"})
      </p>
    </>
  );
}

function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let item of queue) {
    if (typeof item === "function") {
      finalState = item(finalState);
    } else {
      finalState = item;
    }
  }

  return finalState;
}