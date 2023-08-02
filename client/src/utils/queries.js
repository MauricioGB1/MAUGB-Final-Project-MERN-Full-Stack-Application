import gql from "graphql-tag";

export const QUERY_CHECKOUT = gql`
  query checkout($projects: [ID]!) {
    checkout(projects: $projects) {
      session
    }
  }
`;


export const QUERY_PROJECTS = gql`
  query {
    projects {
      name
      _id
      price
      description
      image
      quantity
    }
  }
`;

export const QUERY_ALL_PROJECTS = gql`
  {
    projects {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      email
      orders {
        _id
        purchaseDate
        projects {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
