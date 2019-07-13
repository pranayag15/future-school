import React, { useEffect, useState, useMemo } from 'react'
import { submitShortResponseQuestion } from '../api/RESTAPIClient'
import { Form, TextArea } from 'informed'
import history from '../history';

function ShortResponseQuestion(props) {
  const [formValues, setFormValues] = useState()

  const handleSubmit = (formData) => {
    const { response } = formData
    if (Object.keys(formData).length !== 0 && response) {
      formData.userId = Date.now().toString().substr(10, 13) //for unique userId
      setFormValues(formData)
    } else {
      console.log("no data")
      alert("Fill form completely")
    }
  }

  useEffect(() => {
    if (formValues) {
      console.log(formValues)
      submitShortResponseQuestion(formValues).then(res => {
        console.log(res)
        history.push('/success')
      })
    }
  });

  return (
    <React.Fragment>
      <div style={{ marginTop: "10%" }}>
        <div className="ui centered card" style={{ width: "60vh" }}>
          <div class="content">
            <div className="header" >
              <center style={{ paddingTop: "5%" }}>
                <h2>User Onboarding</h2>
                <div className="meta">
                  <h4 style={{ marginTop: "-2%" }}>Part 3/3 - Short Response Question</h4>
                </div>
              </center>
            </div>
            <Form onSubmit={formState => handleSubmit(formState)}>
              <div style={{ paddingTop: "10%" }}>
                <form class="ui form">
                  <div class="field">
                    <div class="meta">
                      <label>Why are you interested in software engineering?</label>
                    </div>
                    <TextArea field="response" />
                  </div>
                  <div style={{ paddingTop: "5%" }}>
                    <button 
                      style={{ backgroundImage: "linear-gradient(to right, cornflowerblue , #53bffe)" }}
                      type="submit" 
                      class="ui fluid blue button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ShortResponseQuestion