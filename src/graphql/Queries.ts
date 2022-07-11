import { gql } from "@apollo/client";

export const getRockets = gql`
  query GetRockets($limit: Int = 2) {
    rockets(limit: $limit) {
      id
      name
      mass {
        kg
      }
      height {
        meters
      }
    }
  }
`;

export const LOAD_SHIPS = gql`
  query {
    getAllShips {
      name
      home_port
      image
    }
  }
`;
