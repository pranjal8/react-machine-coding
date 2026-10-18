function MultiStepForm() {
  return (
    <div>
      <aside>
        <h1>Book a studio session</h1>
        <p>Takes about two minutes.</p>
      </aside>
      <main>
        <h1>Your details</h1>
        <p> We'll send the confirmation here.</p>

        <label for="">
          {" "}
          Full name
          <input type="text" />
        </label>
        <label for="">
          {" "}
          Email
          <input type="email" />
        </label>
        <label for="">
          {" "}
          Phone(optional)
          <input type="phone" />
        </label>
        <button>Continue</button>
      </main>
    </div>
  );
}
export default MultiStepForm;
