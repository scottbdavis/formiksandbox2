import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        picked: ""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-radio-group">What Do You Want to Improve?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="Save Time" value="Save Time" />
              Save Time
            </label>
            <br />
            <label>
              <Field type="radio" name="Save Money" value="Save Money" />
              Save Money
            </label>
            <br />
            <label>
              <Field type="radio" name="Go Faster" value="Go Faster" />
              Go Faster
            </label>
            <br />
            <div>Picked: {values.picked}</div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
