const { AwesomeGraphQLClient, gql } = require("awesome-graphql-client");
const fetch = require("node-fetch");

const client = new AwesomeGraphQLClient({
  endpoint: process.env.CMS_ENDPOINT,
  fetch,
});

const getAllEmployees = async (req, resp) => {
  if (req.query.company) {
    const compName = req.query.company;
    const query = gql`
    {
      employees(where: { empCompany: ${compName} }) {
        id
        empName
        empCompany
        empEmail
        profile_url {
          url
        }
        empEmail
        socialMediaLink
        empPosition
        hobbies
        skills
      }
    }
  `;
    try {
      const { employees } = await client.request(query);
      return resp.status(200).json({
        status: "Successfull",
        data: employees,
      });
    } catch (err) {
      return resp.status(400).json({
        status: "Successfull",
        message: "Bad API request",
      });
    }
  }

  return resp.status(400).json({
    status: "Successfull",
    message: "Bad API request",
  });
};

const getEmployeeById = async (req, resp) => {
  const empId = JSON.stringify(req.params.empId);

  const query = gql`
    {
      employees(where: { id: ${empId} }) {
        id
        empName
        empCompany
        empEmail
        profile_url {
          url
        }
        empEmail
        socialMediaLink
        empPosition
        hobbies
        skills
      }
    }
  `;
  try {
    const { employees } = await client.request(query);
    return resp.status(200).json({
      status: "Successfull",
      data: [employees],
    });
  } catch (err) {
    console.log(err);
    return resp.status(400).json({
      status: "Successfull",
      message: "Bad API request",
    });
  }
};

module.exports = { getAllEmployees, getEmployeeById };
