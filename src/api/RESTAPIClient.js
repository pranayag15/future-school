import Proptypes from 'prop-types'
export const submitBasicQuestionsResponse = async (
    {userId,
    firstName,
    lastName,
    email,
    phoneNumber}
  ) => {
    return new Promise((resolve, reject) => {
      resolve({
        submissionStatus: "success",
        savedResponse: {
          userId,
          firstName,
          lastName,
          email,
          phoneNumber
        }
      });
    });
  };
  
  export const submitExperienceQuestionsResponse = async (
    {userId,
    college,
    lastCompany,
    numYearsExperience}
  ) => {
    return new Promise((resolve, reject) => {
      resolve({
        submissionStatus: "success",
        savedResponse: {
          userId,
          college,
          lastCompany,
          numYearsExperience
        }
      });
    });
  };
  
  export const submitShortResponseQuestion = async (
    {userId,
    response}
  ) => {
    return new Promise((resolve, reject) => {
      resolve({
        submissionStatus: "success",
        savedResponse: {
          userId,
          response
        }
      });
    });
  };
  
  // module.exports = {
  //   submitBasicQuestionsResponse,
  //   submitExperienceQuestionsResponse,
  //   submitShortResponseQuestion
  // };