import React, { useEffect, useState, useMemo } from 'react'
import { submitBasicQuestionsResponse } from '../api/RESTAPIClient'
import { Form, Text } from 'informed'
import history from '../history';

function BasicQuestions(data) {
  const [formValues, setFormValues] = useState()

  const handleSubmit = (formData) => {
    const { firstName, lastName, email, number } = formData
    if (Object.keys(formData).length !== 0 && firstName && lastName && email && number) {
      formData.userId = Date.now().toString().substr(10, 13) //for unique userId
      console.log(formData)
      setFormValues(formData)
    } else {
      console.log("no data")
      alert("Fill form completely")
    }
  }

  useEffect(() => {
    if (formValues) {
      console.log(formValues)
      submitBasicQuestionsResponse(formValues).then(res => {
        console.log(res)
        history.push('/experience')
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
                  <h4 style={{ marginTop: "-2%" }}>Part 1/3 - Basic Questions</h4>
                </div>
              </center>
            </div>
            <Form onSubmit={formState => handleSubmit(formState)}>
              <div style={{ paddingTop: "10%" }}>
                <form class="ui form">
                  <div class="equal width fields">
                    <div class="field">
                      <div class="meta">
                        <label class="meta">First Name</label>
                      </div>
                      <Text field="firstName" />
                    </div>
                    <div class="field">
                      <div class="meta">
                        <label>Last Name</label>
                      </div>
                      <Text field="lastName" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="meta">
                      <label class="meta">Email</label>
                    </div>
                    <Text field="email" />
                  </div>
                  <div class="field">
                    <div class="meta">
                      <label class="meta">Phone Number</label>
                    </div>
                    <Text field="number" />
                  </div>
                  <div style={{ paddingTop: "5%" }}>
                    <button style={{ backgroundImage: "linear-gradient(to right, cornflowerblue , #53bffe)" }} type="submit" class="ui fluid blue button">Submit</button>
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

export default BasicQuestions