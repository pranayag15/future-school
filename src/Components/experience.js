import React, { useEffect, useState, useMemo } from 'react'
import { submitExperienceQuestionsResponse } from '../api/RESTAPIClient'
import { Form, Text } from 'informed'
import history from '../history';

function ExperienceQuestions(props) {
  const [formValues, setFormValues] = useState()

  const handleSubmit = (formData) => {
    const { college, lastCompany, numYearsExperience } = formData
    if (Object.keys(formData).length !== 0 && college && lastCompany && numYearsExperience) {
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
      submitExperienceQuestionsResponse(formValues).then(res => {
        console.log(res)
        history.push('/response')
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
                  <h4 style={{ marginTop: "-2%" }}>Part 2/3 - Experience Questions</h4>
                </div>
              </center>
            </div>
            <Form onSubmit={formState => handleSubmit(formState)}>
              <div style={{ paddingTop: "10%" }}>
                <form class="ui form">
                  <div class="field">
                    <div class="meta">
                      <label>Which college did you go to?</label>
                    </div>
                    <Text field="college" />
                  </div>
                  <div class="field">
                    <div class="meta">
                      <label>What was the last company you worked at?</label>
                    </div>
                    <Text field="lastCompany" />
                  </div>
                  <div class="field">
                    <div class="meta">
                      <label>How many years of experience do you have?</label>
                    </div>
                    <Text field="numYearsExperience" />
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

export default ExperienceQuestions